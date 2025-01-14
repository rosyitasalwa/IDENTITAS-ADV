import React from 'react';
import Logo from '../assets/Logo.png';

const Footer = () => {
    return (
        <section className='footer bg-customBeigeMuda'>
            <footer className="flex flex-col md:flex-row justify-between p-10">
                <div className="flex items-center mb-10 md:mb-0">
                    <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full mr-2">
                            <img src={Logo} alt="Identitas Advertising Logo" className="inline-block align-text-top rounded p-8" />
                        </div>
                    </div>
                    <p className="text-left text-lg md:w-1/2 text-customMaroon">
                        Identitas Advertising merupakan sebuah bisnis penyedia souvenir dan undangan. Pengalaman kami memberikan solusi terbaik bagi klien untuk memenuhi kebutuhan acara melalui produk kami.
                    </p>
                </div>
                <div className="flex flex-col items-start mt-10 md:mt-0 md:mr-20"> 
                    <h2 className="text-xl font-bold mb-4 text-customMaroon">Menu</h2>
                    <ul className="space-y-2">
                        <li><a href="#home" className='text-customMaroon text-decoration-none hover:underline'>Home</a></li>
                        <li><a href="#about" className='text-customMaroon text-decoration-none hover:underline'>About</a></li>
                        <li><a href="#product" className='text-customMaroon text-decoration-none hover:underline'>Product</a></li>
                        <li><a href="#contact" className='text-customMaroon text-decoration-none hover:underline'>Contact</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-start mt-10 md:mt-0"> 
                    <h2 className="text-xl font-bold mb-4 text-customMaroon">Contact Us</h2>
                    <ul className="space-y-2 mb-4">
                        <li className='flex items-center text-customMaroon'>
                            <i className="ri-calendar-2-line text-2xl mr-2"></i>
                            <div className="flex flex-col">
                                <span>Setiap Hari, buka pukul</span>
                                <span className="ml-1 font-bold">09.00-17.00</span> 
                            </div>
                        </li>
                        <li className='flex items-center text-customMaroon'>
                            <i className="ri-map-pin-line text-2xl mr-2"></i>
                            <div className="flex flex-col">
                                Jl. Menjangan 5 no.24 Palebon, Pedurungan, Semarang Timur
                            </div>
                        </li>
                    </ul>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/identitas_souvenir" className="flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
                            <div className="w-12 h-12 bg-customMaroon hover:bg-customTaupe rounded-full flex items-center justify-center">
                                <i className="ri-instagram-line text-white text-xl"></i>
                            </div>
                        </a>
                        <a href="https://wa.me/6281229974014" className="flex items-center space-x-2"> 
                            <div className="w-12 h-12 bg-customMaroon hover:bg-customTaupe rounded-full flex items-center justify-center">
                                <i className="ri-whatsapp-line text-white text-xl"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Footer;