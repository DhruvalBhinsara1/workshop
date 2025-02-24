// Hero.jsx
import React from 'react';
import SampleImage from '/src/assets/backgroundimg.jpg';

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-8 md:px-16 relative overflow-hidden bg-gray-900">
      <div className="w-full lg:w-1/2 flex justify-center items-center relative mb-8 lg:mb-0">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700">
          <img
            src={SampleImage}
            alt="Sneakers Display"
            className="object-cover w-full h-full max-h-[450px] rounded-2xl"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <div className="max-w-xl text-center lg:text-left space-y-6 bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg">
          <div className="inline-block bg-purple-800 text-purple-300 text-xs font-bold uppercase tracking-wider rounded-full px-4 py-1 shadow-md">
            What's New
          </div>
          <p className="text-sm text-gray-400 italic">Just shipped v1.0 →</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-100 leading-tight tracking-tight">
          <span className="text-purple-400">New Sneakers!</span> are here Baby!
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Presenting to you the best of sneakers from around the world!
          </p>
          <div className="flex justify-center lg:justify-start gap-8">
            <button className="w-44 px-6 py-3 rounded-md bg-gradient-to-r from-purple-700 to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-purple-500 transition shadow-lg transform hover:scale-105">
              Shop Now
            </button>
            <a
              href="#"
              className="w-44 px-6 py-3 rounded-md border border-purple-400 text-purple-300 font-semibold hover:bg-gray-700 transition shadow-md transform hover:scale-105 text-center"
            >
              View more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}