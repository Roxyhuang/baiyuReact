import React from 'react';
import { Modal, Button, Form, Icon, Input, Checkbox, Row, Col } from  'antd'
import style from './frame.css';
import { Link } from 'dva/router';

import Header from './Header';
import Footer from './Footer';

const FormItem = Form.Item;
/**
 * 脚手架
 */
class Frame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            loading: false,
        };
    }

    showLoginModal() {
        this.setState({
            visible: true,
        })
    }

    handleOk() {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }

    handleCancel() {
        this.setState({ visible: false });
    }

    handleSubmit(e) {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="wrap">
                {/*<div className={style.layoutHeader}>*/}
                    {/*<div className={style.logo}></div>*/}
                    {/*<div className={style.title}><Link to="/">百愚网</Link></div>*/}
                    {/*<div className={style.menuAction}>*/}
                        {/*<span className={style.create}><Link to="/createCampaign" >发布活动</Link></span> |*/}
                        {/*<span><Link to='/register'>注册</Link></span> |*/}
                        {/*<span onClick={()=> {*/}
                            {/*this.showLoginModal();*/}
                        {/*}}>登录</span> |*/}
                        {/*<span>帮助</span>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <Header/>
                {this.props.children}

                <Footer />
                <Modal
                    visible={this.state.visible}
                    title="登录"
                    onOk={() => this.handleOk()}飞ram
                    onCancel={() => this.handleCancel()}
                    footer={[
                        <Button key="back" type="ghost" size="large" onClick={() => this.handleCancel()}>稍后登录</Button>,
                        <Button key="submit" type="primary" size="large" loading={this.state.loading}
                                onClick={() => this.handleOk()}>
                            登录
                        </Button>,
                    ]}
                >
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入正确用户名' }],
                            })(
                                <Input addonBefore={<Icon type="user" />} placeholder="邮箱" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入正确密码' }],
                            })(
                                <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Row gutter={24}>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Col>
                                        <Checkbox>记住密码</Checkbox>
                                        <a className="login-form-forgot">忘记密码</a>
                                    </Col>
                                )}

                            </Row>
                            <Row type="flex" align="center" justify="center">
                                <div className={style.weixinIcon}></div>
                            </Row>
                        </FormItem>
                    </Form>
                </Modal>
            </div>

        )
    }
}

export default (Form.create({})(Frame));