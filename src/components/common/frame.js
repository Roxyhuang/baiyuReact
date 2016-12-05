import React from 'react';
import style from './frame.css';
import { Link } from 'dva/router';

import Footer from './Footer';


/**
 * 脚手架
 */
class Frame extends React.Component {
    render () {
        return (
            <div className="wrap">
                <div className={style.layoutHeader}>
                    <div className={style.logo}></div>
                    <div className={style.title}>百愚网</div>
                    <div className={style.menuAction}>
                        <span>发布活动</span> |
                        <span><Link to='/login'>登录</Link></span> |
                        <span>注册</span> |
                        <span>帮助</span>
                    </div>
                </div>

                {this.props.children}


                <Footer />
            </div>

        )
    }
}

export default Frame;