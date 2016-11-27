import React from 'react';
import { Icon } from 'antd';
import s from './CampaignBlock.less'

class CampaignBlock extends React.Component {
    render() {
        return (
            <div className={s.container}>
               <img src="http://www.sinaimg.cn/qc/photo_auto/chezhan/2012/54/17/37/101158_src.jpg"/>
               <img className={s.userImg} src="http://comment.b0.upaiyun.com/system/comments/attachments/023/096/442/original/1419168410-400x365.jpg"/>  
               <div className={s.title}>
                    活动标题XXX       
               </div>
               <div className={s.content}>
                    <div>
                        <span>2016年12月25日</span>-<span>上海浦东新区张江高科</span>
                    </div>
                    <div>
                        <span className={s.price}>
                            ￥150
                        </span>
                        <span>
                            <Icon type="share-alt" /> 100
                        </span>
                        <span>
                            <Icon type="star-o" /> 100
                        </span>
                        <span>
                            <Icon type="area-chart" /> 100
                        </span>
                    </div>
               </div>
            </div>
        )
    }
}

export default CampaignBlock