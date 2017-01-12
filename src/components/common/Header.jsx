import React from 'react';
import s from './Header.less';
import { Link } from 'dva/router';

const Header = (props) => {
  return (
    <header className={s.container}>
      <Link to="/">
        <div className={s.logo}>
        </div>
      </Link>
      <div className={s.menuAction}>
        <span className={s.create}><Link to="/createCampaign">发布活动</Link></span>
        <span><Link to='/register'>注册</Link></span>
        <span><Link to='/register'>登录</Link></span>
        <span><Link to='/register'>帮助</Link></span>
        <span><Link to='/register'>ENG</Link></span>
      </div>
    </header>
  )

};

export default Header;