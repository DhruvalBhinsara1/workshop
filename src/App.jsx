import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCatalog from "./components/ProductCatalog";

export default function App() {
  return (
    <>
      <Navbar />
      <SplashScreen /> 
      <Hero />
      <ProductCatalog/>
      <Footer />
    </>
  );
}
