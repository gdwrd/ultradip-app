// app/layout.tsx
import './globals.css';
import { Poppins } from 'next/font/google';

export const metadata = {
  title: 'Diplomacy Web Game',
  description: 'Play Diplomacy online',
};

// Load Poppins from Google Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
