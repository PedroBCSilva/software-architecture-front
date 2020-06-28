import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RoutePaths } from '../../constants/routes';
import { HomePage } from '../../pages/index'

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path={RoutePaths.HOME} exact component={HomePage}/>
            </Switch>
        </BrowserRouter>
    );
}