import { LOGIN_USER_ACTION, UserActionTypes } from './types'
import { User } from '../../types/user'

export function loginUser(user: User): UserActionTypes {
    return {
        type: LOGIN_USER_ACTION,
        payload: user,
    }
}