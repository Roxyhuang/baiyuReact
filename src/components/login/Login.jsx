import React from 'react';
import { Form,Icon,Tabs,Input,Button,Row,Col,Select,Upload,Checkbox } from 'antd';
import sty from './login.css';
import classNames from 'classnames';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function callback(key) {
  console.log(key);
}

function handleIndividualSubmit(){
  console.log(1);
}

function handleBrandSubmit(){
  console.log(1);
}

const Login  = Form.create()(React.createClass({
  getInitialState(){
    return{
      passwordConsistency:false
    }
  },
  checkPassword(rules,value,callback){
    const form=this.props.form;

  },
  checkPasswordConfirm(event){

  },
  handlePasswordBlur(event){
    const value=event.target.value;
    this.setState({
      passwordConsistency:this.state.passwordConsistency||!value
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 6 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    };

    return (
      <div className={sty.container}>
        <div className={sty.title}>欢迎回来</div>
        <Tabs defaultActiveKey="Brand" onChange={callback}>
          <TabPane className={sty.tab} tab="个人用户登录" key="Individual">

            <Form horizontal onSubmit={handleIndividualSubmit}>
              <div className={sty.label}>账号登录</div>
              <FormItem {...formItemLayout}>
                <Row gutter={8}>
                  <Col span={12}>
                    {getFieldDecorator('phone', {
                      rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(
                      <Input  />
                    )}
                  </Col>
                  {/*<Col span={12}>*/}
                  {/*<Button size="large">获取验证码</Button>*/}
                  {/*</Col>*/}
                </Row>
              </FormItem>

              <div className={sty.label}>密码</div>
              <FormItem {...formItemLayout}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your captcha!' }],
                })(
                  <Input type='password'  />
                )}
              </FormItem>
              <div className={sty.tips}>忘记密码</div>
              <Button type="primary" htmlType="submit" size="large" className={sty.resigterBtn}>登录</Button>

            </Form>
          </TabPane>
          <TabPane tab="品牌用户登录" key="Brand">
            <Form horizontal onSubmit={handleBrandSubmit}>
              <div className={sty.label}>账号登录</div>
              <FormItem {...formItemLayout}>
                <Row gutter={8}>
                  <Col span={12}>
                    {getFieldDecorator('brandName', {
                      rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(
                      <Input  />
                    )}
                  </Col>
                </Row>
              </FormItem>
              <div className={sty.label}>密码</div>
              <FormItem {...formItemLayout}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your captcha!' }],
                })(
                  <Input type='password'  />
                )}
              </FormItem>
              <div className={sty.tips}>忘记密码</div>
              <Button type="primary" htmlType="submit" size="large" className={sty.resigterBtn}>登录</Button>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}));
export default Login;