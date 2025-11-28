import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// We use '@/components/...' to import components from the components folder
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Use the Inter font for clean, modern typography
const inter = Inter({ subsets: ['latin'] });

// Define the metadata for SEO (Title, Description)
export const metadata: Metadata = {
  title: 'Pollengers Entertainment LLP | Music, Management & Production',
  description: 'Pollengers Entertainment LLP: Artist Management, Jingle/Audio Production, Music Education, and Sound Solutions based in Assam, India.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Main container to ensure the footer sticks to the bottom */}
        <div className="flex flex-col min-h-screen">
          {/* Header is fixed and on top */}
          <Header />
          
          {/* Main content area. pt-16 ensures content starts below the fixed header. */}
          <main className="flex-grow pt-16">{children}</main>
          
          {/* Footer at the bottom */}
          <Footer />
        </div>
      </body>
    </html>
  );
}