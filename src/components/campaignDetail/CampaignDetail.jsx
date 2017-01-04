import React from 'react';
import { Carousel, Tag, Row, Col, Icon, Select, Button, Modal } from 'antd'
import { connect } from 'dva';
import { Link } from 'dva/router';
import CampaignBlock from '../typeCampaign/CampaignBlock.js';
import CommentList from '../comment/CommentList';

import sty from './CampaignDetail.less';


const mapStateToProps = (state) => {
    //TODO
}
// ({
//     global: state.global,
// });

const mapDispatchToProps = (dispatch) => {
    //TODO
}
// ({
//     actions: bindActionCreators({ ...globalActions }, dispatch),
// });

class CampaignDetail extends React.Component {

    static defaultProps = {

    };


    constructor(props) {
        super(props);
        this.state = {
            type: '亲子',
            user: '历哥',
            num: '100/人',
            block: {
                campaignImg: 'http://www.sinaimg.cn/qc/photo_auto/chezhan/2012/54/17/37/101158_src.jpg',
                userImg: 'http://comment.b0.upaiyun.com/system/comments/attachments/023/096/442/original/1419168410-400x365.jpg',
                title: '测试一下',
                date: '2011年11月1日',
                address: '张江XXX路',
                price: '$19000',
                shareNum: '100',
                starNum: '100',
                viewNum: '100',
            },
            like: false,
            commentModal: false,
        };
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    modalSuccess() {
        Modal.success({
            title: '确认要分享此活动吗',
            content: '确认后此消息将分享至朋友圈',
            onOk() {

            },
            onCancel() {

            }
        });
    }

    like() {
        this.setState({
            like: true
        })
    }

    unLike() {
        this.setState({
            like: false
        })
    }

    info() {
        Modal.confirm({
            title: '确认要参加该活动吗',
            content: (
                <div>
                    <p>确认要参加该活动吗</p>
                </div>
            ),
            onOk() {
            },
            onCanel() {
            },
        });
    }

    render() {
        return (
            <div className={sty.main}>
                <div className={sty.banner}>
                    <div className={sty.tag}>
                        <Tag color="#f50">{this.state.type}</Tag>
                    </div>
                    <Carousel autoplay dots={false}>
                        <div>
                            <img width='100%' alt="" className={sty.list1} />
                        </div>
                        <div>
                            <img width='100%' className={sty.list2} alt="" />
                        </div>
                        <div>
                            <img width='100%' className={sty.list3} alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className={sty.detailPanel}>
                    <Row type="flex" justify="space-between">
                        <Col>
                            <Col>
                                <div className={sty.userImg}></div>
                            </Col>
                            <Col className={sty.baseInfo}>
                                <div><Icon type="user" />发布者：{this.state.user}</div>
                                <div><Icon type="team" /> 报名人数：{this.state.num}</div>
                            </Col>
                        </Col>
                        <Col>
                            <Row type="flex">
                                <Col>
                                    <div className={sty.share}><Icon type="share-alt"
                                                                     onClick={() => this.modalSuccess() } /></div>
                                </Col>
                                <Col>
                                    <div className={sty.inst}>
                                        {
                                            this.state.like ? <Icon type="heart" onClick={ () => this.unLike() } /> :
                                                <Icon type="heart-o" onClick={ () => this.like() } />
                                        }

                                    </div>
                                </Col>
                                <Col>
                                    <div className={sty.price}>
                                        <Select size="large" defaultValue="请选择" style={{ width: 160 }}
                                                onChange={() => this.handleChange()}>
                                            <Option value="100">100</Option>
                                            <Option value="200">200</Option>
                                            <Option value="300" disabled>300</Option>
                                            <Option value="400">400</Option>
                                        </Select>
                                    </div>
                                </Col>
                                <Col className={sty.buy}>
                                    <Button type="primary" onClick={() => this.info()}>报名参加</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className={sty.textArea}>
                    用户自行编辑区域


                </div>
                <div className={sty.tips}>特别声明：最终解释权在活动创造者</div>

                <div className={sty.brandActivity}>
                    <div className={sty.action}>
                        <h1>相关活动</h1>
                    </div>
                    <div className={`${sty.mainCenter} ${sty.clearfix}`}>
                        <CampaignBlock block={this.state.block} />
                        <CampaignBlock block={this.state.block} />
                        <CampaignBlock block={this.state.block} />
                    </div>

                </div>

                <div className={sty.brandActivity}>
                    <div className={sty.action}>
                        <h1>留言</h1>
                    </div>
                    <div className={`${sty.mainCenter} ${sty.clearfix}`}>
                        <CommentList user="历哥" msg="测试一下测试一下测试一下测试一下测试一下" num="12" />
                        <CommentList user="月姐" msg="666666666" num="55" />
                        <CommentList user="好人" msg="baiyu牛baiyu牛baiyu牛baiyu牛baiyu牛" num="61" />
                    </div>

                </div>
            </div>
        )
    }
}

export default CampaignDetail;