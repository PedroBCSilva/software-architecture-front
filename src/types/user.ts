export interface User {
    email: string
    name: string
    lastName: string
}

export interface UserLoginSuccesfulResponse {
    user: User
    token: string
}

export interface UserLoginFailResponse {
    error: string
}

export interface UserLoginRequest {
    email: string,
    password: string,
}