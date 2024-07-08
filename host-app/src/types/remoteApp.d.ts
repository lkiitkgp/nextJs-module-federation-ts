declare module 'remoteApp/RemoteComponent' {
  import { ComponentType } from 'react';

  interface RemoteComponentProps {
    value: number;
    onIncrement: () => void;
  }

  const RemoteComponent: ComponentType<RemoteComponentProps>;
  export default RemoteComponent;
}
declare module 'remoteApp/Sidebar' {
  import { ComponentType } from 'react';

  interface SidebarItem {
    id: string;
    name: string;
    component: string;
    path: string; // Include the path property
  }

  interface SidebarProps {
    items: SidebarItem[];
    onSelect: (item: SidebarItem) => void;
  }

  const Sidebar: ComponentType<SidebarProps>;
  export default Sidebar;
}

// declare module 'remoteApp/ContentA' {
//   const ContentA: React.ComponentType;
//   export default ContentA;
// }

// declare module 'remoteApp/ContentB' {
//   const ContentB: React.ComponentType;
//   export default ContentB;
// }

declare module 'remoteApp/sidebarItems' {
  import { SidebarItem } from 'remoteApp/Sidebar';
  
  export const sidebarItems: SidebarItem[];
}