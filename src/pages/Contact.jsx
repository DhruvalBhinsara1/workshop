import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen pt-24 px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Have questions, feedback, or need help? Reach out to us!
        </p>

        <form className="w-full max-w-lg mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
