import { resultCodeEnum, resultCodeForCaptchaEnum } from "../api/api"
import { stopSubmit, FormAction } from "redux-form"
import { authAPI } from "../api/auth-api"
import { securityAPI } from "../api/security-api"
import { InferActionsTypes, BaseThunkType } from "./redux-store"
//import { Action } from "redux"

//const SET_USER_DATA='SN/auth/SET_USER_DATA'
//const GET_CAPTCHA_URL_SUCCESS='SN/auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = { 
   userId: null as number | null,
   email: null as string | null,
   login: null as string | null,
   isAuth: false,
   captchaUrl: null as string | null// if null, captcha is not required
}

const authReducer=(state = initialState, action: ActionType ): initialStateType => {
   switch (action.type) {
      case 'SN/auth/SET_USER_DATA':
         case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
            return {
            ...state,
            ...action.payload,}            
      default:
               return state  
      }
}
export const actions={
   setAuthUserData: (userId: number | null, email: string | null, 
      login: string | null,isAuth: boolean) => ({
      type: 'SN/auth/SET_USER_DATA', payload: {userId, email, login, isAuth} } as const),
      getCaptchaUrlSuccess: (captchaUrl: string) => ({ 
         type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl} } as const)
}

export const getAuthUserData = (): ThunkType => async(dispatch) =>  {
   let  meData = await authAPI.me()
            if (meData.resultCode === resultCodeEnum.Success) {
            let {id, email, login} = meData.data
            dispatch(actions.setAuthUserData (id, email, login, true))
   }  }

export const login = (email: string, password: string, rememberMe: boolean, 
   captcha: string): ThunkType => async(dispatch) =>  {
      let data = await authAPI.login(email, password, rememberMe, captcha)
      if (data.resultCode === resultCodeEnum.Success) { 
         dispatch(getAuthUserData())
               } else {
      if (data.resultCode === resultCodeForCaptchaEnum.captchaIsRequired) { 
         dispatch(getCaptchaUrl())   
      }
         let message=data.messages.length > 0 ? data.messages[0] :'Some error'
         dispatch(stopSubmit('login',  {_error: message}))
               }      }
export const getCaptchaUrl = (): ThunkType => async(dispatch) =>  {
      const  data = await securityAPI.getCaptchaUrl()
      const captchaUrl = data.url 
         dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
                           }      
export const logout = (): ThunkType => async(dispatch) =>  {
      let  response = await authAPI.logout()
      if (response.data.resultCode === 0) {
      dispatch(actions.setAuthUserData (null , null, null, false))
               }   }
export default authReducer

export type initialStateType = typeof initialState
type ActionType=InferActionsTypes<typeof actions >
type ThunkType = BaseThunkType<ActionType | FormAction>