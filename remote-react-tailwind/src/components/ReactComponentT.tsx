import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

interface ReactComponentProps {
  value: number;
  onIncrement: () => void;
}

const ReactComponentT: React.FC<ReactComponentProps> = ({
  value,
  onIncrement,
}) => {
  return (
    <div>
      <h2 className="bg-apiportal-panel-header-bg">
        Hello from React Remote Component with tailwind!
      </h2>
      <p>Value from Host App: {value}</p>
      <button onClick={onIncrement}>Increment Value</button>
    </div>
  );
};

export default ReactComponentT;
