import React from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import s from './Search.less';

class Search extends React.Component {

    render() {
        return (
            <div className={s.container}>
                <div className={s.searchContent}>
                    <Icon type="exclamation-circle-o" /> 暂无搜索结果
                    <div>
                        <Link to="/" >点击此处返回首页</Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default Search;