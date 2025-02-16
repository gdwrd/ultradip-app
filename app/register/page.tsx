// app/register/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/firebase';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';

export default function RegisterPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // Redirect to homepage upon successful registration
        router.push('/');
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Register</h1>
      <p>Registration is the same as logging in with Google.</p>
      <button
        onClick={signInWithGoogle}
        style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}
      >
        Register with Google
      </button>
    </div>
  );
}
