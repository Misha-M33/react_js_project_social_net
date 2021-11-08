import Axios from 'axios'
import { userType } from '../type/type'

export const instance = Axios.create ({
    withCredentials : true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers:{'API-KEY': '8nqK2b_StWRrxcv'}
})
export type APIResponseType<D={}, RC=resultCodeEnum >={
  data: D
  messages: Array<string>
  resultCode: RC
}
export enum resultCodeEnum {
  Success= 0,
  Error= 1  
}
export enum resultCodeForCaptchaEnum {
  captchaIsRequired=10
}
export type getItemsType={
  items: Array<userType>
  totalCount: number
  error: string | null
}

