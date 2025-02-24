// App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import "/App.css";

export default function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInvert, setIsHoveringInvert] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative bg-gray-100 min-h-screen transition-colors duration-500">
      <div
        className={`custom-cursor ${isHoveringInvert ? "invert" : ""}`}
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      ></div>
      <Navbar setIsHoveringInvert={setIsHoveringInvert} />
      <Hero setIsHoveringInvert={setIsHoveringInvert} />
      <Footer />
    </div>
  );
}