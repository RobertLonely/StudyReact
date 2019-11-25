//导入包
import React from "react" 
import ReactDOM from "react-dom"

//2.创建虚拟DOM元素
const myDiv=React.createElement("div",null,"五环之歌")

//3.渲染
ReactDOM.render(myDiv,document.getElementById('app'))