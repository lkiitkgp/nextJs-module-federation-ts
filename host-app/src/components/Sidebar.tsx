// components/Sidebar.tsx
import React from 'react';

interface SidebarProps {
  items: { id: string; name: string; component: string; path: string }[];
  onSelect: (item: { id: string; name: string; component: string; path: string }) => void;
  selectedItem: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ items, onSelect, selectedItem }) => {
  return (
    <div className="bg-gray-200 p-4 w-64 h-screen fixed top-16">
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => onSelect(item)}
          className={`block w-full mb-2 p-2 text-left ${selectedItem === item.id ? 'bg-gray-400' : 'bg-white'} hover:bg-gray-300`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
