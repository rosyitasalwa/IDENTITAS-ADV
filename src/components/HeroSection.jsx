import React from 'react';
import HeroImage from '../assets/s1.png';

const HeroSection = () => {
  return (
    <section id='homepage' className="homepage pb-10">
         <div className="container mx-auto ml-0 px-0">
          <div className="hero grid md:grid-cols-2 items-center justify-items-start gap-20 pt-0">
          <div className="box">
             <img src={HeroImage} alt="Hero Image" className="md:w-full w-[550px] ml-[-10px] md:m-0 object-cover h-screen md:h-[750px] mt-10"/>
            </div>
            <div className="box col-span-1">
                <div className="flex flex-col items-center">
              <h1 className="text-5xl font-medium mb-7"><span className="font-bold text-customMochaBrown text-center underline pb-4 whitespcae-nowrap">IDENTITAS ADVERTISING</span></h1>
              <p className="text-xl font-semibold text-customMochaBrown text-center mb-4">Souvenir & Undangan</p>
              <p className="text-xl font-medium text-customMochaBrown text-center mb-6">Crafting Memories, One Detail at a time</p>
             <div className="text-center">
              <a href="#about" className="bg-customMochaBrown hover:bg-orange-900 transition-all py-2 px-4 text-white shadow rounded-full ">Learn More <i className="ri-eye-line ms-1"></i>
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