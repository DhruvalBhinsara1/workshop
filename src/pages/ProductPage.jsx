import React from "react";

export default function ProductPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-200">🚧 Under Development 🚧</h1>
        <p className="text-lg text-gray-200">
          🛠️Man and Woman At work.🧑‍💻
            Check again later!
        </p>
        <button
          className="mt-4 px-6 py-2 bg-white text-black rounded-lg hover:bg-red-500 hover:text-white transition"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
