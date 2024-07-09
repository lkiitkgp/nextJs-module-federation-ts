// src/bootstrap.tsx

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const bootstrap = (callback: () => void) => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
    callback();
  } else {
    console.error("Root element not found");
  }
};

export default bootstrap;
