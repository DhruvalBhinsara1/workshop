// Marquee.jsx
import React from "react";

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-red-600 py-4">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 15s linear infinite;
        }
      `}</style>

      <div className="marquee text-white text-3xl font-extrabold flex items-center gap-16">
        {Array(8).fill("10% SALE").map((text, index) => (
          <span key={index} className="mx-4">{text}</span>
        ))}
      </div>
    </div>
  );
}
