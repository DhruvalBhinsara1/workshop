import React, { useState } from "react";
import { IoBag, IoCheckmark } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function ProductCatalog() {
  const [wishlist, setWishlist] = useState([]);
  const [bag, setBag] = useState([]);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId) // Remove from wishlist
        : [...prev, productId] // Add to wishlist
    );
  };

  const toggleBag = (productId) => {
    setBag((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId) // Remove from bag
        : [...prev, productId] // Add to bag
    );
  };

  const products = [
    { id: 1, name: "Adidas Running Shoes", price: "₹12,000", description: "Engineered for long-distance runs with breathable mesh and ultimate grip.", image: "/shoe1.png", inStock: true },
    { id: 2, name: "Adidas Sambas", price: "₹9,000", description: "Timeless sneakers blending retro style with everyday comfort.", image: "/shoe2.png", inStock: false },
    { id: 3, name: "Adidas Originals", price: "₹15,000", description: "Iconic streetwear shoes designed for both style and durability.", image: "/shoe3.png", inStock: true },
    { id: 4, name: "Adidas FreeFoam", price: "₹6,000", description: "Lightweight and flexible, perfect for casual outings and gym sessions.", image: "/shoe4.png", inStock: true },
    { id: 5, name: "Adidas MemoryLite", price: "₹2,000", description: "Soft memory foam insoles ensure all-day comfort on the move.", image: "/shoe5.png", inStock: false },
    { id: 6, name: "Adidas SprintBoost", price: "₹6,999", description: "Boost your performance with enhanced midsole cushioning and support.", image: "/shoe6.png", inStock: true },
    { id: 7, name: "Adidas TrailBlazer", price: "₹3,500", description: "Built for rugged terrain, offering stability and weather resistance.", image: "/shoe7.png", inStock: true },
    { id: 8, name: "Adidas CloudStep", price: "₹5,000", description: "Ultra-light sneakers for effortless walking and everyday wear.", image: "/shoe8.png", inStock: false },
  ];

  return (
    <section className="pb-25 py-17 px-6 bg-red-500">
      <h2 className="text-6xl text-white font-extrabold text-center mb-16">
        TOP TRENDING
      </h2>

      {/* 🛍️ Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/10 backdrop-blur-md border border-white/30 p-5 rounded-lg shadow-lg hover:shadow-2xl flex flex-col transition-transform duration-300 transform hover:-translate-y-3"
          >
            <div className="w-full h-48 flex items-center justify-center mb-6 bg-white/30 rounded-lg overflow-hidden">
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

              {/* Price & Wishlist */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-lg text-white font-medium">{product.price}</p>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`flex items-center gap-1 text-sm px-2 py-1 rounded-md transition duration-200 ${
                    wishlist.includes(product.id)
                      ? "bg-red-600 text-white"
                      : "bg-white text-black hover:bg-red-600 hover:text-white"
                  }`}
                  title={wishlist.includes(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                >
                  {wishlist.includes(product.id) ? (
                    <FaHeart className="text-white" />
                  ) : (
                    <FaRegHeart className="text-red-500" />
                  )}
                  {wishlist.includes(product.id) ? "Wishlisted" : "Wishlist"}
                </button>
              </div>
            </div>

            {product.inStock ? (
              <button
                onClick={() => toggleBag(product.id)}
                className={`mt-2 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-transform duration-200 shadow-md ${
                  bag.includes(product.id)
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-white text-black hover:bg-black hover:text-white hover:scale-105"
                }`}
              >
                {bag.includes(product.id) ? (
                  <>
                    Added to Bag <IoCheckmark className="text-lg" />
                  </>
                ) : (
                  <>
                    Add to Bag <IoBag className="text-lg" />
                  </>
                )}
              </button>
            ) : (
              <button
                className="mt-2 w-full px-4 py-2 bg-yellow-500 text-black rounded-lg font-medium cursor-not-allowed opacity-70"
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
