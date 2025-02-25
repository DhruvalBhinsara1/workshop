//Footer

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-4 px-4 text-center bg-white/70 backdrop-blur-sm text-black">
      <div className="text-sm">&copy; {new Date().getFullYear()} SneakPeak.co All rights reserved.</div>
    </footer>
  );
}
