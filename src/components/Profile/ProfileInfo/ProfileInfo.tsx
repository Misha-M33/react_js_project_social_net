import React, { useState, ChangeEvent } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import photo_men from '../../../assets/images/men2.png'
import ProfileDataForm from './ProfileDataForm';
import { profileType, contactsType } from '../../../type/type';

type PropsType = {
  profile: profileType | null
  status: string
  updateStatus: (status: string)=> void
  isOwner: boolean
  savePhoto: (file: File)=> void  
  saveProfile: ( profile: profileType)=> Promise<any>  
}

const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => { 

  let [editMode, setEditMode]=useState(false)

  if (!profile) {
    return < Preloader />
  }
const onMainPhotoSelected =(e: ChangeEvent<HTMLInputElement> ) => {
if (e.target.files && e.target.files.length) {
  savePhoto(e.target.files[0])
}
}
const onSubmit=  (formData: profileType)=>{
  // todo: remove then
    saveProfile(formData).then(()=>{
      setEditMode(false)
    } ) 
}
    return (
    <div >
{/*    <div> 
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLc5vvWuJQCqZkHmZfXzWKFUt5p10GHyNQfw&usqp=CAU' alt='' />
</div>*/}
    <div className={s.descriptionBlock}>      
      <img src={profile.photos.small || photo_men } alt='' className={s.photo_men}/>
      { isOwner && < input type={'file'} onChange={onMainPhotoSelected} />}
      
      { editMode 
      ? < ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> 
      : < ProfileData goToEditMode={()=> {setEditMode(true)} } profile={profile} isOwner={isOwner} />}
      
      <ProfileStatusWithHooks status= {status} updateStatus={updateStatus}/>
    </div>
  </div>
  )
}

type ProfileDataPropsType={
  profile: profileType
  isOwner: boolean
  goToEditMode: ()=> void
}
const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
  return  <div>
    {isOwner && <div><button onClick={goToEditMode} >edit</button> </div>}
    <div>userId =  {profile.userId}</div>       
    <div> <b>Full name</b> {profile.fullName} </div>
    <div> <b>Looking for f job (Ищу ли я работу ?)</b> {profile.lookingForAJob ? 'yes': 'no' } </div> 
    {profile.lookingForAJob &&
    <div> <b>My professional skills</b> {profile.lookingForAJobDescription } </div>
    }
      <div> <b>About me</b> {profile.aboutMe } </div> 
      <div> <b>Contacts</b> : {Object.keys ( profile.contacts )
      .map(( key) => {
      return < Contact  key={key} contactTitle={key} ContactValue={profile.contacts[key as keyof contactsType] } />
      } )} </div>       
    </div>    
  }

type ContactType ={
  contactTitle: string
  ContactValue: string
}  

const Contact: React.FC<ContactType> =({ contactTitle, ContactValue}) => {
return  <div className={s.contact}> <b>{contactTitle}</b> : {ContactValue} </div> }

export default ProfileInfo;