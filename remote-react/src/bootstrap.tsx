// src/bootstrap.tsx

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Define and export the bootstrap function
const bootstrap = (callback: () => void) => {
  ReactDOM.render(<App />, document.getElementById("root"));
  callback();
};

export default bootstrap; // Make sure to export the function
