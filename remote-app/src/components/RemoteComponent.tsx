// src/components/RemoteComponent.tsx
import React from 'react';

interface RemoteComponentProps {
  value: number;
  onIncrement: () => void;
}

const RemoteComponent: React.FC<RemoteComponentProps> = ({ value, onIncrement }) => {
  return (
    <div>
      <h2>Hello from Remote Component!</h2>
      <p>Value from Host App: {value}</p>
      <button onClick={onIncrement}>Increment Value</button>
    </div>
  );
};

export default RemoteComponent;
