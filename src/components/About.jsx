import React from 'react'
import AboutImage from '../assets/bg.png';


const About = () => {
  return (
    <section id='about' className=''>
        <div className="flex flex-col items-center">
         <header className="py-20 w-screen h-1/4 mx-0 px-0 ml-auto">
          <h1 className="text-5xl font-bold text-center py-4 mt-10 text-customMochaBrown"><span className="border-b-4 border-customMochaBrown pb-2"> {/* Gunakan span untuk garis bawah */}
          Welcome to Identitas Advertising</span></h1>
         </header>
      </div>
        <div className="About bg-customMochaBrown py-20 w-screen h-3/4 mt-0 flex-1">
        <div className="container mx-auto px-0">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-20">
          <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row items-center">
          <img src={AboutImage} alt="About Image" className="w-full md:w-72 mb-4 md:mb-0" />
        </div>
        <div className="box md:w-1/2">
          <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
          <p className="text-lg text-white">Identitas Advertising merupakan sebuah bisnis penyedia souvenir dan undangan. Pengalaman kami memberikan solusi terbaik bagi klien untuk memenuhi kebutuhan acara melalui produk kami</p>
          </div>
          </div>
        </div>
       </div>
    </section>
  )
}

export default About