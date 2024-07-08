declare module 'remoteApp/RemoteComponent' {
  import { ComponentType } from 'react';

  interface RemoteComponentProps {
    value: number;
    onIncrement: () => void;
  }

  const RemoteComponent: ComponentType<RemoteComponentProps>;
  export default RemoteComponent;
}
