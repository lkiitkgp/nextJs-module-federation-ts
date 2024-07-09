/// <reference types="react" />

declare module "remoteApp/RemoteComponent" {
  import { ComponentType, ComponentType } from "react";

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
