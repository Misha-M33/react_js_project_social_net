import React from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form'
import { Textarea, createField } from '../../common/Preloader/FormsControls/FormsControls';
import {  maxLengthCreator, required } from '../../../redux/utils/validators/validators';
import { NewMessageFormValuesType } from '../Dialogs';

const maxLength50=maxLengthCreator(50)
type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType={}
const AddMessageForm: React.FC<InjectedFormProps <NewMessageFormValuesType,PropsType> & PropsType> = (props) => {
  return (
      <form onSubmit={props.handleSubmit }>
      <div>
      {createField <NewMessageFormValuesKeysType> ('Enter your newMess', 'newMessText',
      [required, maxLength50], Textarea)}
          
      </div>
      <div><button > Send </button> </div>
  </form>  
  )}
  
export default reduxForm<NewMessageFormValuesType> ({form: 'dialogsAddMessageForm' }) (AddMessageForm)
  
//<Field  component={Textarea} name='newMessText'
//validate={[required, maxLength50]}
//placeholder={'Enter your newMess'} />