import React from "react";
import ReactDOM from "react-dom";

// 导入 Hello 组件
import Hello from './components/Hello.jsx'

const dog = {
  name: "大黄",
  age: "12",
  gender: "中"
};

let myApp = (
  <div>
    {/* <Hello {...dog}></Hello> */}
    <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>
  </div>
);

ReactDOM.render(myApp, document.getElementById("app"));
