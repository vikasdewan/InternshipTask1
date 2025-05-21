// src/components/Navbar.jsx
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaVimeoV,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-t-4 border-purple-600 bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Social Icons */}
        <div className="flex gap-4 text-xl text-black">
          <a href="#" className="hover:text-purple-600 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-purple-600 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-purple-600 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-purple-600 transition">
            <FaVimeoV />
          </a>
          <a href="#" className="hover:text-purple-600 transition">
            <FaYoutube />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 font-medium text-black">
          <a href="/" className="hover:text-purple-600 text-teal-700">Home</a>
          <a href="/#about" className="hover:text-purple-600">About</a>
          <a href="/#showreel" className="hover:text-purple-600">Showreels</a>
          <a href="/#gallery" className="hover:text-purple-600">Gallery</a>
         <Link to="/resume">Resume</Link>
          <a href="/#contact" className="hover:text-purple-600">Representation</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
