// Navbar.jsx
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 left-0 px-12 py-3 flex items-center justify-between border-b bg-transparent">
      <div className="text-lg font-bold text-red-600">SneakPeak.co</div>
      
      <ul className="hidden md:flex gap-6 text-base">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
