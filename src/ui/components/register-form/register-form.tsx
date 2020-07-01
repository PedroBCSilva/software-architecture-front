import React, { Component } from 'react'
import { ButtonsContainer, RegisterButton, ReturnToLoginLink } from './style'
import { FormTitle, FormLabel, FormInput, } from '../../common-style/index'
import { RoutePaths } from '../../../constants/routes'

export default class RegisterForm extends Component {

    renderSubmitButton(): JSX.Element {
        return (
            <ButtonsContainer>
                <RegisterButton>Criar conta</RegisterButton>
                <ReturnToLoginLink href={RoutePaths.LOGIN}>Voltar para login</ReturnToLoginLink>
            </ButtonsContainer>
        )
    }

    render(): JSX.Element {
        return (
            <>
                <FormTitle>Cadastre-se já</FormTitle>
                <FormLabel>Email</FormLabel>
                <FormInput type="email" />
                <FormLabel>Nome</FormLabel>
                <FormInput type="text" />
                <FormLabel>Sobrenome</FormLabel>
                <FormInput type="text" />
                <FormLabel>CPF</FormLabel>
                <FormInput type="text" />
                <FormLabel>Senha</FormLabel>
                <FormInput type="password" />
                <FormLabel>Confirme a sua senha</FormLabel>
                <FormInput type="password" />
                {this.renderSubmitButton()}
            </>
        )
    }
}