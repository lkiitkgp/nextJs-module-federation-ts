import React from "react";

type SidebarContainerProps = {
  children: React.ReactNode;
};

const SidebarContainer: React.FC<SidebarContainerProps> = ({ children }) => {
  return <div className="sidebar-container">{children}</div>;
};

export default SidebarContainer;
