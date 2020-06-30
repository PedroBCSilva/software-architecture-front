import { User } from '../../types/user'

export const LOGIN_USER_ACTION = "LOGIN_USER"

interface LoginUserAction {
    type: typeof LOGIN_USER_ACTION
    payload: User
}

export type UserActionTypes = LoginUserAction