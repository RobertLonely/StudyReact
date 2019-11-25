import React from "react";

export default class BindThis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ""
    };
    // 绑定 this 并传参的方式2: 在构造函数中绑定并传参
    // 注意，当为一个函数，调用 bind 改变了this指向后，bind 函数调用的结果，有一个返回值，这个值，就是被改变this指向后的函数的引用；
    // 注意： bind 不会修改 原函数的 this 指向
    this.show3 = this.show3.bind(this, "二", "🤭");
  }

  render() {
    return (
      <div>
        <input type="button" value="不传参的方式" onClick={this.show1} />
        <hr />
        {/* bind 的作用： 为前面的函数，修改函数内部的 this 指向，让 函数内部的this，指向 bind 参数列表中的 第一个参数 */}

        {/* bind 和 call/apply 之间的区别： */}
        {/*  call/apply 修改完this指向后，会立即调用前面的函数，但是 bind 只是修改this指向，并不会调用 */}

        {/* 注意： bind 中的第一个参数，是用来修改 this 指向的，第一个参数后面的所有参数，都会当作将来调用 前面函数 时候的参数传递进去 */}

        {/* 方式1：在 事件处理函数中，直接使用 bind 绑定 this 并传参 */}
        <input
          type="button"
          value="绑定this并传参的方式一"
          onClick={this.show2.bind(this, "一", "🤭")}
        />
        <hr />
        <input
          type="button"
          value="绑定this并传参的方式二"
          onClick={this.show3}
        />
        <hr />
        <input
          type="button"
          value="绑定this并传参的方式三"
          onClick={() => this.show4("三", "🤭")}
        />
        <hr />
        <p>{this.state.msg}</p>
      </div>
    );
  }

  show1 = () => {
    this.setState({
      msg: "不传参的方式"
    }, function () {
       // 获取最新的state状态值
       alert(this.state.msg);
    });
  };

  show2(arg1, arg2) {
    this.setState({
      msg: "绑定this并传参的方式" + arg1 + arg2
    });
  }

  show3(arg1, arg2) {
    this.setState({
      msg: "绑定this并传参的方式" + arg1 + arg2
    });
  }

  show4 = (arg1, arg2) => {
    this.setState({
      msg: "绑定this并传参的方式" + arg1 + arg2
    });
  };
}
