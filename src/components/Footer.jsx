import React from 'react'
import Logo from '../assets/Logo.png';

const Footer = () => {
    return (
        <section className='footer bg-customMochaBrown'>
         <footer className="flex flex-col md:flex-row justify-between p-10">
                     <div className="flex items-center mb-10 md:mb-0 p-10">
                         <div className="flex items-center mb-4">
                             <div className="p-2 rounded-full mr-2">
                             <img src={Logo} alt="Identitas Advertising Logo" className="inline-block align-text-top rounded p-8"/>
                             </div>
                         </div>
                         <p className="text-left text-lg md:w-1/2 text-white">
                         Identitas Advertising merupakan sebuah bisnis penyedia souvenir dan undangan. Pengalaman kami memberikan solusi terbaik bagi klien untuk memenuhi kebutuhan acara melalui produk kami
                         </p>
                     </div>
                     <div className="flex flex-col items-center md:items-start mt-56 md:mt-0">
                         <h2 className="text-xl font-bold mb-4 text-white">Menu</h2>
                         <ul className="space-y-2 mr-64">
                             <li><a href="#home" className='text-white text-decoration-none'>Home</a></li>
                             <li><a href="#about" className='text-white text-decoration-none'>About</a></li>
                             <li><a href="#product" className='text-white text-decoration-none'>Product</a></li>
                             <li><a href="#contact" className='text-white text-decoration-none'>Contact</a></li>
                         </ul>
                     </div>
                     <div>
                         <h2 className="text-xl font-bold mb-4 text-white">Contact Us</h2>
                         <ul className="space-y-2">
                             <li className='text-white text-decoration-none'><i class="ri-calendar-todo-fill mr-3"></i>Setiap Hari, buka pukul 09.00-17.00</li>
                             <li><a href="https://www.instagram.com/identitas_souvenir" className="text-white text-decoration-none hover:bg-orange-900" target="_blank" rel="noopener noreferrer"><i className="ri-instagram-line mr-3 to-white"></i>@identitas_souvenir</a></li>
                             <li><a href="https://wa.me/6281229974014" className="text-white text-decoration-none hover:bg-orange-900"><i class="ri-whatsapp-line mr-3 to-white"></i>0812-2997-4014</a></li>
                             <li className='text-white text-decoration-none'><i class="ri-map-pin-line mr-3 to-white"></i>Jl. Menjangan 5 no.24 Palebon, Pedurungan, Semarang Timur</li>
                         </ul>
                     </div>
                 </footer>
        </section>
     )
 } 

export default Footer