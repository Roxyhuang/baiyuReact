import React from 'react';
import sty from './home.css';
import {Carousel, Form, DatePicker, Input, Button, Select} from 'antd';
import classNames from 'classnames';
import { connect } from 'dva';

const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;

const Home = Form.create()(React.createClass({
    getInitialState () {
        return {
            form: {
                type: '',
                date: '',
                city: '',
                keyword: '',
            },
        }
    },

    handleInputChange (key, value) {
        let { form } = this.state;
        form[key] = value.target.value;
        this.setState(form)
    },

    handleSearch(e) {
        e.preventDefault();
        this.props.dispatch({ type: 'home/search', payload: {data: this.state.form}});
    },

    render() {
        const btnCls = classNames({
            'ant-search-btn': true,
            'ant-search-btn-noempty': !!this.state.form.keyword.trim(),
        });
        const searchCls = classNames({
            'ant-search-input': true,
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
                    <Form inline onSubmit={this.handleSearch} style={{margin: '0 auto', width: 620}}>
                        <FormItem>
                            <Select size="default" placeholder='类别' style={{width: 145}} onChange={this.handleChange}>
                                <Option value="1">类别</Option>
                                <Option value="2">Lucy</Option>
                                <Option value="3">Yiminghe</Option>
                            </Select>
                        </FormItem>
                        <FormItem>
                            <Select size="default" placeholder="城市" style={{width: 145}} onChange={this.handleChange}>
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
                                    <Input placeholder="关键字" value={this.state.form.keyword}
                                           onChange={this.handleInputChange.bind(this, 'keyword')}
                                           onPressEnter={this.handleSearch} />
                                    <div className="ant-input-group-wrap">
                                        <Button icon="search" className={btnCls} htmlType="submit" />
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

function mapStateToProps(state) {
    return state.home;
}

export default connect(mapStateToProps)(Home);
