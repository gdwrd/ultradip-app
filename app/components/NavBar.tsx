// app/components/NavBar.tsx
'use client';

import Link from 'next/link';
import { FaChess, FaUser } from 'react-icons/fa';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800">
      {/* Left side: Brand */}
      <div className="flex items-center space-x-2">
        <FaChess className="text-yellow-400 text-xl" />
        <Link href="/" className="text-xl font-semibold">
          UltraDip
        </Link>
      </div>
      {/* Right side: Login Link */}
      <div className="flex items-center space-x-4">
        <Link href="/login" className="flex items-center space-x-1">
          <FaUser />
          <span>Login</span>
        </Link>
      </div>
    </nav>
  );
}
