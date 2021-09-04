import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';
import WalkingTracker from '../components/WalkingTracker';
import RunningTracker from '../components/RunningTracker';
import CyclingTracker from '../components/CyclingTracker';

const MainRouter = () => (
    <BrowserRouter>
        <div>
            <Header>Activity Tracker</Header>
            <Switch>
                <Route path="/" component={WalkingTracker} exact={true} />
                <Route path="/running" component={RunningTracker} exact={true} />
                <Route path="/cycling" component={CyclingTracker} exact={true} />
                <Route path="/walking" component={WalkingTracker} exact={true} />
                <Route path="/about" component={AboutPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default MainRouter;