import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Whychoose from "./components/Whychoose";
import About from "./components/About";
import Product from "./components/Product";
import Quality from "./components/Quality";
import Getproduct from "./components/Getproduct";
import Ingredient from "./components/Ingredient";
import Slider from "./components/Slider";
import "./Slider.css"; //
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Whychoose />
      <About />
      <Product />
      <Quality />
      <Getproduct />
      <Ingredient />
      <Slider />
      <Footer />
    </>
  );
}

export default App;
