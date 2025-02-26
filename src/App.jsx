import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import ProductCatalog from "./components/ProductCatalog";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Modal from "./components/Modal";
import InfoSection from "./components/InfoSection";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => setLoading(false), 2000); // Loading for 2 seconds
    return () => clearTimeout(loadTimer);
  }, []);

  return (
    <div>
      {loading ? (
        // 🔄 Stylish Loading Screen
        <div className="flex items-center justify-center h-screen bg-black">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border-4 border-red-700"></div>
          </div>
        </div>
      ) : (
        // 🌟 Main Content
        <Router>
          <Navbar />
          <Modal />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SplashScreen />
                  <Hero />
                  <InfoSection />
                  <ProductCatalog />
                </>
              }
            />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}
