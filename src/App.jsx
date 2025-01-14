import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NAvbar from "./components/NAvbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NavbarAdmin from './Admin/NavbarAdmin';
import AccountSetting from './Admin/AccountSetting';


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
            <Route path="/login" element={<Login/>} />   
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/admin" element={<NavbarAdmin />} />
            <Route path="/accountsetting" element={<AccountSetting />} />
          </Routes>
      </Router>
    </div>
    );
}

export default App;