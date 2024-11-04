'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const menuItems = [
    { href: '#camshafts', label: 'Camshafts' },
    { href: '#valve-springs', label: 'Valve Springs' },
    { href: '#lifters', label: 'Lifters' },
    { href: '#pushrods', label: 'Pushrods' },
    { href: '#timing-sets', label: 'Timing Sets' },
    { href: '#tech-tips', label: 'Tech Tips' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="flex justify-between items-center py-4 px-6 border-b border-gray-200">
        <div className="logo">
          <Image src="/bullet-cams-logo.jpg" alt="Bullet Cams" width={100} height={40} />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link 
                  href={item.href}
                  className="text-gray-800 hover:text-yellow-500 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-between w-6 h-5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-full h-0.5 bg-gray-800 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 bg-gray-800 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <nav 
        className={`md:hidden fixed inset-0 bg-white z-50 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setMenuOpen(false)} 
            className="text-2xl p-2"
          >
            &times;
          </button>
        </div>
        <ul className="space-y-4 p-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-xl text-gray-800 hover:text-yellow-500 transition-colors block"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
