import { Link } from "react-router-dom";
import React, { useState } from "react";
import Modal from "./Modal";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoBag } from "react-icons/io5";


export default function Navbar() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-100/80 backdrop-blur-sm text-black py-3 px-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl cursor-pointer hover:text-red-500">
          SneakPeak.co
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 items-center">
          <li><Link to="/" className="font-medium hover:text-red-500">Home</Link></li>
          <li><Link to="/products" className="font-medium hover:text-red-500">Shop</Link></li>
          <li><Link to="/about" className="font-medium hover:text-red-500">About</Link></li>
          <li><Link to="/contact" className="font-medium hover:text-red-500">Contact</Link></li>
          <li><Link to="/bag" className="font-medium hover:text-red-500">Bag</Link></li>

        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex space-x-4">
          <button
            onClick={() => setLoginOpen(true)}
            className="px-4 py-2 border border-black rounded-lg font-medium hover:bg-black hover:text-white transition"
          >
            Login
          </button>
          <button
            onClick={() => setSignUpOpen(true)}
            className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-gray-100/80 backdrop-blur-sm z-40 flex flex-col justify-center items-center space-y-6 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)} className="text-lg font-semibold hover:text-red-500">Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)} className="text-lg font-semibold hover:text-red-500">Shop</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)} className="text-lg font-semibold hover:text-red-500">About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-lg font-semibold hover:text-red-500">Contact</Link>

        {/* Mobile Auth Buttons */}
        <div className="flex flex-col w-4/5 space-y-3">
          <button
            onClick={() => {
              setLoginOpen(true);
              setMenuOpen(false);
            }}
            className="py-2 border border-black rounded-lg font-medium hover:bg-black hover:text-white transition"
          >
            Login
          </button>
          <button
            onClick={() => {
              setSignUpOpen(true);
              setMenuOpen(false);
            }}
            className="py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Login Modal */}
      <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} title="Login">
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="px-3 py-2 border rounded focus:ring-red-500 focus:outline-none" required />
          <input type="password" placeholder="Password" className="px-3 py-2 border rounded focus:ring-red-500 focus:outline-none" required />
          <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Login</button>
        </form>
      </Modal>

      {/* Sign Up Modal */}
      <Modal isOpen={isSignUpOpen} onClose={() => setSignUpOpen(false)} title="Sign Up">
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" className="px-3 py-2 border rounded focus:ring-red-500 focus:outline-none" required />
          <input type="email" placeholder="Email" className="px-3 py-2 border rounded focus:ring-red-500 focus:outline-none" required />
          <input type="password" placeholder="Password" className="px-3 py-2 border rounded focus:ring-red-500 focus:outline-none" required />
          <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Sign Up</button>
        </form>
      </Modal>
    </>
  );
}
