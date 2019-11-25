import React from "react";

import { Spin, Alert, Pagination } from "antd";

// 导入 fetch-jsonp
import fetchJSONP from "fetch-jsonp";

// 导入电影框
import MovieItem from "@/components/movie/MovieItem";

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [], //电影列表
      nowPage: parseInt(props.match.params.page) || 1, //当前展示第几页的数据
      pageSize: 12, //每页显示多少条数据
      total: 0, //当前电影分类下总共有多少条数据
      isLoading: true, //是否正在加载数据，true为正在加载
      type: props.match.params.type // 保存一下要获取的电影的类型
    };
  }
  render() {
    return <div>{this.renderList()}</div>;
  }

  //渲染电影列表的函数
  renderList = () => {
    if (this.state.isLoading) {
      // 正在加载中
      return (
        <Spin tip="Loading...">
          <Alert
            message="正在加载中......"
            description="稍等一下，精彩马上就来！！！"
            type="info"
          />
        </Spin>
      );
    } else {
      // 加载完成
      return (
        <div>
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {this.state.movies.map(item => {
              return (
                <MovieItem
                  {...item}
                  key={item.id}
                  history={this.props.history}
                ></MovieItem>
              );
            })}
          </div>

          {/* 分页 */}
          <Pagination
            defaultCurrent={this.state.nowPage}
            pageSize={this.state.pageSize}
            total={this.state.total}
            onChange={this.pageChanged}
          />
        </div>
      );
    }
  };

  // 根据电影类型和页码，获取电影数据
  loadMovieByTypeAndPage = () => {
    // 开始获取数据的索引
    const start = this.state.pageSize * (this.state.nowPage - 1);
    const url = `https://douban-api.uieee.com/v2/movie/${this.state.type}?start=${start}&count=${this.state.pageSize}`;
    fetchJSONP(url)
      .then(res => res.json()) // 当使用 fetch API 获取 数据的时候， 第一个 .then 中，获取不到数据
      .then(data => {
        this.setState({
          isLoading: false, //将loading效果隐藏
          movies: data.subjects, //为电影列表重新赋值
          total: data.total //把总条数，保存到state上
        });
      });
  };

  componentWillMount() {
    this.loadMovieByTypeAndPage();
  }

  // 组件将要接收新属性
  componentWillReceiveProps(nextProps) {
    // 每当地址栏变化的时候，重置state中的参数项，重置完毕之后，我们可以重新发起数据请求了
    this.setState(
      {
        nowPage: parseInt(nextProps.match.params.page) || 1, // 要获取第几页的数据
        total: 0, //当前电影分类下总共有多少条数据
        isLoading: true, // 又要重新加载电影数据了
        type: nextProps.match.params.type // 电影类型
      },
      function() {
        this.loadMovieByTypeAndPage();
      }
    );
  }

  // 当页码改变的时候，加载新一页的数据
  pageChanged = page => {
    // 使用路由的方法，进行编程式导航
    this.props.history.push("/movie/" + this.state.type + "/" + page);
  };
}
