import React, { useState, useEffect } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";

// const RemoteSidebar = React.lazy(() => import("remoteApp/RemoteSidebar"));
// const ReactComponentT = React.lazy(() => import("reactTApp/ReactComponentT"));
const ContentC = React.lazy(() => import("reactApp/ContentC"));

function App() {
  // const [selectedItem, setSelectedItem] = useState<string | null>(null);
  // const [value, setValue] = useState(0);

  // const handleIncrement = () => {
  //   setValue(value + 1);
  // };

  // const handleSelect = (item: string) => {
  //   setSelectedItem(item);
  // };

  return (
    <div>
      <ContentC />
      {/* <ReactComponentT value={value} onIncrement={handleIncrement} />
      <RemoteSidebar onSelect={handleSelect} /> */}
      <h1 className="text-3xl font-bold underline text-apiportal-panel-header-bg">
        Simple React Typescript Tailwind Sample
      </h1>
    </div>
  );
}

export default App;
