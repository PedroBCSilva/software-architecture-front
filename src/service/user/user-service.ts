import axios from 'axios'
import CONFIG from '../../config/environment.local.config'
import { UserLoginRequest } from '../../types/user'

export default class UserService {
    static loginRequest(user: UserLoginRequest) {
        return axios({
            method: 'POST',
            url: `${CONFIG.API_URL}/authenticate`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                user,
            }
        }
        )
    }
}