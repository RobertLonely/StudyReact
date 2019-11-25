import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routeParams:props.match.params
    };
  }

  render() {
    return <div>我是Home模块
       <p> TYPE: {this.state.routeParams.type} , ID: {this.state.routeParams.id}</p>
    </div>;
  }
}
