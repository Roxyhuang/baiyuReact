import React from 'react';
import { connect } from 'dva';
import { Form,Icon,Tabs,Input,Button,Row,Col,Select,Upload,Checkbox,Radio,Cascader } from 'antd';
import sty from './login.css';
import classNames from 'classnames';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

const mapStateToProps = state => ({
  register: state.register,
});

const mapDispatchToProps = dispatch => {
  return {
    submit(payload){
      dispatch({ type: 'register/register', payload });
    }
  }
};

class Login  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
      value: 1,
    }
  };

  callback = (key) => {
    console.log(key);
  };

  handleIndividualSubmit = () => {
    console.log('个人注册');
  };

  handleBrandSubmit = () => {
    console.log('商家注册')
  };

  onChange(e) {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  onChange2(e) {
    console.log(e);
  };

  render() {
    const RadioGroup = Radio.Group;
    const uploadButton = (
      <Button type="ghost">
        <Icon type="upload" /> 点击上传
      </Button>
    );
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
    };
    const options = [{
      value: '021',
      label: '上海',
      children: [{
        value: '1',
        label: '浦东新区',
        children: [{
          value: '12',
          label: '金桥',
        }],
      }],
    }, {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
          value: 'zhonghuamen',
          label: 'Zhong Hua Men',
        }],
      }],
    }];
    return (
      <div className={sty.container}>
        <div className={sty.title}>欢迎回来</div>
        <Tabs defaultActiveKey="Individual" onChange={()=> this.callback}>
          <TabPane className={sty.tab} tab="个人用户" key="Individual">
            <Form horizontal className={sty.registerForm} onSubmit={()=>this.handleIndividualSubmit}>
              <div className={sty.label}>账号登录</div>
              <FormItem {...formItemLayout}>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '用户名不能为空' }],
                })(
                  <Row>
                    <Input placeholder="密码" />
                  </Row>
                )}
              </FormItem>
              <FormItem {...formItemLayout}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '密码不能为空' }],
                })(
                  <Row>
                    <Input placeholder="密码" />
                  </Row>
                )}
              </FormItem>
              <div className={sty.brandContainer}>
                <FormItem {...formItemLayout}>
                  {getFieldDecorator('vCode', {
                    rules: [{ required: true, message: '联系人不能为空' }],
                  })(
                    <div className={sty.sex}>
                      <Checkbox>自动登录</Checkbox>
                    </div>
                  )}
                </FormItem>
                <FormItem {...formItemLayout}>
                  {getFieldDecorator('vCode', {
                    rules: [{ required: true, message: '联系人不能为空' }],
                  })(
                    <div>
                      <a>忘记密码</a>
                    </div>
                  )}
                </FormItem>
              </div>
              <Button type="primary" htmlType="submit" size="large" className={sty.resigterBtn} onClick={()=>{this.props.submit()}}>登录</Button>
              <div className={sty.tips}>注册表示同意百愚网的<a>服务条款</a>及<a>隐私政策</a></div>
            </Form>
            <div className={sty.quickLogin}>
              <div className={sty.line}></div> <div className={sty.text}>快速登录</div><div className={sty.line}></div>
              <div className={sty.weixin}></div>
            </div>
          </TabPane>


          <TabPane tab="商家用户" key="Brand">
            <Form horizontal className={sty.registerForm} onSubmit={()=> this.handleBrandSubmit}>
              <div className={sty.label}>账号登录</div>
              <FormItem {...formItemLayout}>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '用户名不能为空' }],
                })(
                  <Row>
                    <Input placeholder="密码" />
                  </Row>
                )}
              </FormItem>
              <FormItem {...formItemLayout}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '密码不能为空' }],
                })(
                  <Row>
                    <Input placeholder="密码" />
                  </Row>
                )}
              </FormItem>
              <div className={sty.brandContainer}>
                <FormItem {...formItemLayout}>
                  {getFieldDecorator('vCode', {
                    rules: [{ required: true, message: '联系人不能为空' }],
                  })(
                    <div className={sty.sex}>
                      <Checkbox>自动登录</Checkbox>
                    </div>
                  )}
                </FormItem>
                <FormItem {...formItemLayout}>
                  {getFieldDecorator('vCode', {
                    rules: [{ required: true, message: '联系人不能为空' }],
                  })(
                    <div>
                      <a>忘记密码</a>
                    </div>
                  )}
                </FormItem>
              </div>
              <Button type="primary" htmlType="submit" size="large" className={sty.resigterBtn} onClick={()=>{this.dispatch({ type: 'register'})}}>登录</Button>
              <div className={sty.tips}>注册表示同意百愚网的<a>服务条款</a>及<a>隐私政策</a></div>
            </Form>
          </TabPane>

        </Tabs>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({})(Login));