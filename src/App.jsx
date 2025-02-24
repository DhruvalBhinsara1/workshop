import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div className="relative bg-gray-900 min-h-screen transition-colors duration-500">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}