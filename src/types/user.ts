export interface User {
    email: string
    name: string
    lastName: string
}

export interface UserLoginRequest {
    email: string,
    password: string,
}