// app/layout.tsx
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}