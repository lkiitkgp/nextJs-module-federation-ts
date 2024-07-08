// pages/remote-app/[item].tsx
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import { loadComponent } from '@/utils/loadComponent';

const ItemPage: React.FC = () => {
  const router = useRouter();
  const { item } = router.query;
  const [content, setContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (item) {
      const loadContent = async () => {
        try {
          const { default: Component } = await loadComponent('remoteApp', './' + item);
          setContent(<Component />);
        } catch (error) {
          setContent(<div>Component not found</div>);
        }
      };

      loadContent();
    }
  }, [item]);

  return (
    <ErrorBoundary>
      <div>
        <div className="content">
          {content}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default dynamic(() => Promise.resolve(ItemPage), { ssr: false });
