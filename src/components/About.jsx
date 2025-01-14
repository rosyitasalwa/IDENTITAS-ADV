import React from "react";
import AboutImage from "../assets/bg.png";

const About = () => {
  return (
    <section id="about" className="bg-customBeigeMuda">
      {/* Header Section */}
      <div className="flex flex-col items-center">
        <header className="py-20 w-full">
          <h1 className="text-3xl md:text-5xl font-bold text-center py-4 mt-10 text-customMaroon font-kalnia">
            <span className="border-b-4 border-customMochaBrown pb-2">
              Welcome to Identitas Advertising
            </span>
          </h1>
        </header>
      </div>

      {/* About Section */}
      <div className="bg-customMaroon py-20 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={AboutImage}
                alt="About Us"
                className="w-full md:w-72 rounded-full object-cover shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-bold text-customBrown mb-4 font-dancing">
                About Us
              </h2>
              <p className="text-base md:text-lg text-customBrown leading-relaxed">
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
