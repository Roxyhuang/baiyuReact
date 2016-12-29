import React from 'react';
import { Icon } from 'antd';
import s from './CampaignBlock.less';
import { Link } from 'dva/router';

class CampaignBlock extends React.Component {

    render() {
        var { block, ...props } = this.props;
        return (
            <div className={s.container}>
                <Link to="/detail">
                    <img src={block.campaignImg} />
                </Link>
                    <img className={s.userImg} src={block.userImg} />
                    <div className={s.title}>
                        {block.title}
                    </div>
                    <div className={s.content}>
                        <div>
                            <span>{block.date}</span>-<span>{block.address}</span>
                        </div>
                        <div>
                        <span className={s.price}>
                            {block.price}
                        </span>
                            <span>
                            <Icon type="share-alt" /> {block.shareNum}
                        </span>
                            <span>
                            <Icon type="star-o" /> {block.starNum}
                        </span>
                            <span>
                            <Icon type="area-chart" /> {block.viewNum}
                        </span>
                        </div>
                    </div>
            </div>
        )
    }
}

export default CampaignBlock