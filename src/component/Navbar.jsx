import React from 'react';

export default function Navbar() {
    return (
      <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-gray-900/80 border-b border-gray-700 px-8 md:px-16 py-4 flex items-center justify-between rounded-b-2xl shadow-md">
        <div className="text-2xl font-bold text-purple-300 tracking-wide">SneakPeak</div>
        <ul className="hidden md:flex space-x-8 font-medium text-gray-300">
          <li className="hover:text-purple-400 transition cursor-pointer">Home</li>
          <li className="hover:text-purple-400 transition cursor-pointer">Shop</li>
          <li className="hover:text-purple-400 transition cursor-pointer">About</li>
          <li className="hover:text-purple-400 transition cursor-pointer">Contact</li>
        </ul>
        <button className="px-5 py-2 rounded-md bg-gradient-to-r from-purple-700 to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-purple-500 transition shadow-md transform hover:scale-105">
          Get Started
        </button>
      </nav>
    );
  }