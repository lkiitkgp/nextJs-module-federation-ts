// src/pages/RemoteApp.tsx
import Content from "@/components/Content";
import RemoteSidebar from "@/components/RemoteSidebar";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const TemplatePage = dynamic(() => import("host/TemplatePage"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const RemoteApp: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <React.Suspense fallback="Loading...">
      <TemplatePage>
        {/* <h1 className="bg-input-border-hover">hello</h1> */}
        <RemoteSidebar onSelect={handleSelect} />
        <Content item={selectedItem} />
      </TemplatePage>
    </React.Suspense>
  );
};

export default dynamic(() => Promise.resolve(RemoteApp), { ssr: false });
