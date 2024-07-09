// src/pages/RemoteApp.tsx
import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar2";
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
        <Sidebar onSelect={handleSelect} />
        <Content item={selectedItem} />
      </TemplatePage>
    </React.Suspense>
  );
};

export default dynamic(() => Promise.resolve(RemoteApp), { ssr: false });
