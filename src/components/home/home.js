import React from 'react';
import sty from './home.css';
import {Carousel, Form, DatePicker, Input, Button, Select, Row, Col, Card, Icon} from 'antd';
import classNames from 'classnames';
import {fetchList} from '../../services/home';
import {Link} from 'dva/router';


const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;

const Home = Form.create()(React.createClass({
    getInitialState () {
        return {
            form: {
                cate: '',
                date: '',
                city: '',
                keyword: '',
            },
        }
    },

    handleInputChange (key, value) {
        let {form} = this.state;
        form[key] = value.target.value;
        this.setState(form)
    },

    handleChange (value, act) {
        let {form} = this.state;
        form[act] = value;
        this.setState(form);
    },

    handleSearch(e) {
        e.preventDefault();
        fetchList(this.state.form).then(data => {

            // 这里修改 state
            if (data.flag === true) {
                console.log(data.data)
            }
        });
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
            <div className={sty.main}>
                {/* Carousel */}
                <Carousel autoplay dots={false}>
                    <div>
                        <img width='100%' src="http://temp.im/1280x400" alt=""/>
                    </div>
                    <div>
                        <img width='100%' src="http://temp.im/1280x400/FF9500/000" alt=""/>
                    </div>
                    <div>
                        <img width='100%' src="http://temp.im/1280x400/007AFF/fff" alt=""/>
                    </div>
                </Carousel>

                {/* search Bar */}
                <div className={sty.searchBar}>
                    <Form inline onSubmit={this.handleSearch} style={{margin: '0 auto', width: 620}}>
                        <FormItem>
                            <Select size="default" placeholder='类别' style={{width: 145}} onChange={this.handleChange.bind(this, 'cate')}>
                                <Option value="">类别</Option>
                                <Option value="cate1">类别一</Option>
                                <Option value="cate2">类别二</Option>
                            </Select>
                        </FormItem>
                        <FormItem>
                            <Select size="default" placeholder="城市" style={{width: 145}} onChange={this.handleChange.bind(this, 'city')}>
                                <Option value="">城市</Option>
                                <Option value="beijing">北京</Option>
                                <Option value="shanghai">上海</Option>
                                <Option value="shenzhen">深圳</Option>
                                <Option value="guangzhou">广州</Option>
                            </Select>
                        </FormItem>
                        <FormItem>
                            <DatePicker size="default" style={{width: 145}}/>
                        </FormItem>
                        <FormItem>
                            <div className="ant-search-input-wrapper" style={{width: 145, marginTop: '-1px'}}>
                                <InputGroup className={searchCls}>
                                    <Input placeholder="关键字" value={this.state.form.keyword}
                                           onChange={this.handleInputChange.bind(this, 'keyword')}
                                           onPressEnter={this.handleSearch}/>
                                    <div className="ant-input-group-wrap">
                                        <Button icon="search" className={btnCls} htmlType="submit"/>
                                    </div>
                                </InputGroup>
                            </div>
                        </FormItem>
                    </Form>
                </div>

                <div className={sty.container}>
                    <div className={sty.brandActivity}>
                        <div className={sty.action}>
                            <h1>分类活动</h1>
                            <span style={{float: 'right'}}>
                                <Link>更多</Link>
                            </span>
                        </div>
                        <Row className={sty.row}>
                            <Col span="6">
                                <Card bodyStyle={{padding: 0}}>
                                    <div className={sty.image}>
                                        <img alt="example" width="100%" src="http://temp.im/250x160"/>
                                    </div>
                                    <div className={sty.card}>
                                        2016年11月30日21:07:27
                                        <span style={{float: 'right', fontSize: '16px', lineHeight: '16px'}}>
                                            <Icon type="export"/>
                                            <Icon type="user"/>
                                        </span>
                                    </div>
                                </Card>
                            </Col>
                            <Col span="6">
                                <Card bodyStyle={{padding: 0}}>
                                    <div className={sty.image}>
                                        <img alt="example" width="100%" src="http://temp.im/250x160"/>
                                    </div>
                                    <div className={sty.card}>
                                        2016年11月30日21:07:27
                                    </div>
                                </Card>
                            </Col>
                            <Col span="6">
                                <Card bodyStyle={{padding: 0}}>
                                    <div className={sty.image}>
                                        <img alt="example" width="100%" src="http://temp.im/250x160"/>
                                    </div>
                                    <div className={sty.card}>
                                        2016年11月30日21:07:27
                                    </div>
                                </Card>
                            </Col>
                            <Col span="6">
                                <Card bodyStyle={{padding: 0}}>
                                    <div className={sty.image}>
                                        <img alt="example" width="100%" src="http://temp.im/250x160"/>
                                    </div>
                                    <div className={sty.card}>
                                        2016年11月30日21:07:27
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>


                    {/* 活动分类 */}
                    <div className={sty.brandActivity}>
                        <div className={sty.action}>
                            <h1>活动</h1>
                            <span style={{float: 'right'}}>
                                <Link>更多</Link>
                            </span>
                        </div>


                        <Row className={sty.activityRow}>
                            <Col span="16">
                                亲子
                            </Col>
                            <Col span="8">
                                运动
                            </Col>
                            <Col span="8">饮食</Col>
                            <Col span="8">娱乐、社交、赛事</Col>
                            <Col span="8">课程</Col>
                            <Col span="16">
                                商业
                            </Col>
                            <Col span="8">
                                艺术、音乐
                            </Col>
                        </Row>
                    </div>

                    {/*兴趣组*/}
                    <div>
                        <h1>社区</h1>
                        <Row className={sty.activityRow}>
                            <Col span="24">
                                亲子
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        );
    },
}));

export default Home;