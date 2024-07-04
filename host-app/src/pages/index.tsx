// src/pages/index.tsx
import dynamic from 'next/dynamic';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

const RemoteComponent = dynamic(
  () => import('remoteApp/RemoteComponent'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <div>
        <h1>Welcome to the Host App</h1>
        <RemoteComponent />
      </div>
    </ErrorBoundary>
  );
};

export default Home;
