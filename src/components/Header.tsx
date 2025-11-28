// src/components/Header.tsx

'use client'; // 1. IMPORTANT: Make this a client component to use hooks

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react'; // 2. Import useState hook

const Header = () => {
  // 3. Initialize state to track if the menu is open (default is false/closed)
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'The Band', href: '/the-band' }, 
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // 4. Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo/Brand Name Section (unchanged) */}
        <div className="flex-shrink-0">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-yellow-400"
            onClick={() => setIsOpen(false)} // Close menu if logo is clicked
          >
            <Image
              src="/images/pollengers-logo.jpg"
              alt="Pollengers Logo"
              width={48} 
              height={48} 
              className="rounded-md"
            />
            <div className="leading-tight">
                <div className="text-lg md:text-xl font-bold tracking-wider">POLLENGERS</div>
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
        
        {/* 5. Mobile Navigation Button */}
        <div className="md:hidden">
            <button 
              className="text-white hover:text-gray-300 p-2 rounded-md transition duration-150"
              onClick={toggleMenu} // Call the toggle function on click
            >
                {/* Conditionally display Menu or X icon based on 'isOpen' state */}
                {isOpen ? (
                    <X className="w-6 h-6" /> // Show X when menu is open
                ) : (
                    <Menu className="w-6 h-6" /> // Show Menu icon when menu is closed
                )}
            </button>
        </div>
      </nav>

      {/* 6. The Mobile Menu Panel */}
      {/* Conditionally apply the 'hidden' class based on 'isOpen' state */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black/90 pb-4 shadow-xl border-t border-gray-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-150"
              onClick={() => setIsOpen(false)} // Close the menu when a link is clicked
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