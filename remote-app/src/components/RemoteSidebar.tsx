// src/components/Sidebar.tsx
import React from "react";
// import "tailwindcss/tailwind.css";

interface RemoteSidebarProps {
  onSelect: (item: string) => void;
}

const RemoteSidebar: React.FC<RemoteSidebarProps> = ({ onSelect }) => {
  return (
    <div className="bg-apiportal-panel-header-bg">
      <div onClick={() => onSelect("item1")}>Item 1</div>
      <div onClick={() => onSelect("item2")}>Item 2</div>
      <div onClick={() => onSelect("item3")}>Item 3</div>
    </div>
  );
};

export default RemoteSidebar;
