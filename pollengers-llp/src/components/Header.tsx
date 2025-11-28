// src/components/Header.tsx

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // 1. Import Lucide Icons

const Header = () => {
  const navItems = [
    // { name: 'Services', href: '/services' }, // Currently removed
    // { name: 'Artists', href: '/artists' },   // Currently removed
    { name: 'The Band', href: '/the-band' }, 
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    // 2. Add an id to the header for the CSS toggle hack
    <header id="main-header" className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo/Brand Name Section (remains the same) */}
        <div className="flex-shrink-0">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-yellow-400"
          >
            <Image
              src="/images/pollengers-logo.jpg"
              alt="Pollengers Logo"
              width={72} 
              height={72} 
              className="rounded-md"
            />
            <div className="leading-tight">
                <div className="text-lg md:text-xl font-bold tracking-wider">POLLENGERS</div>
                <div className="text-xs md:text-sm font-medium tracking-wide opacity-80">ENTERTAINMENT LLP</div>
            </div>
          </Link>
        </div>

        {/* 3. Mobile Menu Toggle Input (The CSS Hack) */}
        <input type="checkbox" id="menu-toggle" className="hidden" />

        {/* Desktop Navigation Links */}
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
        
        {/* Mobile Navigation Button (md:hidden) */}
        <div className="md:hidden">
            <label htmlFor="menu-toggle" className="text-white hover:text-gray-300 p-2 rounded-md cursor-pointer">
                <Menu className="w-6 h-6 block" id="menu-icon" />
                <X className="w-6 h-6 hidden" id="close-icon" />
            </label>
        </div>
      </nav>

      {/* 4. The Mobile Menu Panel (Hidden by default) */}
      <div id="mobile-menu" className="hidden md:hidden bg-black/90 pb-4 shadow-xl border-t border-gray-700">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-150"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

    </header>
  );
};

export default Header;