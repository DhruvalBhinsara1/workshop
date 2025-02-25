import React from "react";

const products = [
  { id: 1, name: "Adidas Running Shoes", price: "₹12,000", image: "/src/assets/shoe1.png" },
  { id: 2, name: "Adidas Sambas", price: "₹9,000", image: "/src/assets/shoe2.png" },
  { id: 3, name: "Adidas Originals", price: "₹15,000", image: "/src/assets/shoe3.png" },
  { id: 4, name: "Adidas FreeFoam", price: "₹6,000", image: "/src/assets/shoe4.png" },
];

export default function ProductCatalog() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-800">
        Our Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2"
          >
            <div className="w-40 h-40 bg-gray-100 rounded-full flex justify-center items-center mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-28 h-28 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h3>
            <p className="text-red-600 font-bold text-lg">{product.price}</p>
            <button className="mt-4 w-full px-4 py-2 bg-red-600 text-white rounded-sm font-medium hover:bg-red-700 hover:scale-105 transition-transform duration-200">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
