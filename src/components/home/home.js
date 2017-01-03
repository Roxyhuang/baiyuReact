import React from 'react';
import sty from './home.css';
import {
  Carousel,
  Form,
  DatePicker,
  Input,
  Button,
  Select,
  Row,
  Col,
  Card,
  Icon,
  Modal,
  notification,
  Spin,

} from 'antd';
import classNames from 'classnames';
import { fetchList } from '../../services/home';
import { connect } from 'dva';
import { Link } from 'dva/router';


const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;

function mapStateToProps(state) {
  //TODO
}

const mapDispatchToProps = dispatch => ({
  //TODO
});



class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        cate: '',
        date: '',
        city: '',
        keyword: '',
      },
      like: {
        item1: false,
        item2: false,
        item3: false,
        item4: false,
      }
    };
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  handleInputChange(key, value) {
    let { form } = this.state;
    form[key] = value.target.value;
    this.setState(form)
  }

  handleChange(value, act) {
    let { form } = this.state;
    form[act] = value;
    this.setState(form);
  }

  handleSearch(e) {
    e.preventDefault();
    fetchList(this.state.form).then(data => {

      // 这里修改 state
      if (data.flag === true) {
        console.log(data.data)
      }
    });
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

  openNotificationWithIcon(type) {
    notification[type]({
      message: '分享成功',
      description: '此消息已成功分享至朋友圈',
    });
  }

  toggleLike(item) {
    if (item === 1) {
      this.setState({
        like: {
          item1: true
        }
      })
    } else if (item === 2) {
      this.setState({
        like: {
          item2: true
        }
      })
    } else if (item === 3) {
      this.setState({
        like: {
          item3: true
        }
      })
    } else if (item === 4) {
      this.setState({
        like: {
          item4: true
        }
      })
    }

  }

  toggleUnLike(item) {
    if (item === 1) {
      this.setState({
        like: {
          item1: false
        }
      })
    } else if (item === 2) {
      this.setState({
        like: {
          item2: false
        }
      })
    } else if (item === 3) {
      this.setState({
        like: {
          item3: false
        }
      })
    } else if (item === 4) {
      this.setState({
        like: {
          item4: false
        }
      })
    }

  }

  openNotificationWithIcon(type) {
    notification[type]({
      message: '分享活动失败',
      description: '分享活动失败',
    });
  }

  render() {
    const btnCls = classNames({
      'ant-search-btn': true,
      'ant-search-btn-noempty': !!this.state.form.keyword.trim(),
    });
    const searchCls = classNames({
      'ant-search-input': true,
    });
    return (
      <div className={sty.main}>
        {/* Carousel */}
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

        {/* search Bar */}
        <div className={sty.searchBar}>
          <Form inline onSubmit={this.handleSearch} style={{ margin: '0 auto', width: 620 }}>
            <FormItem>
              <Select size="default" placeholder='类别' style={{ width: 145 }}
                      onChange={this.handleChange.bind(this, 'cate')}>
                <Option value="">品牌活动</Option>
                <Option value="cate1">分类活动</Option>
              </Select>
            </FormItem>
            <FormItem>
              <Select size="default" placeholder="城市" style={{ width: 145 }}
                      onChange={this.handleChange.bind(this, 'city')}>
                <Option value="">城市</Option>
                <Option value="beijing">北京</Option>
                <Option value="shanghai">上海</Option>
                <Option value="shenzhen">深圳</Option>
                <Option value="guangzhou">广州</Option>
              </Select>
            </FormItem>
            <FormItem>
              <DatePicker size="default" style={{ width: 145 }} />
            </FormItem>
            <FormItem>
              <div className="ant-search-input-wrapper" style={{ width: 145, marginTop: '-1px' }}>
                <InputGroup className={searchCls}>
                  <Input placeholder="关键字" value={this.state.form.keyword}
                         onChange={this.handleInputChange.bind(this, 'keyword')}
                         onPressEnter={this.handleSearch} />
                  <div className="ant-input-group-wrap">
                    <Link to="/search" style={{ height: '26px', marginTop: '-3px' }}>

                      <Button icon="search" className={btnCls}
                              htmlType="submit" />
                    </Link>
                  </div>
                </InputGroup>
              </div>
            </FormItem>
          </Form>
        </div>

        <div className={sty.container}>
          <div className={sty.brandActivity}>
            <div className={sty.action}>
              <h1 onClick={()=>this.openNotificationWithIcon('error')}>品牌活动</h1>
              <span style={{ float: 'right' }}>
                               <Link to="typeCampaignList">更多</Link>
                            </span>
            </div>
            <Row className={sty.row}>
              <Col span="6">
                <Card bodyStyle={{ padding: 0 }}>
                  <div className={sty.image}>
                    <img alt="example" width="100%" src="http://temp.im/250x160" />
                  </div>
                  <div className={sty.card}>
                    2016年11月30日21:07:27
                    <span style={{ float: 'right', fontSize: '16px', lineHeight: '16px' }}>
                                            <Row gutter={12}>
                                                <Icon type="export" onClick={() =>this.modalSuccess() } />
                                              {
                                                this.state.like.item1 ?
                                                  <Icon type="star" onClick={() => this.toggleUnLike(1) } /> :
                                                  <Icon type="star-o" onClick={() => this.toggleLike(1) } />
                                              }

                                            </Row>
                                        </span>
                  </div>
                </Card>
              </Col>
              <Col span="6">
                <Card bodyStyle={{ padding: 0 }}>
                  <div className={sty.image}>
                    <img alt="example" width="100%" src="http://temp.im/250x160" />
                  </div>
                  <div className={sty.card}>
                    2016年11月30日21:07:27
                    <span style={{ float: 'right', fontSize: '16px', lineHeight: '16px' }}
                          className={sty.iconLayer}>
                                            <Row gutter={12}>
                                                <Icon type="export" onClick={() =>this.modalSuccess() } />
                                              {
                                                this.state.like.item2 ?
                                                  <Icon type="star" onClick={() => this.toggleUnLike(2) } /> :
                                                  <Icon type="star-o" onClick={() => this.toggleLike(2) } />
                                              }
                                            </Row>
                                        </span>
                  </div>
                </Card>
              </Col>
              <Col span="6">
                <Card bodyStyle={{ padding: 0 }}>
                  <div className={sty.image}>
                    <img alt="example" width="100%" src="http://temp.im/250x160" />
                  </div>
                  <div className={sty.card}>
                    2016年11月30日21:07:27
                    <span style={{ float: 'right', fontSize: '16px', lineHeight: '16px' }}
                          className={sty.iconLayer}>
                                            <Row gutter={12}>
                                                 <Icon type="export" onClick={() =>this.modalSuccess() } />

                                              {
                                                this.state.like.item3 ?
                                                  <Icon type="star" onClick={() => this.toggleUnLike(3) } /> :
                                                  <Icon type="star-o" onClick={() => this.toggleLike(3) } />
                                              }
                                            </Row>
                                        </span>
                  </div>
                </Card>
              </Col>
              <Col span="6">
                <Card bodyStyle={{ padding: 0 }}>
                  <div className={sty.image}>
                    <img alt="example" width="100%" src="http://temp.im/250x160" />
                  </div>
                  <div className={sty.card}>
                    2016年11月30日21:07:27
                    <span style={{ float: 'right', fontSize: '16px', lineHeight: '16px' }}
                          className={sty.iconLayer}>
                                            <Row gutter={12}>
                                                 <Icon type="export" onClick={() =>this.modalSuccess() } />

                                              {
                                                this.state.like.item4 ?
                                                  <Icon type="star" onClick={() => this.toggleUnLike(4) } /> :
                                                  <Icon type="star-o" onClick={() => this.toggleLike(4) } />
                                              }
                                            </Row>
                                        </span>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>


          {/* 活动分类 */}
          <div className={sty.brandActivity}>
            <div className={sty.action}>
              <h1>活动分类</h1>
              <span style={{ float: 'right' }}>
                                <Link to="typeCampaignList">更多</Link>
                            </span>
            </div>


            <Row className={sty.activityRow}>
              <Col span="16" className={sty.children}>
                <Link to="/typeCampaignList">
                  亲子
                </Link>
              </Col>
              <Col span="8" className={sty.sport}>
                <Link to="/typeCampaignList">
                  运动
                </Link>
              </Col>
              <Col span="8" className={sty.food}>
                <Link to="/typeCampaignList">
                  饮食
                </Link>
              </Col>
              <Col span="8" className={sty.play}>
                <Link to="/typeCampaignList">
                  娱乐、社交、赛事
                </Link>
              </Col>
              <Col span="8" className={sty.course}>
                <Link to="/typeCampaignList">
                  课程
                </Link>
              </Col>
              <Col span="16" className={sty.comm}>
                <Link to="/typeCampaignList">
                  商业
                </Link>
              </Col>
              <Col span="8" className={sty.art}>
                <Link to="/typeCampaignList">
                  艺术、音乐
                </Link>
              </Col>
            </Row>
          </div>


          <div>
            <h1>组局活动</h1>
            <Row className={sty.activityRow}>
              <Col span="24">
                组局
              </Col>
            </Row>
          </div>
        </div>

      </div>

    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({})(Home));