import './globals.css';
import { SessionProvider } from 'next-auth/react';

export const metadata = {
  title: 'Diplomacy Web Game',
  description: 'Play Diplomacy online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* 
          Wrap your app with SessionProvider to manage authentication state.
          This is a client component. If you experience issues with the SessionProvider,
          you can mark it as "use client" in a separate file and import it here.
        */}
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
