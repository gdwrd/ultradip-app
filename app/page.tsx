// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function HomePage() {
  const [user, setUser] = useState<any>(null);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Logout handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to Diplomacy Web Game</h1>
      <p>Create or join a game to start playing.</p>
      <div style={{ marginTop: '1.5rem' }}>
        {user ? (
          <>
            <p>Logged in as: {user.email}</p>
            <button 
              onClick={handleLogout} 
              style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" style={{ marginRight: '1rem' }}>
              Login
            </Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </main>
  );
}
