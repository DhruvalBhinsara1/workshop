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
  return (
    <div>
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
