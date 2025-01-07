import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const NAvbar = () => {
    const [show, setShow] = useState(false);

    const handleClicK = () => {
        setShow(!show);
        console.log(show);
    };

    let menuActive = show ? "left-0" : "-left-full";

  return (
  <div className="navbar bg-customMochaBrown fixed w-full transition-all py-4">
    <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
            <div className="logo">
            <img src={logo} alt="Logo Identitas Advertising"/>
             </div>
            <ul className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-white md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2
            -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-orange-950 bg-customMochaBrown font-bold text-orange-950 transition-all`}>
                
                <li className="flex items-center gap-3">
                <i className="ri-home-line text-3xl md:hidden block"></i>
                <Link to="/" className="font-medium opacity-75">Home</Link>
                </li>

                <li className="flex items-center gap-3">
                <i className="ri-profile-line text-3xl md:hidden block"></i>
                <Link to="/about" className="font-medium opacity-75">About</Link>
                </li>

                <li className="flex items-center gap-3">
                <i className="ri-store-line text-3xl md:hidden block"></i>
                <Link to="/product" className="font-medium opacity-75">Product</Link>
                </li>

                <li className="flex items-center gap-3">
                <i className="ri-contacts-line text-3xl md:hidden block"></i>
                <Link to="/contact" className="font-medium opacity-75 hover:text-orange-200">Contact</Link>
                </li>
            </ul>
            <div className="Admin">
                <Link to="/AdminDashboard" className="bg-orange-950 px-5 py-2 rounded-full text-white font-bold hover:bg-orange-900 transition-all">Admin</Link>
            </div>
            <i class="ri-menu-2-line text-3xl md:hidden block" onClick={handleClicK}></i>
            </div>
          </div>
          </div>
    )      
};

export default NAvbar;