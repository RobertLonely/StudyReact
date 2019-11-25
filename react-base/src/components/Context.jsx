import React from "react";
import ReactTypes from "prop-types";

//#region  父组件向孙子组件传递数据---普通方式
// export default class Father extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: "red"
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h2>我是父组件</h2>
//         <Son color={this.state.color}></Son>
//       </div>
//     );
//   }
// }

// class Son extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div>
//         <h3>我是子组件</h3>
//         <GrandSon color={this.props.color}></GrandSon>
//       </div>
//     );
//   }
// }

// class GrandSon extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div>
//         <h4 style={{ color: this.props.color }}>我是孙子组件</h4>
//       </div>
//     );
//   }
// }
//#endregion


//#region  父组件向孙子组件传递数据---context方式
export default class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red"
    };
  }

  // 1. 在 父组件中，定义一个function，这个function有个固定的名称，叫做 getChildContext ，内部必须返回一个对象，这个对象就是要共享给所有子孙自建的  数据
  getChildContext() {
    return {
      color: this.state.color
    };
  }

  // 2. 使用属性校验，规定一下传递给子组件的数据类型， 需要定义一个静态的（static）childContextTypes（固定名称）
  static childContextTypes = {
    color: ReactTypes.string
  };

  render() {
    return (
      <div>
        <h2>我是父组件</h2>
        <Son color={this.state.color}></Son>
      </div>
    );
  }
}

//记住一串单词组合`getChildContextTypes`
//前3个、后3个、后两个
//一个方法、两个静态属性

class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>我是子组件</h3>
        <GrandSon color={this.props.color}></GrandSon>
      </div>
    );
  }
}

class GrandSon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 3. 上来之后先来个属性校验，去校验一下父组件传递过来的参数类型
  static contextTypes = {
    color: ReactTypes.string
  };

  render() {
    return (
      <div>
        <h4 style={{ color: this.context.color }}>我是孙子组件</h4>
      </div>
    );
  }
}
//#endregion
