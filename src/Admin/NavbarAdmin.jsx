import React from 'react';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
  return (

    <div>
      <div className="flex h-screen">
        <div className="bg-red-900 text-white w-1/4 p-8">
          <h1 className="font-great-vibes text-4xl mb-12 font-dancing">Identitas Advertising</h1>
          <nav className="space-y-6">
            <Link to="/admin/accountsetting" className="flex items-center space-x-2">
              <i className="fas fa-user-cog"></i>
              <span>Account Setting</span>
            </Link>
            <Link to="/admin/dashboard" className="flex items-center space-x-2">
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </Link>
            <Link to="/admin/review" className="flex items-center space-x-2">
              <i className="fas fa-clipboard"></i>
              <span>Review</span>
            </Link>
            <Link to="/login" className="flex items-center space-x-2">
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavbarAdmin;
