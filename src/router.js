import React, {PropTypes} from 'react';
import {Router, Route, IndexRoute} from 'dva/router';

import Frame from './components/common/frame';
import Home from './components/home/home';
import Register from './components/register';
import TypeCampaignList from './components/typeCampaign/TypeCampaignList';
import CampaignDetail from './components/campaignDetail/CampaignDetail';
import Search from './components/search/Search';
import CreateCampaign from './components/createCampaign/CreateCampaign';

export default function ({history}) {
    return (
        <Router history={history}>
            <Route name="首页" path="/" components={Frame}>
                <IndexRoute components={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/typeCampaignList" component={TypeCampaignList}/>
                <Route path="/register" components={Register}></Route>
                <Route path="/detail" components={CampaignDetail}></Route>
                <Route path="/search" components={Search}></Route>
                <Route path="/createCampaign" components={CreateCampaign}></Route>
            </Route>
        </Router>
    );
};
