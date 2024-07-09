// src/components/Layout.tsx
import React, { ReactNode, isValidElement } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Ensure children is an array of ReactNode
  const childArray = React.Children.toArray(children);
  const [sidebar, content] = childArray;

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "200px", background: "#0000FF", flexShrink: 0 }}>
        {sidebar}
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        {content}
      </div>
    </div>
  );
};

export default Layout;
