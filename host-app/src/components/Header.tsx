// components/Header.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Header: React.FC = () => {
  const router = useRouter();
  const isRemoteApp = router.pathname.startsWith('/remote-app');

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full z-10">
      <nav className="flex justify-around">
        <ul className="flex space-x-4 list-none">
          <li>
            <Link href="/" className={router.pathname === '/' ? 'font-bold underline' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/remote-app" className={isRemoteApp ? 'font-bold underline' : ''}>
              Remote App
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
