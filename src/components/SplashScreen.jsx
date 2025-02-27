import React from "react";

export default function SplashScreen() {
  return (
    <section className="relative h-screen w-full flex justify-center items-center overflow-hidden">
      <video
        className="absolute w-full h-full object-cover opacity-95"
        src="/backgroundvid.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay */}
      <h1
        className="relative z-10 text-white text-5xl font-extrabold tracking-wide drop-shadow-4xl font-serif"
      >
        SneakPeak.co
      </h1>
    </section>
  );
}
