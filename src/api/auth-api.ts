import { instance, resultCodeEnum, resultCodeForCaptchaEnum, APIResponseType } from "./api"


type meResponseDataType={
    id: number
    email: string
    login: string  
}
type loginResponseDataType={
        userId: number   
  //resultCode: resultCodeEnum | resultCodeForCaptcha
  //messages: Array<string>
}

export const authAPI = {
    me() {
      return  instance.get <APIResponseType<meResponseDataType>>('auth/me').then(res=> res.data)
      },
      login(email: string, password: string, rememberMe=false, captcha: null | string=null) {
        return  instance.post <APIResponseType<loginResponseDataType, resultCodeEnum | resultCodeForCaptchaEnum>> ('auth/login',{email, password, rememberMe, captcha} )
        .then(res=> res.data)
        },
        logout() {
          return  instance.delete ('auth/login' )
          }
      }
      //authAPI.me().then(res=> res.data)