import { combineReducers, createStore, applyMiddleware, compose, Action } from "redux"
import authReducer from "./auth-reducer"
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer"
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer"
import chatReducer from "./chat-reducer"

let rootReducer =combineReducers({
    profPage : profileReducer ,
    dialPage : dialogsReducer,
    sidebar : sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer,
    chat: chatReducer
});
type rootReducerType= typeof rootReducer
export type appStateType= ReturnType<rootReducerType>

//type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never

//export type InferActionsTypes<T extends {[key: string]: (...args: any[])=> any}> = 
//ReturnType<PropertiesTypes<T>>
export type InferActionsTypes<T> = T extends {[keys: string]: (...args: any[])=> infer U} ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>>= ThunkAction<R , appStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
export default store
// @ts-ignore
window.__store__= store