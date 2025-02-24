import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 backdrop-blur-md border-t border-gray-700 py-6 px-8 md:px-16 mt-16 rounded-t-2xl shadow-inner text-gray-300 text-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-medium">&copy; {new Date().getFullYear()} SneakPeak. All rights reserved.</div>
        <ul className="flex space-x-6 font-medium">
          <li className="hover:text-purple-400 cursor-pointer">Home</li>
          <li className="hover:text-purple-400 cursor-pointer">Shop</li>
          <li className="hover:text-purple-400 cursor-pointer">About</li>
          <li className="hover:text-purple-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </footer>
  );
}