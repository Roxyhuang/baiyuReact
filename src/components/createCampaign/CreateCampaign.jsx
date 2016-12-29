import React from 'react';
import {
    Form,
    Input,
    DatePicker,
    Col,
    Select,
    Tooltip,
    Icon,
    Cascader,
    Row,
    Button,
    Checkbox,
    Upload,
    Modal,
} from 'antd';
import { Link } from 'dva/router';
import s from './CreateCampaign.less';

const FormItem = Form.Item;
const Option = Select.Option;
let uuid = 0;
class CreateCampaign extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [{
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
    };

    componentWillMount() {
        this.props.form.setFieldsValue({
            keys: [0],
        });
    }

    remove = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    add = () => {
        uuid++;
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    }

    handleChange1 (value, act) {
        let { form } = this.state;
        form[act] = value;
        this.setState(form);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handlePasswordBlur(e) {
        const value = e.target.value;
        this.setState({ passwordDirty: this.state.passwordDirty || !!value });
    }

    checkPassword(rule, value, callback) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    checkConfirm(rule, value, callback) {
        const form = this.props.form;
        if (value && this.state.passwordDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
        const { getFieldDecorator,getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                span: 14,
                offset: 6,
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select className="icp-selector">
                <Option value="86">+86</Option>
            </Select>
        );
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const formItemLayoutWithOutLabel = {
            wrapperCol: { span: 20, offset: 4 },
        };

        const keys = getFieldValue('keys');

        const formItems = keys.map((k, index) => {
            return (
                <FormItem
                    {...formItemLayout}
                    label={`活动时间${index+1}`}
                    hasFeedback
                >
                    {getFieldDecorator(`names-${k}`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{
                            required: true,
                            whitespace: true,
                            message: "请选择正确活动时间",
                        }],
                    })(
                        <DatePicker style={{ width: '230px', marginRight: 8 }} />
                    )}
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        disabled={keys.length === 1}
                        onClick={() => this.remove(k)}
                    />
                </FormItem>
            );
        });
        return (
            <div className={s.container}>
                <h1>发布活动</h1>
                <div className={s.baseInfo}>
                    <h2>基本信息</h2>
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormItem
                            {...formItemLayout}
                            label="活动名称"
                            hasFeedback
                        >
                            {getFieldDecorator('name', {
                                rules: [{
                                    type: 'name', message: '请填写活动名称',
                                }, {
                                    required: true, message: '请填写活动名称',
                                }],
                            })(
                                <Input />
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label={(
                                <span>
              活动海报&nbsp;
                                    <Tooltip title="最多可上传5张">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                            )}
                            hasFeedback
                        >
                            {getFieldDecorator('nickname', {
                                rules: [{ required: true, message: 'Please input your nickname!' }],
                            })(
                                <div className="clearfix">
                                    <Upload
                                        action="/upload.do"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={this.handlePreview}
                                        onChange={this.handleChange}
                                    >
                                        {fileList.length >= 3 ? null : uploadButton}
                                    </Upload>
                                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                    </Modal>
                                </div>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="活动地点"
                            hasFeedback
                        >
                            {getFieldDecorator('name', {
                                rules: [{
                                    type: 'name', message: '请填写地点名称',
                                }, {
                                    required: true, message: '请填写地点名称',
                                }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                            {formItems}
                            <FormItem {...formItemLayoutWithOutLabel}>
                                <Button type="dashed" onClick={this.add} style={{ marginLeft:'122px' }}>
                                    <Icon type="plus" /> 添加活动时间
                                </Button>
                            </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="活动分类"
                            hasFeedback
                        >
                            <Select size="default" placeholder="分类" style={{ width: 145 }}
                                    onChange={this.handleChange1.bind(this, 'family')}>
                                <Option value="family">亲子</Option>
                                <Option value="food">食物</Option>
                                <Option value="friends">交友</Option>
                            </Select>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="活动描述"
                            hasFeedback
                        >
                            <Input type="textarea" rows={4} />
                        </FormItem>
                    </Form>
                </div>
                <div className={s.ticketInfo}>
                    <h2>票务信息</h2>
                    <div style={{height:'200px'}}>
                        需求暂时待沟通
                    </div>
                </div>
                <div>
                    <Row type='flex' justify="center" className={s.btn}>
                        <Button size="large">预览</Button>
                        <Button type="primary" size="large">发布</Button>
                    </Row>
                </div>
            </div>
        )
    }
}

export default (Form.create({})(CreateCampaign));