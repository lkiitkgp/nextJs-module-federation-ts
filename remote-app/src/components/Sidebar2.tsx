// src/components/Sidebar.tsx
import React from "react";

interface SidebarProps {
  onSelect: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
  return (
    <div>
      <div onClick={() => onSelect("item1")}>Item 1</div>
      <div onClick={() => onSelect("item2")}>Item 2</div>
      <div onClick={() => onSelect("item3")}>Item 3</div>
    </div>
  );
};

export default Sidebar;