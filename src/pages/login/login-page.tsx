import React, { Component } from 'react'
import { PageWrapper } from '../../components/index'
import { Card } from '../../common-style/index'
import { PageContentContainer, CardContent, FormTitle, FormLabel, FormInput, LoginButton, LoginButtonWrapper } from './style'

export default class LoginPage extends Component {
    constructor(props:any){
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