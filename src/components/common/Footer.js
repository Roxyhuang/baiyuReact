import React from 'react';
import s from './Footer.less';

const Footer = () =>(
    <div className={s.footer}>
        <div className={s.container}>
            <div>
                <ul>
                    <li>百愚</li>
                    <li><a>关于我们</a></li>
                    <li><a>公众号</a></li>
                    <li><a>手机APP下载</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>商务合作</li>
                    <li><a>商家合作</a></li>
                    <li><a>市场合作</a></li>
                    <li><a>发布活动须知</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>服务</li>
                    <li><a>帮助</a></li>
                    <li><a>建议反馈</a></li>
                    <li><a>举报</a></li>
                </ul>
            </div>
        </div>
        <div className={s.copy}>
            Copyright ©️ 2017 Baiyu.com
        </div>
    </div>
);

export default Footer;
