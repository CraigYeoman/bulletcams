'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center py-4 border-b border-gray-200">
        <div className="logo">
          <Image src="/bullet-cams-logo.jpg" alt="Bullet Cams" width={100} height={40} />
        </div>
        <button 
          className="md:hidden flex flex-col justify-between w-6 h-5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-full h-0.5 bg-gray-800 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 bg-gray-800 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </header>

      {menuOpen && (
        <nav className="fixed inset-0 bg-white z-50 pt-16 px-4">
          <ul className="space-y-4">
            <li><a href="#camshafts" className="text-xl text-gray-800">Camshafts</a></li>
            <li><a href="#valve-springs" className="text-xl text-gray-800">Valve Springs</a></li>
            <li><a href="#lifters" className="text-xl text-gray-800">Lifters</a></li>
            <li><a href="#pushrods" className="text-xl text-gray-800">Pushrods</a></li>
            <li><a href="#timing-sets" className="text-xl text-gray-800">Timing Sets</a></li>
            <li><a href="#tech-tips" className="text-xl text-gray-800">Tech Tips</a></li>
            <li><a href="#contact" className="text-xl text-gray-800">Contact</a></li>
          </ul>
        </nav>
      )}
    </>
  );
}
