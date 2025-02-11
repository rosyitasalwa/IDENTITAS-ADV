import React from 'react';
import HeroImage from '../assets/s3-removebg-preview.png';

const HeroSection = () => {
  return (
    <section id='homepage' className="min-w-screen">
      <div className="mx-auto px-4 pt-10 md:pt-0 bg-customBeigeMuda">
        <div className="container grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 items-center justify-items-center gap-10 lg:gap-20 pt-20">
          {/* Hero Image */}
          <div className="box order-2 lg:order-1">
            <img 
              src={HeroImage} 
              alt="Hero Image" 
              className="w-40 lg:w-auto max-w-lg lg:max-w-full object-cover h-auto lg:h-[90vh] mt-5 lg:mt-0"
            />
          </div>

          {/* Hero Text */}
          <div className=" col-span-1  text-center lg:text-left -ml-4 md:ml-0">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-4xl lg:text-5xl font-medium mb-4">
                <span className="font-bold text-customMaroon text-lg md:text-4xl whitespace-nowrap text-center font-kalnia w-screen">
                  <span className="mr-2">IDENTITAS</span>
                  <span>ADVERTISING</span>
                </span>
              </h1>
              <div className="w-16 lg:w-24 border-b-2 border-customMaroon mt-2 mb-4"></div>
              <p className="text-lg lg:text-xl font-semibold text-customMaroon mb-2">
                Souvenir & Undangan
              </p>
              <p className="text-base lg:text-lg font-medium text-customMaroon mb-6">
                Crafting Memories, One Detail at a Time
              </p>
              <a 
                href="#about" 
                className="bg-customMaroon hover:bg-orange-900 transition-all py-2 px-6 text-white shadow rounded-full"
              >
                Learn More <i className="ri-eye-line ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;