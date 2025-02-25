import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import ProductCatalog from "./component/ProductCatalog";
import "./App.css";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <ProductCatalog />  {/* New grid of shoes added */}
      <Footer />
    </div>
  );
}
