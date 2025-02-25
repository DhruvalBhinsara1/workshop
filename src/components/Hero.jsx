import React from "react";
import { useNavigate } from "react-router-dom";
import SampleImage from "/src/assets/backgroundimg2.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 pt-20 bg-black">
      {/* Text Section */}
      <div className="w-full lg:w-[45%] text-center lg:text-left lg:ml-10 xl:ml-20">
        <p className="text-sm text-white">
          <span className="bg-red-100 text-red-600 px-3 rounded">New Arrivals!</span>
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-tight">
          <span className="text-red-600">New Sneakers!</span>
          <span className="text-white"> are here Baby!</span>
        </h1>
        <p className="text-base sm:text-lg mt-2 text-white">
          Presenting the best sneakers from around the world!
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mt-6">
          <button
            onClick={() => navigate("/products")}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-red-600 text-white rounded shadow-red-700/50 transition-all duration-300 ease-in-out transform hover:bg-red-700 hover:scale-110"
          >
            Shop Now
          </button>
          <button className="px-4 py-2 sm:px-6 sm:py-3 border border-red-600 text-red-600 rounded shadow-red-700/50 transition-all duration-300 ease-in-out transform hover:bg-red-600 hover:text-white hover:scale-110">
            Verify Yours here →
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[50%] flex justify-center mt-10 lg:mt-0">
        <img
          src={SampleImage}
          alt="Sneakers Display"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl rounded-lg shadow-lg shadow-red-700"
        />
      </div>
    </section>
  );
}
