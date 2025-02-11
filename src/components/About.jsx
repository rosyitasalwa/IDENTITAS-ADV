import React from "react";
import AboutImage from "../assets/rumah1.jpeg";

const About = () => {
  return (
    <section id="about" className="bg-customBeigeMuda">
      {/* Header Section */}
      <div className="flex flex-col items-center">
        <header className="py-10 sm:py-16 w-full">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center py-4 mt-6 sm:mt-10 text-customMaroon font-kalnia">
              Welcome to Identitas Advertising
          </h1>
        </header>
      </div>

      {/* About Section */}
      <div className="py-10 sm:py-16 bg-customMaroon w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={AboutImage}
                alt="About Us"
                className="max-w-full h-auto w-40 md:w-72 rounded-full object-cover shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-customBeigeMuda mb-4 font-dancing">
                About Us
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-customBeigeMuda leading-relaxed">
                Identitas Advertising merupakan sebuah bisnis penyedia <br />
                souvenir dan undangan. Pengalaman kami memberikan <br />
                solusi terbaik bagi klien untuk memenuhi kebutuhan <br />
                acara melalui produk kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
