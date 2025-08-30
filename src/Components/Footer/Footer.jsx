import React from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlay, FaApple, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {

  return (
    <footer
      className="w-[95rem] mt-8  -ml-32 bg-black text-white font-outfit px-6 md:px-20 pt-20 pb-6 z-50 flex flex-col justify-between"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Brand Section */}
        <div className="flex flex-col justify-start">
          <Link to="/" className="text-4xl font-extrabold mb-3 hover:text-gray-300">
            Virelle
          </Link>
          <p className="text-sm text-gray-400 mb-4 italic max-w-xs">
            Elevate your style with timeless essentials.
          </p>
          <div className="flex ml-8  space-x-4 mt-auto">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gray-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-gray-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/new-arrivals" className="hover:text-gray-300">New Arrivals</Link></li>
            <li><Link to="/women" className="hover:text-gray-300">Women</Link></li>
            <li><Link to="/men" className="hover:text-gray-300">Men</Link></li>
            <li><Link to="/collections" className="hover:text-gray-300">Collections</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-gray-300">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Get the App */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get the App</h3>
          <div className="flex  flex-col ml-16 space-y-3 text-sm">
            <a 
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300"
              aria-label="Google Play Store"
            >
              <FaGooglePlay className="text-xl" />
              Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300"
              aria-label="Apple App Store"
            >
              <FaApple className="text-xl" />
              App Store
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-4 text-gray-400 max-w-xs">
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Virelle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
 