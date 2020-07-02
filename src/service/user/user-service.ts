import axios, { AxiosPromise } from 'axios'
import CONFIG from '../../config/environment.local.config'
import { UserLoginRequest, UserRegisterRequest, } from '../../types/user'

export default class UserService {
    static loginRequest(user: UserLoginRequest): AxiosPromise {
        return axios({
            method: 'POST',
            url: `${CONFIG.API_URL}/authenticate`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                user,
            }
        })
    }

    static registerUser(newUserData: UserRegisterRequest): AxiosPromise {
        return axios({
            method: 'POST',
            url: `${CONFIG.API_URL}/register`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                user: newUserData,
            }
        })
    }
}