import React from "react";

import "bootstrap/dist/css/bootstrap.css";

export default class Two extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "大ga好，我系擦擦灰"
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control"
          placeholder={this.state.msg}
          onChange={() => this.change()}
          ref="txt"
        />
        <h4>XXX说:{this.state.msg}</h4>
      </div>
    );
  }

  change = () => {
    this.setState({ msg: this.refs.txt.value });
  };
}
