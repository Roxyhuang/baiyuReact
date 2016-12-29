import React from 'react';
import { Icon, Row, Col, Modal, Button, Input } from 'antd';
import s from './CommentList.less';
import { Link } from 'dva/router';

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    showModal() {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const { user, msg, num, ...props } = this.props;
        return (
            <div className={s.container}>
                <Row type="flex">
                    <Col>
                        <div className={s.userImg}></div>
                    </Col>
                    <Col className={s.content}>
                        <div><Link>{this.props.user}</Link></div>
                        <div className={s.msg}>{this.props.msg}</div>
                        <div className={s.panel}>
                            <Icon type="like-o" />({this.props.num})<Icon type="message"
                                                                          onClick={() => this.showModal()} />
                        </div>
                    </Col>
                </Row>
                <Modal
                    visible={this.state.visible}
                    title="留言"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" type="ghost" size="large"
                                onClick={() => this.handleCancel()}>取消回复</Button>,
                        <Button key="submit" type="primary" size="large" loading={this.state.loading}
                                onClick={() => this.handleOk()}>
                            回复
                        </Button>,
                    ]}
                >
                    <Input type="textarea" rows={4} />
                </Modal>
            </div>
        )
    }
}

export default CommentList;