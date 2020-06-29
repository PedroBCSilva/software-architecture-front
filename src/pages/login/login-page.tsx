import React, { Component } from 'react'
import { PageWrapper } from '../../components/index'
import { Card, FormTitle, FormLabel, FormInput, } from '../../common-style/index'
import { PageContentContainer, CardContent, LoginButton, LoginButtonWrapper } from './style'

export default class LoginPage extends Component {
    constructor(props: any) {
        super(props)
    }

    renderLoginForm() {
        return (
            <>
                <FormTitle>Login</FormTitle>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <FormInput id='email' type='text' />
                <FormLabel htmlFor='password'>Password</FormLabel>
                <FormInput id='password' type='password' />
                <LoginButtonWrapper>
                    <LoginButton>
                        Entrar
                    </LoginButton>
                </LoginButtonWrapper>
            </>
        )
    }

    renderLoginFormCard(): JSX.Element {
        return (
            <Card>
                <CardContent>
                    {this.renderLoginForm()}
                </CardContent>
            </Card>
        )
    }

    render(): JSX.Element {
        return (
            <PageWrapper>
                <PageContentContainer>
                    {this.renderLoginFormCard()}
                </PageContentContainer>
            </PageWrapper>
        )
    }
}