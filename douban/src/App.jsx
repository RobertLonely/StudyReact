// 这是项目的根组件
import React from "react";

//按需导入需要的 Ant Design 组件
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

// 导入模块化的样式
import Logo from "@/css/logo.scss";

//导入路由组件
import { HashRouter, Route, Link } from "react-router-dom";

//导入相应跳转路由组件
import Home from '@/components/home/Home';
import Movie from '@/components/movie/Movie';
import About from '@/components/about/About';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <Layout className="layout" style={{ height: "100%" }}>
          {/* 头部区域 */}
          <Header>
            <div className="logo" className={Logo.logo} />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[window.location.hash.split("/")[1]]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="home">
                <Link to="/home">首页</Link>
              </Menu.Item>
              <Menu.Item key="movie">
                <Link to="/movie">电影</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about">关于</Link>
              </Menu.Item>
            </Menu>
          </Header>

          {/* 中间内容区域 */}
          <Content style={{ height: "100%", background: "#fff" }}>
            {/* 我是中间区域 */}
            <Route path="/home" component={Home}></Route>
            <Route path="/movie" component={Movie}></Route>
            <Route path="/about" component={About}></Route>
          </Content>

          {/* 底部区域 */}
          <Footer style={{ textAlign: "center" }}>
            YIM ©2018 Created by Mr.Wong
          </Footer>
        </Layout>
      </HashRouter>
    );
  }
}
