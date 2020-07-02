import React, { Component } from 'react'
import { FormTitle, FormLabel, FormInput, Link, ErrorMessage } from '../../common-style/index'
import { RoutePaths } from '../../../constants/routes'
import { LoginButton, LoginButtonWrapper } from './style'
import { UserLoginRequest, UserSuccesfulResponse, User, UserFailResponse } from '../../../types/user'
import UserService from '../../../service/user/user-service'
import { AxiosResponse, AxiosError } from 'axios'
import { connect } from "react-redux";
import * as maps from './login-form-map'

interface LoginFormProps {
    setLoggedUser: (loggedUser: User) => void
 }

interface LoginFormState {
    email: string
    password: string
    formError: string | undefined
}

class LoginForm extends Component<LoginFormProps, LoginFormState> {
    constructor(props: LoginFormProps) {
        super(props)
        this.state = {
            email: '',
            password: '',
            formError: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSuccessfulLogin = this.onSuccessfulLogin.bind(this)
        this.onFailLogin = this.onFailLogin.bind(this)
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>, callback = () => { }) {
        const target = event.currentTarget
        const value: string = target.value
        const name: string = target.name
        this.setState({
            [name]: value
        } as Pick<LoginFormState, any>, callback)
    }

    validateForm() {
        if (!this.state.email || !this.state.password) {
            this.setState({
                formError: 'Por favor preencha os campos para realizar o login'
            })
            return false
        }
        else {
            this.setState({
                formError: ''
            })
            return true
        }
    }

    getUserLoginRequestFromForm(): UserLoginRequest {
        return {
            email: this.state.email,
            password: this.state.password,
        }
    }

    onSubmit() {
        if (this.validateForm()) {
            UserService.loginRequest(this.getUserLoginRequestFromForm()).then(this.onSuccessfulLogin)
                .catch(this.onFailLogin)
        }
    }

    onSuccessfulLogin(response: AxiosResponse<UserSuccesfulResponse>) {
        this.props.setLoggedUser(response.data.user)
        localStorage.setItem('token', response.data.token)
    }

    onFailLogin(error: AxiosError<UserFailResponse>) {
        this.setState({
            formError: error.response?.data.error
        })
    }


    render(): JSX.Element {
        return (
            <form onSubmit={this.onSubmit}>
                <FormTitle>Login</FormTitle>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <FormInput name='email'
                    id='email'
                    type='email'
                    onChange={this.handleChange}
                    value={this.state.email}
                    required
                />
                <FormLabel htmlFor='password'>Password</FormLabel>
                <FormInput name='password'
                    id='password'
                    type='password'
                    onChange={this.handleChange}
                    value={this.state.password}
                    required
                />
                <ErrorMessage>{this.state.formError}</ErrorMessage>
                <Link href={RoutePaths.REGISTER}>
                    Não tem conta? Clique aqui para se cadastrar
                </Link>
                <LoginButtonWrapper>
                    <LoginButton onClick={this.onSubmit} type="submit">
                        Entrar
                    </LoginButton>
                </LoginButtonWrapper>
            </form>
        )
    }
}
export default connect(maps.mapStateToProps, maps.mapActionsToProps)(LoginForm)