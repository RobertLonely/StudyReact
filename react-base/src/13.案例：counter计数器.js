import React from "react";
import ReactDOM from "react-dom";

import Counter from "@/components/Counter";

ReactDOM.render(
  <div>
    <Counter initCount={1}></Counter>
  </div>,
  document.getElementById("app")
);
