// pages/remote-app.tsx
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Link from 'next/link';

const RemoteComponent = dynamic(() => import('remoteApp/RemoteComponent'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const RemoteAppPage: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
    <ErrorBoundary>
      <div>
        <Link href="/">Back to Home</Link>
        <RemoteComponent value={value} onIncrement={handleIncrement} />
      </div>
    </ErrorBoundary>
  );
};

export default dynamic(() => Promise.resolve(RemoteAppPage), { ssr: false });
