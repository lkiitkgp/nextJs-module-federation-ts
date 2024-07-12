/// <reference types="react" />

declare module "remoteApp/RemoteSidebar" {
  import { ComponentType } from "react";
  interface RemoteSidebarProps {
    onSelect: (item: string) => void;
  }

  const RemoteSidebar: ComponentType<RemoteSidebarProps>;
  export default RemoteSidebar;
}

declare module "reactTApp/ReactComponentT" {
  import { ComponentType, ComponentType, ComponentType } from "react";

  interface ReactComponentTProps {
    value: number;
    onIncrement: () => void;
  }

  const ReactComponentT: ComponentType<ReactComponentTProps>;
  export default ReactComponentT;
}

declare module "reactApp/ContentC" {
  const ContentC: React.ComponentType;
  export default ContentC;
}
