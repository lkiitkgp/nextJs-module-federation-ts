import React, { useState } from "react";
import "./App.css";
import ReactComponentT from "./components/ReactComponentT";
import "tailwindcss/tailwind.css";

function App() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleSelect = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <ReactComponentT value={value} onIncrement={handleIncrement} />
      <h1 className="text-3xl font-bold underline bg-red-400">
        Simple React Typescript Tailwind Sample
      </h1>
    </div>
  );
}

export default App;
