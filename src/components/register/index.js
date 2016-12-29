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
				<Tabs defaultActiveKey="Brand" onChange={callback}>
    				<TabPane className={sty.tab} tab="个人用户注册" key="Individual">
    					<Form horizontal onSubmit={handleIndividualSubmit}>
    						<FormItem {...formItemLayout} label="手机号">
    							<Row gutter={8}>
    								<Col span={12}>
    									{getFieldDecorator('phone', {
            								rules: [{ required: true, message: 'Please input your phone number!' }],
          								})(
            							<Input  />
          							)}
          							</Col>
          							<Col span={12}>
          								<Button size="large">获取验证码</Button>
          							</Col>
          						</Row>
          					</FormItem>
          					<FormItem {...formItemLayout} label="验证码">
          						{getFieldDecorator('captcha', {
            						rules: [{ required: true, message: 'Please input your captcha!' }],
          						})(
            						<Input  />
          						)}
          					</FormItem>
          					<FormItem {...formItemLayout} label="E-mail">
          						{getFieldDecorator('E-mail', {
            						rules: [
            							{type:'email',message:'The input is not valid E-mail!'},
            							{ required: true, message: 'Please input your E-mail!' }
            							],
          						})(
            						<Input  />
          						)}
          					</FormItem>
          					<FormItem {...formItemLayout} label="昵称">
          						{getFieldDecorator('nickname', {
            						rules: [{ required: true, message: 'Please input your captcha!' }],
          						})(
            						<Input  />
          						)}
          					</FormItem>	
          					<FormItem {...formItemLayout} label="密码">
          						{getFieldDecorator('password', {
            						rules: [{ required: true, message: 'Please input your captcha!' }],
          						})(
            						<Input type='password'  />
          						)}
          					</FormItem>	
          					<FormItem {...formItemLayout} label="密码确认">
          						{getFieldDecorator('password-confirm', {
            						rules: [{ required: true, message: 'Please input your captcha!' }],
          						})(
            						<Input type='password'  />
          						)}
          					</FormItem>
							<FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
								{getFieldDecorator('agreement', {
									valuePropName: 'checked',
								})(
									<Checkbox>我已经阅读 <a>隐私条款</a></Checkbox>
								)}
							</FormItem>
        					<FormItem {...tailFormItemLayout}>
          						<Button type="primary" htmlType="submit" size="large">注册</Button>
        					</FormItem>			
    					</Form>
    				</TabPane>
    				<TabPane tab="品牌用户注册" key="Brand">
    					<Form horizontal onSubmit={handleBrandSubmit}>
    						<FormItem {...formItemLayout} label="品牌名称">
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
    										<Button type="ghost">
    											<Icon type="upload" />点击上传
    										</Button>
    									</Upload>
    								</Col>
    							</Row>
    						</FormItem>
    						<FormItem {...formItemLayout} label="手机号">
    							<Row gutter={8}>
    								<Col span={12}>
    									{getFieldDecorator('phone', {
            								rules: [{ required: true, message: 'Please input your phone number!' }],
          								})(
            							<Input  />
          							)}
          							</Col>
          							<Col span={12}>
          								<Button>获取验证码</Button>
          							</Col>
          						</Row>
          					</FormItem>
          					<FormItem {...formItemLayout} label="验证码">
          						{getFieldDecorator('captcha', {
            						rules: [{ required: true, message: 'Please input your captcha!' }],
          						})(
            						<Input  />
          						)}
          					</FormItem>
          					<FormItem {...formItemLayout} label="E-mail">
          						{getFieldDecorator('E-mail', {
            						rules: [
            							{type:'email',message:'The input is not valid E-mail!'},
            							{ required: true, message: 'Please input your E-mail!' }
            							],
          						})(
            						<Input  />
          						)}
          					</FormItem>
          					<FormItem {...formItemLayout} label="城市">
          					<Row gutter={8}>
          						<Col span={12}>
                            		<Select defaultValue="1" style={{width: 145}} onChange={handleChange}>
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
    				</Form>
    			</TabPane>
    		</Tabs>
    	</div>
		);
    }
}));
export default Login;