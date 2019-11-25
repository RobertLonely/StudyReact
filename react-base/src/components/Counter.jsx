import React from "react";
import ReactType from "prop-types";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 基数, 把外界传递过来的initCount赋值给state中的count，这样就把count值改成了可读可写的state属性，就能实现点击按钮count值 + 1了
      count: props.initCount
    };
  }

  // 在封装一个组件的时候，组件内部肯定有一些数据是必须的，哪怕用户没有传递一些相关的启动参数，这时候组件内部尽量给自己提供一个默认值；
  // 在React中，使用静态的defaultProps属性，来设置组件的默认属性值；
  static defaultProps = {
    // 如果外界没有传递initCount，那么自己初始化一个数值0
    initCount: 0
  };

  // 创建一个静态的propTypes对象，把外界传递过来的属性做类型校验(固定写法)
  static propTypes = {
    initCount: ReactType.number
  };

  render() {
    return (
      <div>
        我是计数器组件：
        {/* <button onClick={this.inCrease}>+1</button> */}
        <button ref="btn">+1</button>
        <hr />
        当前数量:{this.state.count}
      </div>
    );
  }

  // inCrease = () => {
  //   this.setState({
  //     count: this.state.count+1
  //   });
  //   console.log(this.state.count);
  // };

  // 当组件挂载到页面上之后，会进入这个生命周期函数，只要进入这个生命周期函数了，必然说明，页面上已经有可见的DOM元素了,如果想操作DOM元素，最早只能在函数中进行
  componentDidMount() {
    this.refs.btn.onclick = () => {
      this.setState({
        count: this.state.count + 1
      });
    };
  }
}
