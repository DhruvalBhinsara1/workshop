// ProductCatalog

import React from "react";

const products = [
  { id: 1, name: "Adidas Running Shoes", price: "₹12,000", image: "/src/assets/shoe1.png" },
  { id: 2, name: "Adidas Sambas", price: "₹9,000", image: "/src/assets/shoe2.png" },
  { id: 3, name: "Adidas Originals", price: "₹15,000", image: "/src/assets/shoe3.png" },
  { id: 4, name: "Adidas FreeFoam", price: "₹6,000", image: "/src/assets/shoe4.png" },
];

export default function ProductCatalog() {
  return (
    <section className="py-16 pb-8 px-6 bg-black">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
        Our Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gradient-to-br from-gray-300 to-gray-400 p-5 rounded-2xl shadow-lg hover:shadow-2xl flex flex-col items-center text-center transition-transform duration-300 transform hover:-translate-y-3 border border-gray-700"
          >
            <div className="w-full h-48 flex items-center justify-center mb-6 bg-white rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2 tracking-wide">
              {product.name}
            </h3>
            <p className="text-lg text-black">{product.price}</p>
            <button className="mt-6 w-full px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-red-700 hover:scale-105 transition-transform duration-200 shadow-md">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
