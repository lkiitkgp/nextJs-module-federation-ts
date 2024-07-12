// src/pages/index.tsx
import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <div>
        <h1>Welcome to the Remote App</h1>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
