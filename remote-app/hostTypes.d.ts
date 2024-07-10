declare module "host/TemplatePage" {
  const TemplatePage: React.ComponentType<React.PropsWithChildren<{}>>;
  export default TemplatePage;
}

declare module "host/SidebarContainer" {
  type SidebarContainerProps = {
    children: React.ReactNode;
  };

  const SidebarContainer: React.FC<SidebarContainerProps>;
  export default SidebarContainer;
}
