// Hero.jsx
import React, { useState, useEffect } from 'react';
import SampleImage from '/src/assets/backgroundimg.jpg';

export default function Hero() {
  const [transformStyle, setTransformStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.body.getBoundingClientRect();
      const x = ((e.clientX - rect.width / 2) / rect.width) * 30; // Smoother tilt range
      const y = ((e.clientY - rect.height / 2) / rect.height) * -30;

      setTransformStyle({
        transform: `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`,
        transition: 'transform 0.2s ease-out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4">
      <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
        <img
          src={SampleImage}
          alt="Sneakers Display"
          className="w-full max-w-md rounded-lg shadow-lg"
          style={transformStyle}
        />
      </div>

      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-sm mb-2">What's New</h2>
        <p className="text-sm">Just shipped v1.0 →</p>
        <h1 className="text-2xl font-bold mt-2">
          <span className="text-pink-400">New Sneakers!</span> are here Baby!
        </h1>
        <p className="text-base mt-2">Presenting the best sneakers from around the world!</p>
        <div className="flex justify-center lg:justify-start gap-2 mt-4">
          <button className="px-4 py-2 bg-pink-400 text-white rounded">Shop Now</button>
          <button className="px-4 py-2 border text-pink-400 rounded">View more →</button>
        </div>
      </div>
    </section>
  );
}