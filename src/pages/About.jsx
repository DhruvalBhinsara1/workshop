import React from "react";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to <span className="font-semibold text-red-600">SneakPeak.co</span>!  
          We are passionate about bringing you the latest and greatest sneakers from around the world.  
          Our mission is to provide high-quality footwear that combines style, comfort, and innovation.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Since our founding, we’ve helped thousands of sneaker enthusiasts find their perfect pair.  
          Whether you're an athlete, a collector, or someone who appreciates quality shoes, we've got something for you.
        </p>
      </div>
    </section>
  );
}
