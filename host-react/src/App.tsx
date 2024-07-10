import React, { Suspense, useState } from "react";
// import "./index.css";

const ReactComponent = React.lazy(() => import("reactApp/ReactComponent"));
const RemoteComponent = React.lazy(() => import("remoteApp/RemoteComponent"));
const RemoteSidebar = React.lazy(() => import("remoteApp/RemoteSidebar"));

function App() {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
  };

  const handleIncrement = () => {
    setValue(value + 1);
    setValue1(value1 + 1);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex h-screen bg-blue-800">
        <div className="w-1/4 p-4 bg-blue-800 text-white">
          <RemoteSidebar onSelect={handleSelect} />
        </div>
        <div className="flex-1 p-4">
          <h1 className="text-2xl mb-4">React host - {selectedItem}</h1>
          <ReactComponent value={value} onIncrement={handleIncrement} />
          <RemoteComponent value={value1} onIncrement={handleIncrement} />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
