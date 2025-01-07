import React from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Product from '../components/Product';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Product />
      <Contact />
    </>
  );
}

export default HomePage;