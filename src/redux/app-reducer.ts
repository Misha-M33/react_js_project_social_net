//import { authAPI } from "../api/api"
//import { stopSubmit } from "redux-form"
import { getAuthUserData } from "./auth-reducer"
import { InferActionsTypes } from "./redux-store"

//const INITIALIZED_SUCCESS='SN/APP/INITIALIZED_SUCCESS'
let initialState = { 
   initialized: false  
}
export type InitialStateType = typeof initialState
type actionsType=InferActionsTypes<typeof actions>  
const appReducer=(state = initialState, action: actionsType): InitialStateType => {
   switch (action.type) {
      case 'SN/APP/INITIALIZED_SUCCESS':
            return {
            ...state,
            initialized: true,}            
      default:
               return state     
   }    
}

export const actions ={
   initializedSuccess: () => ({ type: 'SN/APP/INITIALIZED_SUCCESS' } as const)
}

export const initializeApp = () => (dispatch: any ) =>  {
   let promise=dispatch(getAuthUserData())

Promise.all([promise])
.then(() =>   { 
   dispatch(actions.initializedSuccess())
}  )   
   }
export default appReducer