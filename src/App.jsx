import React from "react";

// components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BestProduct from "./Components/BestProduct";
import HowToUse from "./Components/HowToUse";
import Testimonials from "./Components/Testimonials";
import Faq from "./Components/Faq";
import Ads from "./Components/Ads";
import Footer from "./Components/Footer";
import Brands from "./Components/Brands";
import MobileNav from "./Components/MobileNav";

const App = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <MobileNav />
      <Navbar />
      <Hero />
      <BestProduct />
      <HowToUse />
      <Brands />
      <Testimonials />
      <Faq />
      <Ads />
      <Footer />
    </div>
  );
};

export default App;
