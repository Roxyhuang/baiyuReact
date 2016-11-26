import React from 'react';
import s from './FilterNav.less';
import { Tag, InputNumber } from 'antd';
const CheckableTag = Tag.CheckableTag;

function onChange(value) {
    console.log('changed', value);
}

class UncontrolledCheckableTag extends React.Component {
    state = {checked: false};
    handleChange = (checked) => {
        this.setState({checked});
    };

    render() {
        return <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange}/>;
    }
}

class CampaignBlock extends  React.Component {

    render() {
        return <div></div>
    }
}



class FilterNav extends React.Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.content}>
                    <span>按排序:</span>
                    <span>
                        <UncontrolledCheckableTag>人气</UncontrolledCheckableTag>
                        <UncontrolledCheckableTag>价格</UncontrolledCheckableTag>
                        <UncontrolledCheckableTag>种类</UncontrolledCheckableTag>
                        <UncontrolledCheckableTag>离我最近</UncontrolledCheckableTag>
                    </span>
                    <InputNumber size="small" min={1} max={100000} onChange={onChange} className={s.numberInput}/>
                    <span>
                        -
                    </span>
                    <InputNumber size="small" min={1} max={100000}  onChange={onChange} className={s.numberInput}/>
                </div>
            </div>
        )
    }
}


export default FilterNav;