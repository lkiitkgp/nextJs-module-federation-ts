/// <reference types="react" />

declare module "remoteApp/RemoteSidebar" {
  import { ComponentType } from "react";
  interface RemoteSidebarProps {
    onSelect: (item: string) => void;
  }

  const RemoteSidebar: ComponentType<RemoteSidebarProps>;
  export default RemoteSidebar;
}
