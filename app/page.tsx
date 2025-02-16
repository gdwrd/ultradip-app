import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to Diplomacy Web Game</h1>
      <p>Create or join a game to start playing.</p>
      <div style={{ marginTop: '1.5rem' }}>
        <Link href="/login" style={{ marginRight: '1rem' }}>
          Login
        </Link>
        <Link href="/register">Register</Link>
      </div>
    </main>
  );
}