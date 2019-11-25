import React from "react";

import { Button, Icon, Spin, Alert } from "antd";

import fetchJSONP from "fetch-jsonp";

export default class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 电影信息对象
      detail: [],
      isLoading: true
    };
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.goBack}>
          <Icon type="left" />
          返回
        </Button>
        {this.showInfo()}
      </div>
    );
  }

  // 实现返回按钮的功能
  goBack = () => {
    console.log(this.props.history.go(-1));
  };

  componentWillMount() {
    fetchJSONP(
      "https://douban-api.uieee.com/v2/movie/subject/" +
        this.props.match.params.id
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: false,
          detail: data
        });
      });
  }

  showInfo = () => {
    if (this.state.isLoading) {
      return (
        <Spin tip="Loading...">
          <Alert
            message="正在加载中......"
            description="不要走开,精彩马上回来......"
            type="info"
          />
        </Spin>
      );
    } else {
      return (
        <div style={{textAlign:'center'}}>
          <h1>{this.state.detail.title}</h1>
          <img src={this.state.detail.images.large} />
          <p style={{marginTop:'20px'}}>{this.state.detail.summary}</p>
        </div>
      );
      console.log(this.state.detail);
    }
  };
}
