import React from "react";
import ReactDOM from "react-dom";

const dog = {
  name: "大黄",
  age: "12",
  gender: "中"
};

function Hello(props) {
  return (
    <div>
      姓名:{props.name},年龄:{props.age},性别:{props.gender}
    </div>
  );
}

let myApp = (
  <div>
    {/* <Hello {...dog}></Hello> */}
    <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>
  </div>
);

ReactDOM.render(myApp, document.getElementById("app"));
