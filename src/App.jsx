import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './contexts/AdminContext';
import { useAdmin } from './contexts/AdminContext';

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
import AccountSetting from './Admin/Home';
import Dashboard from './Admin/Dashboard';
import Review from './Admin/Review';
import AddProduct from './Admin/AddProduct';

import { ProtectedAdminRoute } from './components/ProtectedRoute';

function AppContent() {
  const { isAdmin, loading } = useAdmin();
  const [products, setProducts] = useState([]); // State untuk produk

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-white min-h-screen'>
      <Router>
        <Routes>

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

            <Route 
            path="/admin/*" 
            element={
              <ProtectedAdminRoute>
                <AdminLayout>
                  <Routes>
                  <Route
                      path="produk"
                      element={<Dashboard products={products} />}
                    />
                    <Route
                      path="addproduct"
                      element={<AddProduct setProducts={setProducts} />}
                    />
                    <Route path="beranda" element={<AccountSetting />} />
                    <Route path="ulasan" element={<Review />} />
                  </Routes>
                </AdminLayout>
              </ProtectedAdminRoute>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

function App() {
  return (
    <AdminProvider>
      <AppContent />
    </AdminProvider>
  );
}

// Layout untuk Admin menggunakan Flexbox dan Tailwind CSS
const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-customBeigeMuda">
      {/* Sidebar */}
      <div
        className={`bg-red-900 text-white fixed md:relative z-20 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out md:w-64 w-64`}
      >
        <NavbarAdmin />
      </div>

      {/* Konten utama */}
      <div className="w-full flex-1 md:ml-64 bg-customBeigeMuda px-8 py-6">
        {/* Header untuk perangkat kecil */}
        <div className="bg-red-900 text-white flex items-center justify-between p-4 md:hidden">
          <h1 className="text-lg font-semibold">Admin</h1>
          <button
            onClick={toggleSidebar}
            className="bg-white text-red-900 px-3 py-1 rounded-md focus:outline-none"
          >
            {isSidebarOpen ? "Tutup" : "Menu"}
          </button>
        </div>

        {/* Konten utama */}
        <div className="flex-1 min-h-screen p-4 bg-customBeigeMuda">{children}</div>
      </div>

      {/* Overlay untuk sidebar (hanya di perangkat kecil) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default App;