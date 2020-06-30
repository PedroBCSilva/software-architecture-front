import React, { Component } from 'react'
import { PageWrapper } from '../../components/index'
import { Card, FormTitle, FormLabel, FormInput, } from '../../common-style/index'
import { PageContentContainer, ButtonsContainer, RegisterButton, ReturnToLoginLink } from './style'
import { RoutePaths } from '../../constants/routes'
import './register-page.css'

export default class RegisterPage extends Component {

    renderSubmitButton(): JSX.Element {
        return (
            <ButtonsContainer>
                <RegisterButton>Criar conta</RegisterButton>
                <ReturnToLoginLink href={RoutePaths.LOGIN}>Voltar para login</ReturnToLoginLink>
            </ButtonsContainer>
        )
    }

    renderRegisterForm(): JSX.Element {
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
            </>
        )
    }

    renderRegisterCardForm(): JSX.Element {
        return (
            <Card className="register-card">
                {this.renderRegisterForm()}
                {this.renderSubmitButton()}
            </Card>
        )
    }

    render(): JSX.Element {
        return (
            <PageWrapper>
                <PageContentContainer>
                    {this.renderRegisterCardForm()}
                </PageContentContainer>
            </PageWrapper>
        )
    }
}