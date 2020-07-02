import React, { Component } from 'react'
import { FormTitle, FormLabel, FormInput, Link, } from '../../common-style/index'
import { RoutePaths } from '../../../constants/routes'
import { LoginButton, LoginButtonWrapper } from './style'

export default class LoginForm extends Component {
    render(): JSX.Element {
        return (
            <>
                <FormTitle>Login</FormTitle>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <FormInput id='email' type='text' />
                <FormLabel htmlFor='password'>Password</FormLabel>
                <FormInput id='password' type='password' />
                <Link href={RoutePaths.REGISTER}>Não tem conta? Clique aqui para se cadastrar</Link>
                <LoginButtonWrapper>
                    <LoginButton>
                        Entrar
                    </LoginButton>
                </LoginButtonWrapper>
            </>
        )
    }
}