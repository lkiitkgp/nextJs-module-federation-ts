import dynamic from 'next/dynamic';
import React from 'react';
import { useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

const RemoteComponent = dynamic(
  () => import('remoteApp/RemoteComponent'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const Home: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
    <ErrorBoundary>
      <div>
        <h1>Welcome to the Host App</h1>
        <RemoteComponent value={value} onIncrement={handleIncrement} />
      </div>
    </ErrorBoundary>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
