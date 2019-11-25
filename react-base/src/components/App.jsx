import React from "react";

// 1. 运行 npm i react-router-dom -S 安装路由的包

// 2. 导入路由模块

// HashRouter 表示一个路由的根容器，将来所有与路由相关的东西，都要包裹在 HashRouter里面，而且一个网站中只需要使用一次 HashRouter

// Route表示一个路由规则， 在Route上有两个比较重要的属性，path和component

// Link表示一个路由的链接 ，就好比vue中的 <router-link to=""></router-link>

import { HashRouter, Route, Link } from "react-router-dom";

import Home from "@/components/subComponents/Home";
import Movie from "@/components/subComponents/Movie";
import About from "@/components/subComponents/About";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //注意

    // 当使用HashRouter把App根组件的元素包裹起来之后，网站就已经启用路由了

    // 在一个 HashRouter 中，只能有唯一的一个根元素

    // 在一个网站中，只需要使用唯一的一次<HashRouter></HashRouter>就行了
    return (
      <HashRouter>
        <div>
          我是路由组件
          <br />
          <Link to="/home/hot/10">首页</Link>&nbsp;&nbsp;
          <Link to="/movie/top100/10">电影</Link>&nbsp;&nbsp;
          <Link to="/about">讨论</Link>
          <hr />
          {/* Route创建的标签就是路由规则，其中path表示要匹配的路由，component 表示要展示的组件 */}

          {/* Route 具有两种身份：
          1. 它是一个路由匹配规则； 
          2. 它是一个占位符，表示将来匹配到的组件都放到这个位置*/}

          {/* 如果要匹配参数，可以在匹配规则中，使用 : 修饰符，表示这个位置匹配到的是参数 */}
          <Route path="/home/:type/:id" component={Home} exact></Route>
          <hr />

          {/* 注意：默认情况下，路由中的规则是模糊匹配的，如果路由可以部分匹配成功，就会展示这个路由对应的组件 */}

          {/* 如果想让路由规则进行精确匹配，可以为Route添加exact属性，表示启用精确匹配模式 */}
          <Route path="/movie" component={Movie} exact></Route>
          <hr />
          <Route path="/about" component={About}></Route>
          <hr />
        </div>
      </HashRouter>
    );
  }
}
