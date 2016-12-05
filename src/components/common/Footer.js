import React from 'react';
import s from './Footer.less';

const Footer = () =>(
    <div className={s.footer}>
        <div className={s.container}>
            <div>
                <ul>
                    <li>获取更新</li>
                    <li><a>app下载（敬请期待）</a></li>
                    <li><a>公众号</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>商务合作</li>
                    <li><a>商务合作</a></li>
                    <li><a>市场合作</a></li>
                    <li><a>发布活动须知</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>公司信息</li>
                    <li><a>关于我们</a></li>
                    <li><a>承诺</a></li>
                    <li><a>法律声明</a></li>
                    <li><a>条款与隐私</a></li>
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
    </div>
);

export default Footer;
