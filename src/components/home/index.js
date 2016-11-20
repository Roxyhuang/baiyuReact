import React from 'react';
import sty from './home.css';
import {Carousel, Form, DatePicker, Input, Button, Select} from 'antd';
import classNames from 'classnames';

const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;
const { MonthPicker, RangePicker } = DatePicker;

function handleChange(value) {
    console.log(`selected ${value}`);
}

const Home = Form.create()(React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    },
    getInitialState() {
        return {
            value: '',
            focus: false,
        };
    },
    handleInputChange(e) {
        this.setState({
            value: e.target.value,
        });
    },
    handleFocusBlur(e) {
        this.setState({
            focus: e.target === document.activeElement,
        });
    },
    handleSearch() {
        console.log(123)
    },
    render() {
        const btnCls = classNames({
            'ant-search-btn': true,
            'ant-search-btn-noempty': !!this.state.value.trim(),
        });
        const searchCls = classNames({
            'ant-search-input': true,
            'ant-search-input-focus': this.state.focus,
        });
        return (
            <div>

                {/* Carousel */}
                <Carousel autoplay dots={false}>
                    <div>
                        <img width={1280} height={400} src="http://temp.im/1280x400" alt=""/>
                    </div>
                    <div>
                        <img src="http://temp.im/1280x400/FF9500/000" alt=""/>
                    </div>
                    <div>
                        <img src="http://temp.im/1280x400/007AFF/fff" alt=""/>
                    </div>
                </Carousel>

                {/* search Bar */}
                <div className={sty.searchBar}>
                    <Form inline onSubmit={this.handleSubmit} style={{margin: '0 auto', width: 620}}>
                        <FormItem>
                            <Select size="default" placeholder='类别' style={{width: 145}} onChange={handleChange}>
                                <Option value="1">类别</Option>
                                <Option value="2">Lucy</Option>
                                <Option value="3">Yiminghe</Option>
                            </Select>
                        </FormItem>
                        <FormItem>
                            <Select size="default" placeholder="城市" style={{width: 145}} onChange={handleChange}>
                                <Option value="1">城市</Option>
                                <Option value="2">Lucy</Option>
                                <Option value="3">Yiminghe</Option>
                            </Select>
                        </FormItem>
                        <FormItem>
                            <DatePicker size="default" style={{width: 145}}/>
                        </FormItem>
                        <FormItem>
                            <div className="ant-search-input-wrapper" style={{width: 145}}>
                                <InputGroup className={searchCls}>
                                    <Input placeholder="关键字" value={this.state.value} onChange={this.handleInputChange} onPressEnter={this.handleSearch} />
                                    <div className="ant-input-group-wrap">
                                        <Button icon="search" className={btnCls} onClick={this.handleSearch} />
                                    </div>
                                </InputGroup>
                            </div>

                            {/*<Input addonAfter={<Button icon="search" onClick={this.handleSearch}/>} type="password" placeholder="Password" />*/}
                        </FormItem>
                    </Form>
                </div>
            </div>

        );
    },
}));

export default Home;