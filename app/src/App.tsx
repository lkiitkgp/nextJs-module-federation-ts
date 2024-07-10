import React, { useState } from "react";
import "./App.css";

const RemoteSidebar = React.lazy(() => import("remoteApp/RemoteSidebar"));

function App() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <RemoteSidebar onSelect={handleSelect} />
      <h1 className="text-3xl font-bold underline text-apiportal-panel-header-bg">
        Simple React Typescript Tailwind Sample
      </h1>
    </div>
  );
}

export default App;
