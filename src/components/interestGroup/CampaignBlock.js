import React from 'react';
import s from './CampaignBlock.less'

class CampaignBlock extends React.Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.header}>
                    <div>logo</div>
                    <div>title</div>
                    <div>分享 收藏 报名</div>
                </div>
                <div className={s.content}>
                    <div>

                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CampaignBlock