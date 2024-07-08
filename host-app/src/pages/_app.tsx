// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ErrorBoundary from '../components/ErrorBoundary';
import { loadComponent } from '@/utils/loadComponent';

interface SidebarItem {
  id: string;
  name: string;
  component: string;
  path: string;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<SidebarItem | null>(null);
  const [content, setContent] = useState<React.ReactNode>(null);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/remote-app') {
      const loadSidebarItems = async () => {
        try {
          const { sidebarItems } = await import('remoteApp/sidebarItems');
          setSidebarItems(sidebarItems);
        } catch (error) {
          console.error('Failed to load sidebar items:', error);
        }
      };

      loadSidebarItems();
    } else {
      setSidebarItems([]);
      setSelectedItem(null);
      setContent(null);
    }
  }, [router.pathname]);

  useEffect(() => {
    if (selectedItem) {
      const loadContent = async () => {
        try {
          const { default: Component } = await loadComponent('remoteApp', selectedItem.path);
          setContent(<Component />);
        } catch (error) {
          setContent(<div>Component not found</div>);
        }
      };

      loadContent();
    }
  }, [selectedItem]);

  return (
    <ErrorBoundary>
      <Header />
      <div className="flex pt-16"> {/* Added padding-top to account for the header */}
        {/* {router.pathname === '/remote-app' && ( */}
          <Sidebar items={sidebarItems} onSelect={(item: SidebarItem) => setSelectedItem(item)} selectedItem={selectedItem?.id ?? null} />
         {/* )} */}
        <div className="flex-1 p-4 ml-64"> {/* Added margin-left to account for the sidebar */}
          <Component {...pageProps} />
          {router.pathname === '/remote-app' && (
            <div className="content">
              {content}
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
