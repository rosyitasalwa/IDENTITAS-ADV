import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NAvbar from "./components/NAvbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/AdminDashboard";

function App() { 
    return (    
    <div>
      <Router>
        <NAvbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />  
            <Route path="/herosection" element={<HeroSection />} /> 
            <Route path="/product" element={<Product />} />  
            <Route path="/contact" element={<Contact />} />  
            <Route path="/footer" element={<Footer />} />  
            <Route path="/admindashboard" element={<AdminDashboard />} />   
          </Routes>
      </Router>
    </div>
    );
}

export default App;