// pages/remote-app.tsx
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import Link from "next/link";

const ReactComponent = dynamic(() => import("reactApp/ReactComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const ReactAppPage: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
    <ErrorBoundary>
      <div>
        <Link href="/">Back to Home</Link>
        <ReactComponent value={value} onIncrement={handleIncrement} />
      </div>
    </ErrorBoundary>
  );
};

export default dynamic(() => Promise.resolve(ReactAppPage), { ssr: false });
