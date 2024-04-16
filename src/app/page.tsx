// src/pages/index.tsx

import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Cuaca from "./components/cuaca";
import Products from "./components/product";
import Reviews from "./components/review";
import Contact from "./components/contact";
import Footer from "./components/footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Products />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
