import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import logo from "../assets/Logo.png";

const NAvbar = () => {
    const [show, setShow] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
        })

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("Logged out successfully");
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    const handleClicK = () => {
        setShow(!show);
        console.log(show);
    };

    let menuActive = show ? "left-0" : "-left-full";

  return (
  <div className="navbar bg-customTaupe fixed w-full transition-all py-4 shadow-lg z-10 bg-opacity-80">
    <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
            <div className="logo">
            <img src={logo} alt="Logo Identitas Advertising" className="h-10"/>
             </div>
            <ul className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-white md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2
            -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-orange-950 bg-customTaupe bg-opacity-60 font-bold text-orange-950 transition-all`}>
                
                <li className="flex items-center gap-3">
                <i className="ri-home-line text-3xl md:hidden block"></i>
                <Link to="/" className="font-medium opacity-75 hover:text-customMaroon">Home</Link>
                </li>

                <li className="flex items-center gap-3">
                <i className="ri-profile-line text-3xl md:hidden block"></i>
                <Link to="/about" className="font-medium opacity-75 hover:text-customMaroon">About</Link>
                </li>

                <li className="flex items-center gap-3">
                <i className="ri-store-line text-3xl md:hidden block"></i>
                <Link to="/product" className="font-medium opacity-75 hover:text-customMaroon">Product</Link>
                </li>

                <li className="flex items-center gap-3">
                <i className="ri-contacts-line text-3xl md:hidden block"></i>
                <Link to="/contact" className="font-medium opacity-75 hover:text-customMaroon">Contact</Link>
                </li>
            </ul>
            <div className="Admin">
            {!isLoggedIn ? (
                <Link to="/Login" className="bg-customMaroon px-5 py-2 rounded-full text-white font-bold hover:bg-orange-900 transition-all">Login</Link>
            ) : (
                <button 
                onClick={handleLogout}
                className="bg-orange-950 px-5 py-2 rounded-full text-white font-bold hover:bg-orange-900 transition-all">
                    Logout
                </button>
            )}
            </div>
            <i className="ri-menu-2-line text-3xl md:hidden block" onClick={handleClicK}></i>
            </div>
          </div>
          </div>
    )      
};

export default NAvbar;