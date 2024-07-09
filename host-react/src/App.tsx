import React, { Suspense, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const ReactComponent = React.lazy(() => import("reactApp/ReactComponent"));
const RemoteComponent = React.lazy(() => import("remoteApp/RemoteComponent"));
// const RemoteApp = React.lazy(() => import("remoteApp/RemoteApp"));

function App() {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
    setValue1(value1 + 1);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>React host</h1>
      {/* <RemoteApp /> */}
      <ReactComponent value={value} onIncrement={handleIncrement} />
      <RemoteComponent value={value1} onIncrement={handleIncrement} />
    </Suspense>
  );
}

export default App;
