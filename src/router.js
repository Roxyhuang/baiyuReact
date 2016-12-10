import React, {PropTypes} from 'react';
import {Router, Route, IndexRoute} from 'dva/router';

import Frame from './components/common/frame';
import Home from './components/home/home';
import Login from './components/login';
import TypeCampaignList from './components/typeCampaign/TypeCampaignList'

export default function ({history}) {
    return (
        <Router history={history}>
            <Route name="首页" path="/" components={Frame}>
                <IndexRoute components={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/typeCampaignList" component={TypeCampaignList}/>
                <Route path="/login" components={Login}></Route>
            </Route>
        </Router>
    );
};
