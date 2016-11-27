import React from 'react';
import FilterNav from '../common/FilterNav.js';
import { Pagination } from 'antd';
import CampaignBlock from './CampaignBlock.js';

import s  from './interestGroupList.less'


class interestGroupList extends React.Component{

    render(){
        return(
        	<div>
	        	<FilterNav/>
	           <div className={`${s.mainContainer} ${s.clearfix}`}>
					<CampaignBlock/>
					<CampaignBlock/>
					<CampaignBlock/>
					<CampaignBlock/>
					<CampaignBlock/>
					<CampaignBlock/>
					<CampaignBlock/>
	           </div>
	           <div className={s.pageLayer}>
	            <Pagination defaultCurrent={1} total={500} />
	           </div>
        	</div>
        )
    }
}


export default interestGroupList