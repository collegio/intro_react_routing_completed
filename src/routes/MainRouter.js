import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';
import BaseballTracker from '../components/BaseballTracker';
import HockeyTracker from '../components/HockeyTracker';

const MainRouter = () => (
    <BrowserRouter>
        <div>
            <Header>Free Agent Tracker</Header>
            <Switch>
                <Route path="/" component={BaseballTracker} exact={true} />
                <Route path="/hockey" component={HockeyTracker} exact={true} />
                <Route path="/baseball" component={BaseballTracker} exact={true} />
                <Route path="/about" component={AboutPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default MainRouter;