import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';


import LiquidPresentValue from './pages/LiquidPresentValue';
import NotFound from './pages/NotFound';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LiquidPresentValue} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;