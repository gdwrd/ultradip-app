// app/components/NavBar.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaChess, FaUser } from 'react-icons/fa';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function NavBar() {
  const [user, setUser] = useState<any>(null);

  // Listen for changes in the user's sign-in state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800">
      {/* Left side: Brand */}
      <div className="flex items-center space-x-2">
        <FaChess className="text-yellow-400 text-xl" />
        <Link href="/" className="text-xl font-semibold">
          Diplomacy
        </Link>
      </div>

      {/* Right side: User info or Login link */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <FaUser className="text-xl" />
            )}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="flex items-center space-x-1">
            <FaUser />
            <span>Login</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
