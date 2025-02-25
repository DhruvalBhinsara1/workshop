// ProductCatalog.jsx
import React from "react";

export default function ProductCatalog() {
  const products = [
    { id: 1, name: "Adidas Running Shoes", price: "₹12,000", description: "Engineered for long-distance runs with breathable mesh and ultimate grip.", image: "/src/assets/shoe1.png", inStock: true },
    { id: 2, name: "Adidas Sambas", price: "₹9,000", description: "Timeless sneakers blending retro style with everyday comfort.", image: "/src/assets/shoe2.png", inStock: false },
    { id: 3, name: "Adidas Originals", price: "₹15,000", description: "Iconic streetwear shoes designed for both style and durability.", image: "/src/assets/shoe3.png", inStock: true },
    { id: 4, name: "Adidas FreeFoam", price: "₹6,000", description: "Lightweight and flexible, perfect for casual outings and gym sessions.", image: "/src/assets/shoe4.png", inStock: true },
    { id: 5, name: "Adidas MemoryLite", price: "₹2,000", description: "Soft memory foam insoles ensure all-day comfort on the move.", image: "/src/assets/shoe5.png", inStock: false },
    { id: 6, name: "Adidas SprintBoost", price: "₹6,999", description: "Boost your performance with enhanced midsole cushioning and support.", image: "/src/assets/shoe6.png", inStock: true },
    { id: 7, name: "Adidas TrailBlazer", price: "₹3,500", description: "Built for rugged terrain, offering stability and weather resistance.", image: "/src/assets/shoe7.png", inStock: true },
    { id: 8, name: "Adidas CloudStep", price: "₹5,000", description: "Ultra-light sneakers for effortless walking and everyday wear.", image: "/src/assets/shoe8.png", inStock: false },
  ];

  return (
    <section className="pb-25 py-25 px-6 bg-black">
      <h2 className="text-6xl text-white font-extrabold text-center mb-25">
        TOP TRENDING
      </h2>

      {/* 🛍️ Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gradient-to-br from-red-500 to-red-600 p-5 rounded-2xl shadow-lg hover:shadow-2xl flex flex-col transition-transform duration-300 transform hover:-translate-y-3 border border-gray-700"
          >
            <div className="w-full h-48 flex items-center justify-center mb-6 bg-white rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full text-left">
              <h3 className="text-lg font-semibold text-white mb-1 tracking-wide">
                {product.name}
              </h3>
              <p className="text-sm text-gray-200 mb-2">{product.description}</p>
              <p className="text-lg text-white font-medium">{product.price}</p>
            </div>

            {product.inStock ? (
              <button className="mt-6 w-full px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-white hover:text-black hover:scale-105 transition-transform duration-200 shadow-md">
                Add to Cart
              </button>
            ) : (
              <button
                className="mt-6 w-full px-4 py-2 bg-gray-500 text-black rounded-lg font-medium cursor-not-allowed opacity-70"
                disabled
              >
                Out of Stock
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
