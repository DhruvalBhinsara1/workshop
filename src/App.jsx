// App.jsx
import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import "/App.css";

export default function App() {
  return (
    <div className="bg-white min-h-screen transition-colors duration-500">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
