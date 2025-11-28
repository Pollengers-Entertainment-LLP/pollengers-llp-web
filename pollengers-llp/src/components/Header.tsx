// src/components/Header.tsx

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  // Navigation items based on the comprehensive Sitemap (for LLP and the Band)
  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'Artists', href: '/artists' },
    { name: 'The Band', href: '/the-band' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo/Brand Name Section */}
        <div className="flex-shrink-0">
          <Link 
            href="/" 
            // Use flex to align logo and text
            className="flex items-center space-x-2 text-yellow-400"
          >
            <Image
              src="/images/pollengers-logo.jpg"
              alt="Pollengers Logo"
              width={72} // Use your preferred size
              height={72} 
              className="rounded-md"
            />
            
            {/* THIS IS THE TWO-LINE STRUCTURE, VISIBLE ON ALL SCREENS */}
            {/* Use leading-tight to reduce vertical spacing */}
            <div className="leading-tight">
                {/* Primary Brand Name - Smaller text on mobile (text-lg) and larger on desktop (md:text-xl) */}
                <div className="text-lg md:text-xl font-bold tracking-wider">POLLENGERS</div>
                {/* Secondary/Legal Designation - Very small text on mobile (text-xs) and small on desktop (md:text-sm) */}
                <div className="text-xs md:text-sm font-medium tracking-wide opacity-80">ENTERTAINMENT LLP</div>
            </div>
            
          </Link>
        </div>

        {/* Desktop Navigation Links (unchanged) */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Mobile Navigation (unchanged) */}
        <div className="md:hidden">
            <button className="text-white hover:text-gray-300 p-2 rounded-md">
                {/* Menu Icon (Hamburger) */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;