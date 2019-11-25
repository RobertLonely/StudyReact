//导入包
import React from "react";
import ReactDOM from "react-dom";

const love = {
  eat: "骨头",
  paly: "毛线"
};

//创建组件
class Dog extends React.Component {
  constructor() {
    //由于Dog组件继承了React.Component这个父类，所以自定义的构造器中，必须调用 super()
    super();
    this.state = {
      msg: "我是旺财"
    }; // 这个this.state = {}就相当于Vue中的data(){return{ }}
  }
  //render()作用:是渲染当前组件所对应的虚拟DOM元素
  render() {
    return (
      // 在class关键字创建的组件中，如果想使用外界传递过来的props参数，不需接收,直接通过this.props.***访问即可
      <div>
        {/* 在class组件内部，this表示当前组件的实例对象 */}
        大家好，{this.state.msg}，喜欢吃{this.props.eat}
      </div>
    );
  }
}

{/* 这里的Dog标签，其实就是Dog类的一个实例对象 */}
ReactDOM.render(<Dog {...love}></Dog>, document.getElementById("app"));
