/// <reference types="react" />

declare module "remoteApp/RemoteComponent" {
  import { ComponentType, ComponentType, ComponentType } from "react";

  interface RemoteComponentProps {
    value: number;
    onIncrement: () => void;
  }

  const RemoteComponent: ComponentType<RemoteComponentProps>;
  export default RemoteComponent;
}

declare module "reactApp/ReactComponent" {
  import { ComponentType } from "react";
  interface ReactComponentProps {
    value: number;
    onIncrement: () => void;
  }
  const ReactComponent: ComponentType<ReactComponentProps>;
  export default ReactComponent;
}

declare module "remoteApp/RemoteApp" {
  const RemoteApp: React.ComponentType;
  export default RemoteApp;
}

declare module "remoteApp/RemoteSidebar" {
  import { ComponentType } from "react";
  interface RemoteSidebarProps {
    onSelect: (item: string) => void;
  }

  const RemoteSidebar: ComponentType<RemoteSidebarProps>;
  export default RemoteSidebar;
}
