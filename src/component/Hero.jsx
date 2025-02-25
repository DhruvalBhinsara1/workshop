import React from "react";
import SampleImage from "/src/assets/backgroundimg.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 pt-20 relative">
      <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
        <div className="w-full max-w-md rounded-lg shadow-lg">
          <img
            src={SampleImage}
            alt="Sneakers Display"
            className="w-full rounded-lg shadow-lg shadow-cyan-700/50"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-sm mb-2 bg-red-100 text-red-600 bg-cover italic">What's New</h2>
        <p className="text-sm">New Arrivals!</p>
        <h1 className="text-2xl font-bold mt-2">
          <span className="text-red-600">New Sneakers!</span> are here Baby!
        </h1>
        <p className="text-base mt-2">Presenting the best sneakers from around the world!</p>
        <div className="flex justify-center lg:justify-start gap-2 mt-4">
          <button className="px-4 py-2 bg-red-600 text-white rounded shadow-red-700/50">Shop Now</button>
          <button className="px-4 py-2 border text-red-600 rounded shadow-red-700/50">Verify Your's here →</button>
        </div>
      </div>
    </section>
  );
}
