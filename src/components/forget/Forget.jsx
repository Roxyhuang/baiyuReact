import React from 'react';
import { connect } from 'dva';
import { Form,Icon,Tabs,Input,Button,Row,Col,Select,Upload,Checkbox,Radio,Cascader } from 'antd';
import sty from './Forget.css';
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

class Forget  extends React.Component {

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
        <div className={sty.title}>找回密码</div>
            <Form horizontal className={sty.registerForm} onSubmit={()=>this.handleIndividualSubmit}>
              <div className={sty.label}>邮箱</div>
              <FormItem {...formItemLayout}>
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: '请输入您的邮箱' }],
                })(
                  <Row className={sty.mailLine}>
                    <Input placeholder="邮箱" />
                    <Button className={sty.mailBtn}>发送验证码</Button>
                  </Row>
                )}
              </FormItem>
              <div className={sty.label}>验证码</div>
              <FormItem {...formItemLayout}>
                {getFieldDecorator('vCode', {
                  rules: [{ required: true, message: '验证码不能为空' }],
                })(
                  <Row>
                    <Input placeholder="验证码" />
                  </Row>
                )}
              </FormItem>
              <div className={sty.label}>新密码</div>
              <FormItem {...formItemLayout}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '密码不能为空' }],
                })(
                  <Row>
                    <Input placeholder="密码" />
                  </Row>
                )}
              </FormItem>
              <div className={sty.label}>确认密码</div>
              <FormItem {...formItemLayout}>
                {getFieldDecorator('确认密码', {
                  rules: [{ required: true, message: '确认密码不能为空' }],
                })(
                  <Row>
                    <Input placeholder="确认密码" />
                  </Row>
                )}
              </FormItem>
              <Button type="primary" htmlType="submit" size="large" className={sty.resigterBtn} onClick={()=>{this.dispatch({ type: 'register'})}}>完成</Button>
              <div className={sty.tips}>注册表示同意百愚网的<a>服务条款</a>及<a>隐私政策</a></div>
            </Form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({})(Forget));