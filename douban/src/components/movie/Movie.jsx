import React from "react";

// 按需导入布局相关的组件
import { Layout, Menu, Icon } from "antd";
const { Sider, Content } = Layout;

// 导入路由相关的组件
import { Link, Route, Switch } from "react-router-dom";

// 导入路由组件页面
import MovieList from "@/components/movie/MovieList";
import MovieDetail from "@/components/movie/MovieDetail";

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout style={{ height: "100%" }}>
        {/* 左侧侧边栏区域 */}
        <Sider
          width={200}
          style={{ background: "#fff", borderRight: "1px solid #ccc" }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={[window.location.hash.split("/")[2]]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="in_theaters">
              <Link to="/movie/in_theaters/1">正在热映</Link>
            </Menu.Item>

            <Menu.Item key="coming_soon">
              <Link to="/movie/coming_soon/1">即将上映</Link>
            </Menu.Item>

            <Menu.Item key="top250">
              <Link to="/movie/top250/1">Top250</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        {/* 右侧内容区域 */}

        <Content
          style={{
            background: "#fff",
            padding: 5,
            margin: 0
          }}
        >
          {/* 使用 路由中的 Switch 组件，能够指定，如果前面的路由规则优先匹配到了，则放弃匹配后续的路由 */}
          <Switch>
            <Route path="/movie/detail/:id" component={MovieDetail}></Route>
            <Route path="/movie/:type/:page" component={MovieList}></Route>
          </Switch>
        </Content>
      </Layout>
    );
  }
}
