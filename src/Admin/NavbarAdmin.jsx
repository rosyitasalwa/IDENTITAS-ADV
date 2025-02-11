import React from 'react';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
  return (
    <div>
     
        {/* Sidebar */}
        <div className="flex flex-col sm:flex-row md:block p-4 bg-red-900 text-white w-full md:w-1/4 md:p-8">
          <h1 className="font-great-vibes text-3xl md:text-4xl mb-8 font-dancing text-center md:text-left">
            Identitas Advertising
          </h1>
          <nav className="space-y-2 md:space-y-4">
            <Link
              to="/admin/beranda"
              className="flex items-center space-x-2 text-sm hover:text-customTaupe transition-colors"
            >
              <i class="ri-home-3-line text-lg"></i>
              <span>Beranda</span>
            </Link>
            <Link
              to="/admin/produk"
              className="flex items-center space-x-2 text-sm hover:text-customTaupe transition-colors"
            >
              <i className="ri-dashboard-line text-lg"></i>
              <span>Produk</span>
            </Link>
            <Link
              to="/admin/ulasan"
              className="flex items-center space-x-2 text-sm hover:text-customTaupe transition-colors"
            >
              <i className="ri-survey-line text-lg"></i>
              <span>Ulasan</span>
            </Link>
            <Link
              to="/login"
              className="flex items-center space-x-2 text-sm hover:text-customTaupe transition-colors"
            >
              <i className="ri-logout-box-line text-lg"></i>
              <span>Logout</span>
            </Link>
          </nav>
        </div>
      </div>
    
  );
};

export default NavbarAdmin;