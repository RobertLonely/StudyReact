import React from "react";
import ReactDOM from "react-dom";

import cssObj from "@/css/style.scss";
import "bootstrap/dist/css/bootstrap.css";
//没有为 css-loader添加参数时，输出为空对象
//添加参数后：输出为
console.log(cssObj);

let myDiv = (
  <div>
    {/* 使用普通的行内样式 */}
    {/* <h1 style={{ color: "red" }}>哈哈哈</h1> */}

    {/* 使用外部样式表 */}
    <div className={[cssObj.myDiv, "fs"].join(" ")}>巴拉巴拉</div>
    <button className="btn btn-primary">没错我是按钮</button>
  </div>
);

ReactDOM.render(myDiv, document.getElementById("app"));
