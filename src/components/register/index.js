import React from 'react';
import { connect } from 'dva';
import { Form,Icon,Tabs,Input,Button,Row,Col,Select,Upload,Checkbox } from 'antd';
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

const Register  = Form.create()(React.createClass({

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
				<div className={sty.title}>欢迎加入</div>
				<Tabs defaultActiveKey="Individual" onChange={callback}>
    				<TabPane className={sty.tab} tab="个人用户注册" key="Individual">

    					<Form horizontal onSubmit={handleIndividualSubmit}>
								<div className={sty.label}>邮箱</div>
    						<FormItem {...formItemLayout}>
    							<Row gutter={8} className={sty.vCodeLine}>
    								<Col span={12}>
    									{getFieldDecorator('phone', {
            								rules: [{ required: true, message: '请输入您的邮箱' }],
          								})(
            							<Input  />
          							)}
          							</Col>
          							<Col span={12}	>
          								<Button  className={sty.vCode} size="large">发送验证码</Button>
          							</Col>
          						</Row>
          					</FormItem>
										<div className={sty.label}>验证码</div>
          					<FormItem {...formItemLayout}>
          						{getFieldDecorator('captcha', {
            						rules: [{ required: true, message: 'Please input your captcha!' }],
          						})(
            						<Input  />
          						)}
          					</FormItem>
											<div className={sty.label}>用户名</div>
          					<FormItem {...formItemLayout}>
          						{getFieldDecorator('nickname', {
            						rules: [{ required: true, message: 'Please input your captcha!' }],
          						})(
            						<Input  />
          						)}
          					</FormItem>
											<div className={sty.label}>密码</div>
          					<FormItem {...formItemLayout}>
          						{getFieldDecorator('password', {
            						rules: [{ required: true, message: 'Please input your captcha!' }],
          						})(
            						<Input type='password'  />
          						)}
          					</FormItem>
											<div className={sty.label}>确认密码</div>
          					<FormItem {...formItemLayout}>
          						{getFieldDecorator('password-confirm', {
            						rules: [{ required: true, message: 'Please input your captcha!' }],
          						})(
            						<Input type='password'  />
          						)}
          					</FormItem>
							{/*<FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>*/}
								{/*{getFieldDecorator('agreement', {*/}
									{/*valuePropName: 'checked',*/}
								{/*})(*/}
									{/*<Checkbox>我已经阅读 <a>隐私条款</a></Checkbox>*/}
								{/*)}*/}
							{/*</FormItem>*/}
          						<Button type="primary" htmlType="submit" size="large" className={sty.resigterBtn} onClick={()=>{this.dispatch({ type: 'register'})}}>注册</Button>
								<div className={sty.tips}>注册表示同意百愚网的服务条款及隐私政策</div>
    					</Form>
    				</TabPane>
    				<TabPane tab="品牌用户注册" key="Brand">
    					<Form horizontal onSubmit={handleBrandSubmit}>
								<div className={sty.label}>品牌名称</div>
    						<FormItem {...formItemLayout}>
    							<Row gutter={8}>
    								<Col span={12}>
    									{getFieldDecorator('brandName', {
            								rules: [{ required: true, message: 'Please input your phone number!' }],
          								})(
    										<Input  />
    									)}
    								</Col>
          							<Col span={12}>
    									<Upload name="logo" listType="picture" onChange={handleBrandSubmit}>
    										{/*<Button type="ghost">*/}
    											{/*<Icon type="upload" />点击上传*/}
    										{/*</Button>*/}
    									</Upload>
    								</Col>
    							</Row>
    						</FormItem>
								<div className={sty.label}>手机号</div>
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
          								{/*<Button>获取验证码</Button>*/}
          							{/*</Col>*/}
          						</Row>
          					</FormItem>
								<div className={sty.label}>验证码</div>
          					<FormItem {...formItemLayout}>
          						{getFieldDecorator('captcha', {
            						rules: [{ required: true, message: 'Please input your captcha!' }],
          						})(
            						<Input  />
          						)}
          					</FormItem>
								<div className={sty.label}>邮箱</div>
          					<FormItem {...formItemLayout}>
          						{getFieldDecorator('E-mail', {
            						rules: [
            							{type:'email',message:'The input is not valid E-mail!'},
            							{ required: true, message: 'Please input your E-mail!' }
            							],
          						})(
            						<Input  />
          						)}
          					</FormItem>
								<div className={sty.label}>城市</div>
          					<FormItem {...formItemLayout}>
          					<Row gutter={120}>
          						<Col span={12}>
                            		<Select defaultValue="1" style={{width: 145,marginRight:"48px"}} onChange={handleChange}>
                                		<Option value="1">类别</Option>
                                		<Option value="2">Lucy</Option>
                                		<Option value="3">Yiminghe</Option>
                            		</Select>
                            		</Col>
                            		<Col span={12}>
                        			<Select defaultValue="1" style={{width: 145}} onChange={handleChange}>
                                		<Option value="1">城市</Option>
                                		<Option value="2">Lucy</Option>
                                		<Option value="3">Yiminghe</Option>
                            		</Select>
                            	</Col>
                            </Row>
                        </FormItem>
								<Button type="primary" htmlType="submit" size="large" className={sty.resigterBtn}>注册</Button>
								<div className={sty.tips}>注册表示同意百愚网的服务条款及隐私政策</div>
    				</Form>
    			</TabPane>
    		</Tabs>
    	</div>
		);
    }
}));
export default connect(mapStateToProps, mapDispatchToProps)(Form.create({})(Register));