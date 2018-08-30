import React, { Component } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import {Welcome, Campaigns} from './components/Main/House';
import LandingPagesList from './components/LandingPagesList/LandingPagesList';
import consts from './global/consts';



export class AppRoutes extends Component {
    render = () => {
        return (
            <Switch>
                <Route exact path={consts.PAGE_WELCOME} component={Welcome}/>
                <Route exact path={consts.PAGE_LANDINGPAGE} component={LandingPagesList}/>
                <Route exact path={consts.PAGE_CAMPAIGN} component={Campaigns}/>
                <Redirect from='*' to={consts.PAGE_WELCOME}/>
            </Switch>
        );
    }
}
