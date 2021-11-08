
import { InferActionsTypes } from "./redux-store"

type dialDataType= {
    id: number, 
    name: string }
type mesDataType= {
    id: number, 
    message: string }

let initialState = {  
dialData: [
    {id: 1, name: 'Dimych' },
    {id: 2, name: 'Andrey' },
    {id: 3, name: 'Sveta' },
    {id: 4, name: 'Sasha' },
    {id: 5, name: 'Viktor' },
    {id: 6, name: 'Valera' }
] as Array <dialDataType>,
mesData: [
    {id: 1, message: 'Hi' },
    {id: 2, message: 'How is your it-kamasytra' },
    {id: 3, message: 'Yo-Yo' },
    {id: 4, message: 'Yo-Yo' },
    {id: 5, message: 'Yo-Yo' } 
] as Array <mesDataType>,
//newMessText: ''
}

const dialogsReducer=(state = initialState, action: ActionsType): initialStateType => {

    switch(action.type) {
        case 'SN/DIALOGS/SEND-MESS': 
            let newMess = action.newMessText
        return {...state,
            mesData:[...state.mesData, {id: 6, message: newMess}]}
                default: 
                return state
    }
}
export const actions={
    sendMess: (newMessText: string) => 
    ({type: 'SN/DIALOGS/SEND-MESS', newMessText  } as const)  
} 

export default dialogsReducer

export type initialStateType = typeof initialState
type ActionsType=InferActionsTypes< typeof actions>