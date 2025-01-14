import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Komponen umum (User)
import NAvbar from "./components/NAvbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

// Komponen login & signup
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// Komponen admin
import NavbarAdmin from './Admin/NavbarAdmin';
import AccountSetting from './Admin/AccountSetting';
import Dashboard from './Admin/Dashboard';
import Review from './Admin/Review';

function App() {
  // Tentukan apakah pengguna adalah admin (isAdmin)
  const [isAdmin] = useState(false); // Atur sesuai dengan kondisi login atau status admin

  return (
    <div>
      <Router>
        <Routes>
          {/* Rute untuk Admin */}
          {isAdmin ? (
            <>
              <Route path="/" element={<AdminLayout><Dashboard /></AdminLayout>} />
              <Route path="/admin/accountsetting" element={<AdminLayout><AccountSetting /></AdminLayout>} />
              <Route path="/admin/review" element={<AdminLayout><Review /></AdminLayout>} />
            </>
          ) : (
            <>
              {/* Rute untuk User */}
              <Route path="/" element={<><NAvbar /><HomePage /></>} />
              <Route path="/about" element={<><NAvbar /><About /></>} />
              <Route path="/herosection" element={<><NAvbar /><HeroSection /></>} />
              <Route path="/product" element={<><NAvbar /><Product /></>} />
              <Route path="/contact" element={<><NAvbar /><Contact /></>} />
              <Route path="/footer" element={<><NAvbar /><Footer /></>} />
              <Route path="/login" element={<><NAvbar /><Login /></>} />
              <Route path="/signup" element={<><NAvbar /><SignUp /></>} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

// Layout untuk Admin menggunakan Flexbox dan Tailwind CSS
const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Navbar Admin di sisi kiri */}
      <div className="w-64 bg-red-900 text-white fixed h-full">
        <NavbarAdmin />
      </div>
      
      {/* Konten utama di sebelah kanan navbar */}
      <div className="ml-64 w-full p-6 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default App;
