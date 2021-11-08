import React from 'react'
import { reduxForm, InjectedFormProps} from 'redux-form'
import { createField, GetStringKeys, Input } from '../../../common/Preloader/FormsControls/FormsControls'
import { required } from '../../../../redux/utils/validators/validators'

type PropsType={

}
export type AddPostFormValuesType={
  newPostText: string
}
type AddPostFormValuesTypeKeys=GetStringKeys<AddPostFormValuesType>

const AddPostForm: React.FC<InjectedFormProps <AddPostFormValuesType,PropsType> & PropsType> = (props) =>{
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
      {createField<AddPostFormValuesTypeKeys> ("Yous post", 'newPostText', [required], Input)}
      </div>
      <div>
        <button> Add Post</button>
      </div>      
    </form>
  )
}

export default reduxForm<AddPostFormValuesType, PropsType>({form: 'profile-add-form'}) (AddPostForm)