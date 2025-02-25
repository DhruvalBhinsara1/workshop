import React from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-white/70 backdrop-blur-sm text-black">
      {/* Top Banner */}
      <div className="bg-yellow-400 py-4 flex justify-between items-center px-6">
        <h2 className="font-bold text-lg sm:text-xl text-black">JOIN SNEAKPEAK AND GET 10% OFF</h2>
        <button className="bg-black text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          SIGN UP FOR FREE →
        </button>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 py-8 px-6 text-left">
        {/* PRODUCTS */}
        <div>
          <h4 className="font-bold mb-2">PRODUCTS</h4>
          <ul className="space-y-1">
            <li>Footwear</li>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Outlet-Sale</li>
            <li>New Arrivals</li>
            <li>Flat 50% Off!</li>
          </ul>
        </div>

        {/* SPORTS */}
        <div>
          <h4 className="font-bold mb-2">SPORTS</h4>
          <ul className="space-y-1">
            <li>Running</li>
            <li>Basketball</li>
            <li>Tennis</li>
            <li>Football</li>
            <li>Outdoor</li>
            <li>Motorsport</li>
          </ul>
        </div>

        {/* COLLECTIONS */}
        <div>
          <h4 className="font-bold mb-2">COLLECTIONS</h4>
          <ul className="space-y-1">
            <li>Ultraboost</li>
            <li>Superstar</li>
            <li>NMD</li>
            <li>Stan Smith</li>
            <li>Predator</li>
            <li>Adicolor</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="font-bold mb-2">SUPPORT</h4>
          <ul className="space-y-1">
            <li>Help</li>
            <li>Returns & Exchanges</li>
            <li>Shipping</li>
            <li>Order Tracker</li>
            <li>Customer Services</li>
          </ul>
        </div>

        {/* COMPANY INFO */}
        <div>
          <h4 className="font-bold mb-2">COMPANY INFO</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Stories</li>
            <li>Apps</li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div>
          <h4 className="font-bold mb-2">FOLLOW US</h4>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-gray-200 text-sm py-3 px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:underline">Cookies</a>
        </div>
        <div className="mt-2 sm:mt-0">&copy; {new Date().getFullYear()} SneakPeak.co All rights reserved.</div>
      </div>
    </footer>
  );
}
