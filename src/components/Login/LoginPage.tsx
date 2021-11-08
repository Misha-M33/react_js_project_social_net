import React from 'react'
import { reduxForm, InjectedFormProps } from 'redux-form'
import { Input, createField, GetStringKeys } from '../common/Preloader/FormsControls/FormsControls'
import { required } from '../../redux/utils/validators/validators'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import style from './../common/Preloader/FormsControls/FormsControls.module.css'
import { appStateType } from '../../redux/redux-store'
import {login} from '../../redux/auth-reducer'

type LoginFormOwnProps={
  captchaUrl: string | null
}
const LoginForm: React.FC<InjectedFormProps <loginFormValuesType,LoginFormOwnProps> & LoginFormOwnProps> =
({handleSubmit, error, captchaUrl}) => {
  return (      
      <form onSubmit={handleSubmit}>
        {createField<loginFormValuesTypeKey> ('Email', 'email', [required], Input)}
        {createField<loginFormValuesTypeKey> ('Password', 'password', [required], Input, {type: 'password'})}
        {createField<loginFormValuesTypeKey> (undefined, 'rememberMe', [], Input, {type: 'Checkbox'}, 'remember me')}
      { captchaUrl && < img src={captchaUrl} alt='Ty-Ty' /> }
      { captchaUrl && createField<loginFormValuesTypeKey> ('Symbol from image', 'captcha', [required], Input, {})}

        { error && <div className={style.formSummaryError}>
          {error}
        </div>}
        <div>
          <button> Login </button>
        </div>
      </form>
  )
  }

const LoginReduxForm = reduxForm<loginFormValuesType, LoginFormOwnProps>({ form: 'login'})(LoginForm) 

export type loginFormValuesType={
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}
type loginFormValuesTypeKey=GetStringKeys < loginFormValuesType>

export const LoginPage: React.FC = () => {

  const captchaUrl = useSelector((state: appStateType) => state.auth.captchaUrl)
  const isAuth = useSelector((state: appStateType) => state.auth.isAuth)
const dispatch = useDispatch()

const onSubmit =(formData: loginFormValuesType)=>{
  dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
  //console.log(formData)
}
if (isAuth) {
  return <Redirect to={'/profile'}/>
}
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
    } 