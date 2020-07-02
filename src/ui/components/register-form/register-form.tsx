import React, { Component } from 'react'
import { ButtonsContainer, RegisterButton, ReturnToLoginLink, } from './style'
import { FormTitle, FormLabel, FormInput, ErrorMessage } from '../../common-style/index'
import { RoutePaths } from '../../../constants/routes'
import { UserRegisterRequest, UserFailResponse, UserSuccesfulResponse, User, } from '../../../types/user'
import { checkIfCpfIsValid, checkIfPasswordAndConfirmPasswordAreEqual } from './register-form-validator'
import UserService from '../../../service/user/user-service'
import { AxiosResponse, AxiosError } from 'axios'
import { connect } from "react-redux";
import * as maps from './register-form-map'

interface RegisterFormProps {
    setLoggedUser: (loggedUser: User) => void
 }

type RegisterFormState = {
    email: string
    name: string
    lastname: string
    cpf: string
    password: string
    confirmPassword: string
    cpfError: string
    passwordError: string
    formError: string | undefined
}

class RegisterForm extends Component<RegisterFormProps, RegisterFormState> {
    constructor(props: RegisterFormProps) {
        super(props)
        this.state = {
            email: '',
            name: '',
            lastname: '',
            cpf: '',
            password: '',
            confirmPassword: '',
            cpfError: '',
            passwordError: '',
            formError: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleChangeCPF = this.handleChangeCPF.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSuccessfulRegister = this.onSuccessfulRegister.bind(this)
        this.onFailRegister = this.onFailRegister.bind(this)
    }

    validateCpf(): boolean {
        if (!checkIfCpfIsValid(this.state.cpf)) {
            this.setState({
                cpfError: 'CPF Invalido siga o padrão 123.123.123-12'
            })
            return false
        }
        else {
            this.setState({
                cpfError: ''
            })
            return true
        }
    }

    validatePasswords(): boolean {
        if (!this.state.password || !this.state.confirmPassword) {
            this.setState({
                passwordError: 'Senhas não podem ser vazias'
            })
            return false
        }
        if (!checkIfPasswordAndConfirmPasswordAreEqual(this.state.password, this.state.confirmPassword)) {
            this.setState({
                passwordError: 'Senhas precisam ser iguais'
            })
            return false
        }
        else {
            this.setState({
                passwordError: ''
            })
            return true
        }
    }

    validateForm(): boolean {
        if (!this.validateCpf() || !this.validatePasswords()) {
            return false
        }
        return true
    }

    getUserRegisterRequestFromForm(): UserRegisterRequest {
        return {
            email: this.state.email,
            name: this.state.name,
            lastname: this.state.lastname,
            cpf: this.state.cpf,
            password: this.state.password,
        }
    }

    onSubmit() {
        if (this.validateForm()) {
            UserService.registerUser(this.getUserRegisterRequestFromForm())
                .then(this.onSuccessfulRegister)
                .catch(this.onFailRegister)
        }
    }

    onSuccessfulRegister(response: AxiosResponse<UserSuccesfulResponse>) {
        this.props.setLoggedUser(response.data.user)
        UserService.setAuthTokenToLocalStorage(response.data.token)
    }

    onFailRegister(error: AxiosError<UserFailResponse>) {
        this.setState({
            formError: error.response?.data.error
        })
    }


    handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
        this.handleChange(event, this.validatePasswords)
    }

    handleChangeCPF(event: React.ChangeEvent<HTMLInputElement>) {
        this.handleChange(event, this.validateCpf)
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>, callback = () => { }) {
        const target = event.currentTarget
        const value: string = target.value
        const name: string = target.name
        this.setState({
            [name]: value
        } as Pick<RegisterFormState, any>, callback)
    }

    renderSubmitButton(): JSX.Element {
        return (
            <ButtonsContainer>
                <RegisterButton onClick={this.onSubmit} type="submit">Criar conta</RegisterButton>
                <ReturnToLoginLink href={RoutePaths.LOGIN}>Voltar para login</ReturnToLoginLink>
            </ButtonsContainer>
        )
    }

    render(): JSX.Element {
        return (
            <form onSubmit={this.onSubmit}>
                <FormTitle>Cadastre-se já</FormTitle>
                <FormLabel>Email</FormLabel>
                <FormInput name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                />
                <FormLabel>Nome</FormLabel>
                <FormInput name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                />
                <FormLabel>Sobrenome</FormLabel>
                <FormInput name="lastname"
                    type="text"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                    required
                />
                <FormLabel>CPF</FormLabel>
                <FormInput name="cpf"
                    type="text"
                    value={this.state.cpf}
                    onChange={this.handleChangeCPF}
                    required
                />
                <ErrorMessage>{this.state.cpfError}</ErrorMessage>
                <FormLabel>Senha</FormLabel>
                <FormInput name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                    required
                />
                <FormLabel>Confirme a sua senha</FormLabel>
                <FormInput name="confirmPassword"
                    type="password"
                    value={this.state.confirmPassword}
                    onChange={this.handleChangePassword}
                    required
                />
                <ErrorMessage>{this.state.passwordError}</ErrorMessage>
                <ErrorMessage>{this.state.formError}</ErrorMessage>
                {this.renderSubmitButton()}
            </form>
        )
    }
}

export default connect(maps.mapStateToProps, maps.mapActionsToProps)(RegisterForm)