import React from "react";
import ReactDOM from "react-dom";

let num = 10;
let str = "金刚腿和铁头功";
let isTrue = true;
let title = "我是title";
let myP = <p>我是一段p</p>;
let arr = [<h3>我是数组里的h3</h3>, <h4>我是数组里的h4</h4>];
let myArr = ["卡卡西", "小樱", "鸣人"];

const myDiv = (
  <div title="他是铁头功">
    我是金刚腿<br />

    {num + 2}<br />

    {str}<br />

    {isTrue ? "yes" : "no"}<br />

    <h3 title={title}>功夫</h3> <br />

    {myP}<br />

    {arr}<br />
    
    {myArr.map(item => (
      <h3>{item}</h3>
    ))}
  </div>
);

ReactDOM.render(myDiv, document.getElementById("app"));
