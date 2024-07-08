// pages/index.tsx
import dynamic from 'next/dynamic';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Host App</h1>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
