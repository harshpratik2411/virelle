import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="mt-4 relative font-outfit w-full z-50 top-0 left-0">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-28">
        <div className="flex items-center justify-between h-16 rounded-full bg-black px-4 md:px-8 py-2 relative">
          {/* Cart Icon - visible on sm and lg */}
          <div className="flex items-center">

            {/* Brand */}
            <Link to="/" className="text-white text-2xl font-bold">
              Virelle
            </Link>
          </div>

          {/* Center icon */}
          <div className="lg:flex hidden -ml-[10rem] items-center justify-center w-8 h-8 bg-white rounded-full">
            <svg
              className="w-5 h-5 animate-spin text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 3.14 2.31 5.74 5.31 5.96v2.54H9v2h6v-2h-1.31v-2.54C16.69 14.74 19 12.14 19 9c0-3.87-3.13-7-7-7zM7 9a5 5 0 0 1 10 0 5 5 0 0 1-10 0z" />
            </svg>
          </div>

          {/* Desktop menu */}
          <ul className="lg:flex hidden cursor-pointer justify-center space-x-8 text-white text-sm font-medium tracking-wide">
            <li><Link to="/new-arrivals" className="hover:text-gray-300">New Arrivals</Link></li>
            <li><Link to="/women" className="hover:text-gray-300">Women</Link></li>
            <li><Link to="/men" className="hover:text-gray-300">Men</Link></li>
            <li><Link to="/collections" className="hover:text-gray-300">Collections</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li> 
            <Link to="/cart" className="block md:hidden lg:block mr-4 text-white hover:text-gray-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 5h13m-4 0a1 1 0 1 1-2 0m6 0a1 1 0 1 1-2 0" />
              </svg>
            </Link>
          </ul> 
            
          {/* Desktop email pill */}
          <div className="hidden md:block bg-white text-black rounded-full px-5 py-1.5 text-sm font-semibold cursor-pointer whitespace-nowrap">
            virelle@gmail.com
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-3xl focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 flex-col items-center justify-center px-8 transition-all duration-300 ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        {/* Close button inside */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-white text-3xl"
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Mobile links */}
        <ul className="space-y-6 text-white uppercase text-lg font-medium tracking-wide text-center">
          <li onClick={closeMenu}><Link to="/new-arrivals" className="hover:text-gray-400">New Arrivals</Link></li>
          <li onClick={closeMenu}><Link to="/women" className="hover:text-gray-400">Women</Link></li>
          <li onClick={closeMenu}><Link to="/men" className="hover:text-gray-400">Men</Link></li>
          <li onClick={closeMenu}><Link to="/collections" className="hover:text-gray-400">Collections</Link></li>
          <li onClick={closeMenu}><Link to="/about" className="hover:text-gray-400">About</Link></li>
          <li onClick={closeMenu}><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>

        {/* Email pill */}
        <div
          onClick={closeMenu}
          className="mt-10 bg-white text-black rounded-full px-6 py-2 text-sm font-semibold cursor-pointer"
        >
          virelle@gmail.com
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
