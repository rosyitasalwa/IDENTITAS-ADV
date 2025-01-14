import React from 'react';
import HeroImage from '../assets/s1.png';

const HeroSection = () => {
  return (
    <section id='homepage' className="w-full">
         <div className=" mx-auto ml-0 px-0 bg-customBeigeMuda w-full">
          <div className="hero container grid md:grid-cols-2 items-center justify-items-start gap-20 pt-0 w-full">
          <div className="box">
             <img src={HeroImage} alt="Hero Image" className="md:w-full w-[550px] ml-[-10px] md:m-0 object-cover h-screen md:h-[750px] mt-10"/>
            </div>
            <div className="box col-span-1">
                <div className="flex flex-col items-center ml-10">
              <h1 className="text-5xl font-medium mb-2 text-center"><span className="font-bold text-customMaroon text-center pb-4 whitespcae-nowrap flex font-kalnia">
                <span className="mr-2">IDENTITAS</span>
                <span>ADVERTISING</span>
                </span>
                <div className="w-full border-b-2 border-customMaroon mt-2" />
                </h1>
              <p className="text-xl font-semibold text-customMaroon text-center mb-4 ml-4">Souvenir & Undangan</p>
              <p className="text-xl font-medium text-customMaroon text-center mb-6 ml-6">Crafting Memories, One Detail at a time</p>
             <div className="text-center">
              <a href="#about" className="bg-customMaroon hover:bg-orange-900 transition-all py-2 px-4 text-white shadow rounded-full ">Learn More <i className="ri-eye-line ms-1"></i>
              </a>
              </div>
            </div>
           </div>
          </div> 
          </div>
        </section>
  );
}

export default HeroSection;