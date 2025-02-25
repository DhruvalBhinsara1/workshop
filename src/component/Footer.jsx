import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-4 px-4 mt-8 text-center border-t border-b bg-red-500/80 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 ">
        <div className="text-sm">&copy; {new Date().getFullYear()} SneakPeak.co All rights reserved.</div>
      </div>

    </footer>
  );
}
