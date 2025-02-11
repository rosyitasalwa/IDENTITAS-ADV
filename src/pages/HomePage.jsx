import React from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Product from '../components/Product';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
    <div className='min-w-screen'>
      <HeroSection />
      <About />
      <Product />
      <Contact />
    </div>
    </>
  );
}

export default HomePage;