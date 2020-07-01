import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RoutePaths } from '../../../constants/routes';
import { HomePage, LoginPageConnected, RegisterPage, } from '../../pages/index'

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path={RoutePaths.HOME} exact component={HomePage}/>
                <Route path={RoutePaths.LOGIN} exact component={LoginPageConnected}/>
                <Route path={RoutePaths.REGISTER} exact component={RegisterPage}/>
            </Switch>
        </BrowserRouter>
    );
}