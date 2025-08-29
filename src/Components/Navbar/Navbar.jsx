import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" mt-4 font-outfit w-full z-50 fixed top-0 left-0">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 rounded-full bg-black px-4 md:px-8 py-2">
          {/* Left Icon */} 
           <h1 className='text-white text-2xl font-bold'>Virelle</h1>
          <div className="lg:flex lg:ml-5  hidden   items-center justify-center w-8 h-8 bg-white rounded-full">
            <svg
              className="w-5 h-5 animate-spin text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path  d="M12 2C8.13 2 5 5.13 5 9c0 3.14 2.31 5.74 5.31 5.96v2.54H9v2h6v-2h-1.31v-2.54C16.69 14.74 19 12.14 19 9c0-3.87-3.13-7-7-7zM7 9a5 5 0 0 1 10 0 5 5 0 0 1-10 0z" />
            </svg>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-1 justify-center space-x-8 text-white text-sm font-medium tracking-wide">
            <li className="cursor-pointer hover:text-gray-300">New Arrivals</li>
            <li className="cursor-pointer hover:text-gray-300">Women</li>
            <li className="cursor-pointer hover:text-gray-300">Men</li>
            <li className="cursor-pointer hover:text-gray-300">Collections</li>
            <li className="cursor-pointer hover:text-gray-300">About</li>
            <li className="cursor-pointer hover:text-gray-300">Contact</li>
          </ul>

          {/* Email Pill (Desktop Only) */} 
          
          <div className="hidden md:block bg-white text-black rounded-full px-5 py-1.5 text-sm font-semibold cursor-pointer whitespace-nowrap">
            virelle@gmail.com
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-3xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 text-white uppercase text-lg font-medium tracking-wide px-8">
          <ul className="space-y-6 text-center">
            <li className="cursor-pointer hover:text-gray-400" onClick={toggleMenu}>New Arrivals</li>
            <li className="cursor-pointer hover:text-gray-400" onClick={toggleMenu}>Women</li>
            <li className="cursor-pointer hover:text-gray-400" onClick={toggleMenu}>Men</li>
            <li className="cursor-pointer hover:text-gray-400" onClick={toggleMenu}>Collections</li>
            <li className="cursor-pointer hover:text-gray-400" onClick={toggleMenu}>About</li>
            <li className="cursor-pointer hover:text-gray-400" onClick={toggleMenu}>Contact</li>
          </ul>

          <div
            className="bg-white text-black rounded-full px-6 py-2 text-sm font-semibold cursor-pointer"
            onClick={toggleMenu}
          >
            virelle@gmail.com
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;   
