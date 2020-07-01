import React, { Component } from 'react'
import { PageWrapper } from '../../components/index'
import { Card } from '../../common-style/index'
import { PageContentContainer } from './style'
import { RegisterForm } from '../../components/index'
import './register-page.css'

export default class RegisterPage extends Component {

    renderRegisterCardForm(): JSX.Element {
        return (
            <Card className="register-card">
                <RegisterForm />
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