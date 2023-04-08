import Link from 'next/link';
import { AuthContext } from '@/contexts/AuthContext';
import { useContext, useEffect, useState } from 'react';

const Navigation = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="flex items-center flex-row flex-wrap justify-between bg-[#3D0B37] w-screen h-22">
      <Link href="/">
        <div className="flex items-center">
          <img src="/explore.png" className="w-16 h-16 mr-2" />
        </div>
      </Link>

      <Link href="/">
        <div className="flex items-center">
          <span className="text-4xl text-white">Explore</span>
        </div>
      </Link>

      {!isLoggedIn && (
        <div className="mr-2">
          <Link href="/auth">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Log In
            </button>
          </Link>
        </div>
      )}

      {isLoggedIn && (
        <div className="mr-2">
          <Link href="/auth">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;
