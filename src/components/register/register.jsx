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

class Register  extends React.Component {

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
      <div className={sty.title}>欢迎加入</div>
      <Tabs defaultActiveKey="Brand" onChange={()=> this.callback}>
        <TabPane className={sty.tab} tab="个人用户" key="Individual">
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
            <div className={sty.label}>用户名</div>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '用户名不能为空' }],
              })(
                <Row>
                  <Input placeholder="密码" />
                </Row>
              )}
            </FormItem>
            <div className={sty.label}>密码</div>
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
            <Button type="primary" htmlType="submit" size="large" className={sty.resigterBtn} onClick={()=>{this.dispatch({ type: 'register'})}}>注册</Button>
            <div className={sty.tips}>注册表示同意百愚网的<a>服务条款</a>及<a>隐私政策</a></div>
          </Form>
          <div className={sty.quickLogin}>
           <div className={sty.line}></div> <div className={sty.text}>快速登录</div><div className={sty.line}></div>
            <div className={sty.weixin}></div>
          </div>
        </TabPane>
        <TabPane tab="商家用户" key="Brand">
          <Form horizontal className={sty.registerForm} onSubmit={()=> this.handleBrandSubmit}>
              <FormItem {...formItemLayout}>
                <div className={sty.brandContainer}>
                  <div className={sty.brandLayer}>
                    <div className={sty.brandMsg}>
                      <div className={sty.brandTitle}>营业执照</div>
                      <div> {this.state.fileList.length >= 3 ? null : uploadButton}</div>
                    </div>
                    {getFieldDecorator('vCode', {
                      rules: [{ required: true, message: '商家名称不能为空' }],
                    })(
                      <div>
                        <Upload
                          action=""
                          listType="picture-card"
                          fileList={this.state.fileList}
                        >
                        </Upload>
                        {/*<div> {this.state.fileList.length >= 3 ? null : uploadButton}</div>*/}
                      </div>
                    )}
                  </div>
                  <div className={sty.brandLayer}>
                    <div className={sty.brandMsg}>
                      <div className={sty.brandTitle}>营业执照</div>
                      <div> {this.state.fileList.length >= 3 ? null : uploadButton}</div>
                    </div>
                    {getFieldDecorator('vCode', {
                      rules: [{ required: true, message: '商家名称不能为空' }],
                    })(
                      <div>
                        <Upload
                          action=""
                          listType="picture-card"
                          fileList={this.state.fileList}
                        >
                        </Upload>
                        {/*<div> {this.state.fileList.length >= 3 ? null : uploadButton}</div>*/}
                      </div>
                    )}
                  </div>
                </div>
              </FormItem>
            <div className={sty.label}>联系人</div>
            <div className={sty.brandContainer}>
              <FormItem {...formItemLayout}>
                {getFieldDecorator('vCode', {
                  rules: [{ required: true, message: '联系人不能为空' }],
                })(
                  <div>
                    <Input className={sty.contract} placeholder="联系人" />
                  </div>
                )}
              </FormItem>
              <FormItem {...formItemLayout}>
                {getFieldDecorator('vCode', {
                  rules: [{ required: true, message: '联系人不能为空' }],
                })(
                  <div className={sty.sex}>
                    <RadioGroup onChange={(e)=> this.onChange(e)} value={this.state.value}>
                      <Radio value={1}>先生</Radio>
                      <Radio value={2}>女士</Radio>
                    </RadioGroup>
                  </div>
                )}
              </FormItem>
            </div>
            <div className={sty.label}>联系电话</div>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('vCode', {
                rules: [{ required: true, message: '联系电话不能为空' }],
              })(
                <Row>
                  <Input placeholder="联系电话" />
                </Row>
              )}
            </FormItem>
            <div className={sty.label}>联系邮箱</div>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('vCode', {
                rules: [{ required: true, message: '联系邮箱不能为空' }],
              })(
                <Row>
                  <Input placeholder="联系邮箱" />
                </Row>
              )}
            </FormItem>


            <div className={sty.label}>所在地</div>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('vCode', {
                rules: [{ required: true, message: '所在地不能为空' }],
              })(
                <Row>
                  <Cascader options={options} onChange={()=>onChange()} placeholder="所在地" />
                </Row>
              )}
            </FormItem>

            <div className={sty.label}>地址</div>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('vCode', {
                rules: [{ required: true, message: '地址不能为空' }],
              })(
                <Row>
                  <Input placeholder="地址" />
                </Row>
              )}
            </FormItem>
            <div className={sty.label}>所属行业</div>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('vCode', {
                rules: [{ required: true, message: '地址不能为空' }],
              })(
                <Row>
                  <Select defaultValue="lucy" style={{ width: 723}}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Row>
              )}
            </FormItem>
            <div className={sty.label} style={{marginTop:'48px'}}>是否为品牌用户</div>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('vCode', {
                rules: [{ required: true, message: '联系人不能为空' }],
              })(
                <div className={sty.sex}>
                  <RadioGroup onChange={(e)=> this.onChange(e)} value={this.state.value}>
                    <Radio value={1}>是</Radio>
                  </RadioGroup>
                </div>
              )}
            </FormItem>
            <div className={sty.label}>品牌性质</div>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('vCode', {
                rules: [{ required: true, message: '地址不能为空' }],
              })(
                <Row>
                  <Select defaultValue="lucy" style={{ width: 723 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Row>
              )}
            </FormItem>
            <div className={sty.label}>品牌规模</div>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('vCode', {
                rules: [{ required: true, message: '地址不能为空' }],
              })(
                <Row>
                  <Select defaultValue="lucy" style={{ width: 723}}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Row>
              )}
            </FormItem>
            <div className={sty.label}>品牌官网</div>
            <FormItem {...formItemLayout}>
              {getFieldDecorator('vCode', {
                rules: [{ required: true, message: '品牌官网不能为空' }],
              })(
                <Row>
                  <Input placeholder="地址" />
                </Row>
              )}
            </FormItem>
            <div className={sty.tips2}>提示：品牌用户需要人工审核，时长1个工作日之内</div>
            <Button type="primary" htmlType="submit" size="large" className={sty.resigterBtn} onClick={()=>{this.dispatch({ type: 'register'})}}>注册</Button>
            <div className={sty.tips}>注册表示同意百愚网的<a>服务条款</a>及<a>隐私政策</a></div>
          </Form>
        </TabPane>

      </Tabs>
   </div>
  )
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({})(Register));