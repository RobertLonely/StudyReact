//#region try a try
import React from "react";

import "bootstrap/dist/css/bootstrap.css";

export default class Btn extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.show();
          }}
        >
          铁打的汉子,点击查看下一句...
        </button>
      </div>
    );
  }

  show = () => {
    alert("磁铁打的床");
  };
}
//#endregion
