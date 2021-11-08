
import { stopSubmit, FormAction } from "redux-form"
import { messageDataType, profileType, photosType } from "../type/type"
import { BaseThunkType, InferActionsTypes } from "./redux-store"
import { profileAPI } from "../api/profile-api"

//const ADD_POST='SN/PROFILE/ADD-POST'
//const SET_USER_PROFILE='SN/PROFILE/SET_USER_PROFILE'
//const SET_STATUS='SN/PROFILE/SET_STATUS'
//const DELETE_POST='SN/PROFILE/DELETE_POST'
//const SAVE_PHOTO_SUCCESS='SN/PROFILE/SAVE_PHOTO_SUCCESS'

let initialState = { 
   messageData: [
   {id: 1, message: 'Hi, how are your', likeCount: 15 },
   {id: 2, message: 'It\'s my first post', likeCount: 20 },
   {id: 3, message: 'It\'s my second post', likeCount: 2 }
] as Array <messageDataType>,
//newPostText: 'it-kamasytra.com',
profile: null as profileType | null,
status: ''
}   

const profileReducer=(state = initialState, action: ActionsType): initialStateType => {
   switch (action.type) {
      case 'SN/PROFILE/ADD-POST':
            let newPost= { id: 4, 
               message: action.newPostText, 
               likeCount: 45 }

            return {...state,
               messageData:[...state.messageData, newPost],  }    

            case 'SN/PROFILE/SET_STATUS': {
            return { ...state, status: action.status}
         }
         case 'SN/PROFILE/SET_USER_PROFILE': {
            return { ...state, profile: action.profile}
         }
case 'SN/PROFILE/DELETE_POST': {
   return { ...state, messageData: state.messageData.filter(p => p.id !== action.userId)}
         }
case 'SN/PROFILE/SAVE_PHOTO_SUCCESS': {
   return { ...state, profile: {...state.profile, photos: action.photos} as profileType}
                  }         
      default:
                  return state  
   }   
   }  
   export const actions = {
      addPostActionCreator: (newPostText: string)=> ( { type: 'SN/PROFILE/ADD-POST', newPostText} as const),
   setUserProfile: (profile: profileType)=> ( { type: 'SN/PROFILE/SET_USER_PROFILE', profile}as const),
   setStatus: (status: string)=> ( { type: 'SN/PROFILE/SET_STATUS', status }as const),
   deletePost: (userId: number)=> ( { type: 'SN/PROFILE/DELETE_POST', userId }as const),
   savePhotoSuccess:(photos: photosType)=> ( { type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos}as const)
   }

export const getUserProfile = (userId: number ): ThunkType =>async (dispatch) => {
      const data= await profileAPI.getProfile(userId)
                     dispatch(actions.setUserProfile (data ))
                        }
   
export const getStatus = (userId: number): ThunkType => async(dispatch) => {
      let  data = await profileAPI.getStatus(userId)
      dispatch(actions.setStatus (data))
                     }
export const updateStatus = (status: string):ThunkType => async(dispatch) => {
   let  data = await profileAPI.updateStatus(status)
   if (data.resultCode === 0) {
                  dispatch(actions.setStatus ( status ))
               }
  }
  export const savePhoto = (file: File):ThunkType => async(dispatch) => {
   let  data = await profileAPI.savePhoto(file)
   if (data.resultCode === 0) {
                  dispatch(actions.savePhotoSuccess (data.data.photos))
               }
  }
  export const saveProfile = (profile: profileType):ThunkType => 
  async(dispatch, getState) => {
   const userId=getState().auth.userId
   const  data = await profileAPI.saveProfile(profile)
   if (data.resultCode === 0) {
      if (userId != null) {dispatch(getUserProfile(userId))
                     }else{ throw new Error ("userId can't be null")}
   }else  { dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}))
   return Promise.reject(data.messages[0])
      }
   }
export default profileReducer

export type initialStateType = typeof initialState
type ActionsType= InferActionsTypes< typeof actions>
type ThunkType= BaseThunkType<ActionsType | FormAction>
//type getStateType= ()=> appStateType
//type dispatchTypes=Dispatch<ActionsType>
//type thunkType= ThunkAction<Promise<void> , appStateType, unknown, ActionsType>