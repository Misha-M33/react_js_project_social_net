import React from 'react'
import styles from './FormsControls.module.css'
import { Field, WrappedFieldProps, WrappedFieldMetaProps } from 'redux-form'
import { fieldValidatorType } from '../../../../redux/utils/validators/validators'

type FormControlParamsType={
  meta: WrappedFieldMetaProps
}
const FormControl: React.FC<FormControlParamsType> = ({meta: {touched, error}, children}) => {
  const hasError = touched && error
  return (
  <div className={styles.formControl + " " + (hasError ? styles.error:'' )}>
    <div>
      {children }
    </div>
    { hasError && <span> {error} </span>}
  </div>
  )
}
export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const {input, meta, ...restProps}=props
  return <FormControl {...props} > <textarea {...restProps} {...input} /></FormControl>
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
  const {input, meta, ...restProps}=props
  return <FormControl {...props} > <input {...restProps} {...input} /></FormControl>
}
export function createField <formKeysType extends string> 
      (placeholder: string | undefined, 
      name: formKeysType, 
      validators: Array<fieldValidatorType>,
      component: React.FC<WrappedFieldProps>, 
      props={}, text='') { 
return <div>
    <Field placeholder={placeholder} 
          name={name} 
          validate={validators} 
          component={component}
          {...props} />  
          {text}
        </div>
      }

export type GetStringKeys<T> = Extract <keyof T, string>