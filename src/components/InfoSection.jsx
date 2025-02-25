import React from 'react';
import { FaShoePrints } from 'react-icons/fa'; // Placeholder for logo (replace with your logo if needed)

export default function InfoSection() {
  return (
    <section className="w-full bg-black text-white py-12 px-6 text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide mb-6">
        Stories, Styles and Sportswear at SneakPeak, Since 2024
      </h2>

      <p className="max-w-4xl mx-auto text-sm sm:text-base leading-relaxed mb-6">
        Sneakers keep us moving. They bring style, comfort, and culture together. 
        At SneakPeak, we believe in empowering people to express themselves through footwear. 
        From high-performance kicks to lifestyle essentials, we offer a range of products that inspire movement and individuality.
      </p>

      <p className="max-w-4xl mx-auto text-sm sm:text-base leading-relaxed mb-10">
        We partner with top brands and creators to bring you collections that resonate. 
        Our mission? Support innovators, improve your sneaker game, and spark change in how people experience shoes. 
        Join us as we shape the future—one step at a time.
      </p>

      {/* Logo Placeholder */}
      <div className="flex justify-center font-mono">
        <p>SneakPeak.</p>
      </div>
    </section>
  );
}
