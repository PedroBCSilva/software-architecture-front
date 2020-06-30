import { LOGIN_USER_ACTION, UserActionTypes } from './types'
import { User } from '../../types/user'

interface UserReducer {
    loggedUser?: User
}

const initialState: UserReducer = {}

export function userReducer(state: UserReducer = initialState, action: UserActionTypes): UserReducer {
    switch (action.type) {
        case LOGIN_USER_ACTION:
            return {
                loggedUser: action.payload
            }
        default:
            return state
    }
}
