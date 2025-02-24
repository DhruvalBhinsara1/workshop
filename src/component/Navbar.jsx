// Navbar.jsx
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between border-b bg-white z-50">
      <div className="text-lg font-bold text-pink-400">SneakPeak.co</div>
      <ul className="hidden md:flex gap-4 text-sm">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Shop</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <button 
        className="md:hidden text-pink-400 font-bold text-lg focus:outline-none" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 z-40">
          <ul className="flex flex-col gap-4 text-center text-sm">
            <li className="cursor-pointer hover:bg-pink-100 py-2">Home</li>
            <li className="cursor-pointer hover:bg-pink-100 py-2">Shop</li>
            <li className="cursor-pointer hover:bg-pink-100 py-2">About</li>
            <li className="cursor-pointer hover:bg-pink-100 py-2">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}