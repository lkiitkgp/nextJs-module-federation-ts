// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ErrorBoundary from '../components/ErrorBoundary';
import React from 'react';

interface SidebarItem {
  id: string;
  name: string;
  component: string;
  path: string;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<SidebarItem | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadSidebarItems = async () => {
      if (router.pathname.startsWith('/remote-app')) {
        try {
          const { sidebarItems } = await import('remoteApp/sidebarItems');
          setSidebarItems(sidebarItems);
        } catch (error) {
          console.error('Failed to load sidebar items:', error);
        }
      } else {
        setSidebarItems([]);
        setSelectedItem(null);
      }
    };

    loadSidebarItems();
  }, [router.pathname]);

  useEffect(() => {
    if (sidebarItems.length > 0) {
      const currentPath = router.pathname.split('/').pop();
      const currentItem = sidebarItems.find(item => item.path === currentPath);
      setSelectedItem(currentItem ?? null);
    }
  }, [router.pathname, sidebarItems.length]);

  const handleSelect = (item: SidebarItem) => {
    setSelectedItem(item);
    router.push(`/remote-app/${item.path}`);
  };

  return (
    <ErrorBoundary>
      <Header />
      <div className="flex pt-16">
        <Sidebar items={sidebarItems} onSelect={handleSelect} selectedItem={selectedItem?.id ?? null} />
        <div className="flex-1 p-4 ml-64">
          <Component {...pageProps} />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
