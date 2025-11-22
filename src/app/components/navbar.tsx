import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-black/80 backdrop-blur-sm border-b border-red-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Style Stranger Things */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-red-600 tracking-widest uppercase st-title hover:text-red-500 transition-colors" style={{ textShadow: '0 0 15px rgba(220, 38, 38, 0.8)' }}>
              STRANGER WEB
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-red-500 hover:scale-110 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;