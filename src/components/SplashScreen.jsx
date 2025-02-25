import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 4000); // Text fades out after 4s
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex justify-center items-center overflow-hidden">
      <video
        className="absolute w-full h-full object-cover"
        src="/src/assets/backgroundvid.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay */}
      <h1
        className={`relative z-10 text-white text-5xl font-extrabold tracking-wide transition-opacity duration-600 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        SneakPeak.co
      </h1>
    </section>
  );
}
