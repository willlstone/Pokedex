import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App'
import NotFound from './NotFound'
import Landing from './Landing'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/pokedex/:Id" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;