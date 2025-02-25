import React from "react";
import { motion } from "framer-motion";
import SampleImage from "/src/assets/backgroundimg2.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-8 pt-20 relative overflow-hidden bg-black">
      {/* Text Section - More Centered */}
      <div className="w-full lg:w-[45%] text-center lg:text-left lg:ml-20">
        <p className="text-sm text-white"><span className="bg-red-100 text-red-600 px-3 rounded">New Arrivals!</span></p>
        <h1 className="text-3xl font-bold mt-2">
          <span className="text-red-600">New Sneakers!</span>
          <span className="text-white"> are here Baby!</span>
        </h1>
        <p className="text-base mt-2 text-white">Presenting the best sneakers from around the world!</p>
        <div className="flex justify-center lg:justify-start gap-2 mt-4">
          <button className="px-4 py-2 bg-red-600 text-white rounded shadow-red-700/50">Shop Now</button>
          <button className="px-4 py-2 border text-red-600 rounded shadow-red-700/50">Verify Yours here →</button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-lg lg:max-w-3xl rounded-lg shadow-lg relative mt-10 mb-20 mr-20 z-10">
        <img
          src={SampleImage}
          alt="Sneakers Display"
          className="w-full rounded-lg shadow-lg shadow-red-700"
        />
      </div>
    </section>
  );
}
