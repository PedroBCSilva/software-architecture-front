import { combineReducers } from "redux";
import { userReducer } from './user/user-reducer'

export const rootReducer = combineReducers({
    userReducer: userReducer
})

export type RootStateType = ReturnType<typeof rootReducer>