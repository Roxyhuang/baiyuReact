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
import { connect } from 'dva';
import { Link } from 'dva/router';


const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;

const mapStateToProps = state => ({
  home: state.home,
});

const mapDispatchToProps = dispatch => ({
  //TODO
});


class Home extends React.Component {

  static propTypes = {};

  static defaultProps = {};

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

  handleInputChange(key, value) {
    let { form } = this.state;
    form[key] = value.target.value;
    this.setState(form)
  }

  handleChange(value, act) {
    console.log(value);
    // let { form } = this.state;
    // form[act] = value;
    // this.setState(form);
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
    // const cityList = this.props.home.cityList || {};
    // console.log(this.props.home);
    const data = this.props.home;
    const cityList = data.cityList || [];
    const brandCampaignList = data.brandCampaignList || [];
    const typeList = data.typeList || [];

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
                      >
                {
                  typeList.map((obj) => {
                   return <Option key={obj.typei}value={obj.typeId || '0'}>{obj.name || '城市'}</Option>
                  })
                }
                {/*<Option value="">品牌活动</Option>*/}
                {/*<Option value="cate1">分类活动</Option>*/}
              </Select>
            </FormItem>
            <FormItem>
              <Select size="default" placeholder="城市" style={{ width: 145 }}
                      >
                <Option value="">城市</Option>
                {
                  cityList.map((obj)=> {
                      return <Option  key={obj.code} value={obj.code || '0'}>{obj.city || '城市'}</Option>
                    }
                  )
                }
                {/*<Option value="beijing">北京</Option>*/}
                {/*<Option value="shanghai">上海</Option>*/}
                {/*<Option value="shenzhen">深圳</Option>*/}
                {/*<Option value="guangzhou">广州</Option>*/}
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
              品牌活动
              <div style={{ textAlign: 'right' }} className={sty.more}>
                <Link to="typeCampaignList">更多</Link>
              </div>
            </div>
            <Row className={sty.row}>
            {
              brandCampaignList.map((obj) => {
                return (

                    <Col span="6" key={obj.BrandId}>
                      <Card bodyStyle={{ padding: 0 }}>
                        <div className={sty.content}>
                          <img  className={sty.logo} src={obj.BrandLogo}/>
                          <div className={sty.price}>
                            {obj.price || "免费"}
                          </div>
                        </div>
                        <img className={sty.image}  src={obj.imgOne}/>
                        <div className={sty.text}>
                          <div>{obj.ActivityAddress}</div>
                          <div>{obj.BrandName}</div>
                        </div>
                        <div className={sty.card}>
                          {obj.ActivityTime}
                          {/*<span style={{ float: 'right', fontSize: '16px', lineHeight: '16px' }}>*/}
                          {/*<Row gutter={12}>*/}
                          {/*<Icon type="export" onClick={() =>this.modalSuccess() } />*/}
                          {/*{*/}
                          {/*this.state.like.item1 ?*/}
                          {/*<Icon type="star" onClick={() => this.toggleUnLike(1) } /> :*/}
                          {/*<Icon type="star-o" onClick={() => this.toggleLike(1) } />*/}
                          {/*}*/}

                          {/*</Row>*/}
                          {/*</span>*/}
                        </div>
                      </Card>
                    </Col>

                )
              })
            }
            </Row>
          </div>


          {/* 活动分类 */}
          <div className={sty.brandActivity}>
            <div className={sty.action}>
              活动分类
            </div>


            <Row className={sty.activityRow}>
              <Col span="16" className={sty.children}>
                <div className={sty.mask}></div>
                <Link to="/typeCampaignList">
                  亲子
                </Link>
              </Col>
              <Col span="8" className={sty.sport}>
                <div className={sty.mask}></div>
                <Link to="/typeCampaignList">
                  运动 & 户外
                </Link>
              </Col>
            </Row>
            <Row className={sty.activityRow}>
              <Col span="8" className={sty.food}>
                <div className={sty.mask}></div>
                <Link to="/typeCampaignList">
                  饮食
                </Link>
              </Col>
              <Col span="8" className={sty.play}>
                <div className={sty.mask}></div>
                <Link to="/typeCampaignList">
                  聚会 & 娱乐
                </Link>
              </Col>
              <Col span="8" className={sty.course}>
                <div className={sty.mask}></div>
                <Link to="/typeCampaignList">
                  教育 & 课程
                </Link>
              </Col>
            </Row>
            <Row className={sty.activityRow}>
              <Col span="16" className={sty.comm}>
                <div className={sty.mask}></div>
                <Link to="/typeCampaignList">
                  商业 & 会议
                </Link>
              </Col>
              <Col span="8" className={sty.art}>
                <div className={sty.mask}></div>
                <Link to="/typeCampaignList">
                  艺术 & 展览
                </Link>
              </Col>
            </Row>
          </div>


          <div>
            <div className={sty.action}>
              社区
            </div>
            <Row className={sty.activityRow}>
              <Col span="24" className={sty.inst}>
                <div className={sty.mask}></div>
                <Link to="/typeCampaignList">
                  兴趣组
                </Link>
              </Col>
            </Row>
          </div>
        </div>

      </div>

    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({})(Home));