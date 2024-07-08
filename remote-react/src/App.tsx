import React, { Suspense } from "react";
import "./App.css";

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <h1>React Host</h1>
    </Suspense>
  );
}

export default App;
