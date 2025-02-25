import React from "react";

export default function ProductPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">🚧 Under Development 🚧</h1>
        <p className="text-lg text-gray-600">
          This page is currently being worked on. Please check back soon!
        </p>
        <button
          className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
