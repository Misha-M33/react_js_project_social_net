import { createSelector } from "reselect"
import { appStateType } from "./redux-store"

export const selectIsAuth = (state: appStateType) => {
  return state.auth.isAuth}

export const selectCurrentUserLogin = (state: appStateType) => {
  return state.auth.login}
