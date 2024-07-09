// src/bootstrap.tsx

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const bootstrap = (callback: () => void) => {
  ReactDOM.render(<App />, document.getElementById("root"));
  callback();
};

export default bootstrap;
