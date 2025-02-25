import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-4 px-4 mt-8 text-center border-t">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">&copy; {new Date().getFullYear()} SneakPeak.co All rights reserved.</div>
        <ul className="flex gap-4 text-sm">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </footer>
  );
}