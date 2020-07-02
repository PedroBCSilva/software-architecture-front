import React, { Component } from 'react'
import { PageWrapper, LoginForm } from '../../components/index'
import { Card } from '../../common-style/index'
import { PageContentContainer } from './style'
import { connect } from 'react-redux'
import * as map from './login-page-map'
import { User } from '../../../types/user'
import { Redirect } from 'react-router'
import { RoutePaths } from '../../../constants/routes'
import './login-page.css'

interface LoginPageProps {
    loggedUser: User,
}
interface LoginPageState { }

class LoginPage extends Component<LoginPageProps, LoginPageState> {
    
    renderLoginFormCard(): JSX.Element {
        return (
            <Card className="login-card-container">
                <LoginForm />
            </Card>
        )
    }

    render(): JSX.Element {
        return (
            <PageWrapper>
                {this.props.loggedUser && <Redirect to={RoutePaths.HOME}/>}
                <PageContentContainer>
                    {this.renderLoginFormCard()}
                </PageContentContainer>
            </PageWrapper>
        )
    }
}

const LoginPageConnected = connect(map.mapStateToProps, map.mapActionsToProps)(LoginPage)
export {
    LoginPageConnected,
    LoginPage,
}