import React from 'react';
import Footer from '../components/Footer'; // Impor Footer

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Tambahkan flex dan min-h-screen */}
      <section id='contact' className="flex flex-col md:flex-row bg-white text-customMochaBrown p-4 md:p-8 space-y-4 md:space-y-32 md:space-x-10 flex-1"> {/* flex-1 untuk mengisi ruang */}
        <div className="flex-1 mt-36">
          <h1 className="text-3xl font-bold text-customMochaBrown text-center mb-4">Contact Us</h1>
          <p className="text-lg text-customMochaBrown text-center mb-5">Feel free to contact us any time.</p>
          <div className="md:w-1/2 xl:w-full rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.019996737584!2d110.46063807482336!3d-7.0069279929944335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708cfa66c4a57d%3A0x96137131ede3ab67!2sIdentitas%20Adv!5e0!3m2!1sid!2sid!4v1734066038130!5m2!1sid!2sid" 
              frameBorder="0" 
              width="1000" 
              height="450" 
              allowFullScreen 
              loading="lazy"
            >
            </iframe>
          </div>
        </div>
        
        <div className="flex-1 bg-customMochaBrown p-6 rounded-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center text-white mt-8">Review</h2>
          <form className="space-y-4 mt-10">
            <div>
              <label className="block text-white">Email</label>
              <input type="email" className="w-full border-b-2 border-white focus:outline-none bg-transparent text-white mt-2"/>
            </div>
            <form className="space-y4 mt-4">
            <div>
              <label className="block text-white">Nama</label>
              <input type="text" className="w-full border-b-2 border-white focus:outline-none bg-transparent text-white mt-2"/>
            </div>
            <form className="space-y4 mt-4">
            <div>
              <label className="block text-white">Ulasan</label>
              <textarea className="w-full border-b-2 border-white focus:outline-none bg-transparent text-white mt-2"></textarea>
            </div>
            <form className="space-y4 mt-10">
            <button type="submit" className="bg-white text-customMochaBrown py-3 px-8 rounded-full w-full">Kirim</button>
          </form>
          </form>
          </form>
          </form>
        </div>
      </section>
      
      <Footer /> {/* Footer ditambahkan di sini */}
    </div>
  );
};

export default Contact;