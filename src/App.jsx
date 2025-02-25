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
import Marquee from "./components/Marquee";
import InfoSection from "./components/InfoSection";

export default function App() {
  const scrollStyle = {
    overflowY: "scroll",
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE and Edge
  };

  const webkitScrollbarStyle = {
    display: "none", // Chrome, Safari, Opera
  };

  return (
    <div style={scrollStyle}>
      <style>
        {`
          /* Webkit-specific scrollbar hiding */
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
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
    </div>
  );
}