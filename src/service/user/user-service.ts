import axios from 'axios'
import CONFIG from '../../config/environment.local.config'
import { UserLoginRequest } from '../../types/user'

export default class UserService {
    loginRequest(user: UserLoginRequest) {
        return axios({
            method: 'POST',
            url: `${CONFIG.API_URL}/login`,
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