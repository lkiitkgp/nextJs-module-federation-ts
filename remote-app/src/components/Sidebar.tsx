import React from 'react';
import { sidebarItems } from './sidebarItems';


interface SidebarProps {
  onSelect: (item: { id: string; name: string; component: string, path: string }) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
  return (
    <div className="sidebar">
      {sidebarItems.map(item => (
        <button key={item.id} onClick={() => onSelect(item)}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
