import React from 'react';
import {connect} from 'dva';
import {bindActionCreators} from 'redux';
import FilterNav from '../common/FilterNav.js';
import {Pagination} from 'antd';
import CampaignBlock from './CampaignBlock.js';

import s  from './TypeCampaignList.less'

const mapStateToProps = (state) => {
    //TODO
}
// ({
//     global: state.global,
// });

const mapDispatchToProps = (dispatch) => {
    //TODO
}
// ({
//     actions: bindActionCreators({ ...globalActions }, dispatch),
// });


class TypeCampaignList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            block:{
                campaignImg: 'http://www.sinaimg.cn/qc/photo_auto/chezhan/2012/54/17/37/101158_src.jpg',
                userImg: 'http://comment.b0.upaiyun.com/system/comments/attachments/023/096/442/original/1419168410-400x365.jpg',
                title: '测试一下',
                date: '2011年11月1日',
                address: '张江XXX路',
                price: '$19000',
                shareNum: '100',
                starNum: '100',
                viewNum: '100',
            },
            pageConfig:{
                defaultCurrent:1,
                total:1000
            }
        }
        ;
    }

    render() {
        return (
            <div className={s.container}>
                <FilterNav/>
                <div className={`${s.main} `}>
                    <div className={`${s.mainCenter} ${s.clearfix}`}>
                        <CampaignBlock block={this.state.block}/>
                        <CampaignBlock block={this.state.block}/>
                        <CampaignBlock block={this.state.block}/>
                        <CampaignBlock block={this.state.block}/>
                        <CampaignBlock block={this.state.block}/>
                        <CampaignBlock block={this.state.block}/>
                        <CampaignBlock block={this.state.block}/>
                        <CampaignBlock block={this.state.block}/>
                        <CampaignBlock block={this.state.block}/>
                        <CampaignBlock block={this.state.block}/>
                    </div>
                </div>
                <div className={s.pageLayer}>
                    <Pagination defaultCurrent={this.state.pageConfig.defaultCurrent} total={this.state.pageConfig.total}/>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TypeCampaignList);