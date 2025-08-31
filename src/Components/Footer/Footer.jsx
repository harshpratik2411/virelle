import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGooglePlay,
  FaApple,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full font-outfit">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col justify-between">
            <div>
              <Link to="/" className="text-4xl font-extrabold text-white hover:text-gray-300">
                Virelle
              </Link>
              <p className="text-sm text-gray-400 italic mt-2">
                Elevate your style with timeless essentials.
              </p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/new-arrivals" className="hover:text-white">New Arrivals</Link></li>
              <li><Link to="/women" className="hover:text-white">Women</Link></li>
              <li><Link to="/men" className="hover:text-white">Men</Link></li>
              <li><Link to="/collections" className="hover:text-white">Collections</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Get the App */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get the App</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="#" className="flex items-center gap-2 hover:text-white">
                <FaGooglePlay /> Google Play
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-white">
                <FaApple /> App Store
              </a>
            </div>
          </div>

          {/* Newsletter */}
         <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get the latest updates and offers.
            </p>
            
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6" />

        {/* Bottom Section */}
        <div className="text-xs text-center text-gray-500">
          © {new Date().getFullYear()} Virelle. All rights reserved.
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;

 