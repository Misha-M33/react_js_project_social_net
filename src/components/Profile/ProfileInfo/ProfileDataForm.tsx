import React from 'react';
import { createField, Input, Textarea, GetStringKeys } from '../../common/Preloader/FormsControls/FormsControls';
import { reduxForm, InjectedFormProps } from 'redux-form';
import s from './ProfileInfo.module.css';
import style from './../../common/Preloader/FormsControls/FormsControls.module.css'
import { profileType } from '../../../type/type';

type propsType={
  //handleSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined 
  profile: profileType
  //error: string
}
type ProfileTypeKeys=GetStringKeys<profileType>

const ProfileDataForm: React.FC<InjectedFormProps<profileType,propsType> & propsType> = ({ handleSubmit, profile, error}) => {
  return <form onSubmit={handleSubmit}>
    <div> <button onClick={()=> {}} >save</button> </div>
    { error && <div className={style.formSummaryError}>
          {error}
        </div>}
    <div>userId =  {profile.userId}</div>       
    <div> <b>Full name</b> {createField<ProfileTypeKeys>('Full name', 'fullName', [], Input)} </div>
    <div> <b>Looking for f job (Ищу ли я работу ?)</b> 
    {createField<ProfileTypeKeys>('My professional skill', 'lookingForAJob', [], Input, {type:'checkbox'} )}
    </div> 
    
    <div> <b>My professional skills</b> 
      {createField<ProfileTypeKeys>('My professional skills', 'lookingForAJobDescription', [], Textarea )}
    </div>
    
    <div> <b>About me</b>  {/*{profile.aboutMe }*/} 
      {createField<ProfileTypeKeys>('About me', 'aboutMe', [], Textarea )}
    </div> 
      
      <div> <b>Contacts</b> : {Object.keys ( profile.contacts ).map( key => {
    return <div key={key} className={s.contact}> 
    {/* todo: create some solution for embedded objects */}
      <b>{key}: {createField(key, 'contacts.'+ key, [], Input)} </b>
      </div>
            } )} 
            </div> 
    </form>
  }
  const ProfileDataFormReduxForm=reduxForm<profileType, propsType> ({form: 'edit-profile'}) (ProfileDataForm)
  export default ProfileDataFormReduxForm 