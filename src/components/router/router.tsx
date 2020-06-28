import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RoutePaths } from '../../constants/routes';
import { HomePage, LoginPage, } from '../../pages/index'

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path={RoutePaths.HOME} exact component={HomePage}/>
                <Route path={RoutePaths.LOGIN} exact component={LoginPage}/>
            </Switch>
        </BrowserRouter>
    );
}