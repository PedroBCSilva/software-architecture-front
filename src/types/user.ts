export interface User {
    email: string
    name: string
    lastName: string
}

export interface UserSuccesfulResponse {
    user: User
    token: string
}

export interface UserFailResponse {
    error: string
}

export interface UserLoginRequest {
    email: string,
    password: string,
}

export interface UserRegisterRequest {
    email: string
    name: string
    lastname: string
    cpf: string
    password: string
}