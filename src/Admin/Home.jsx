import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Home = () => {
  const [productCount, setProductCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    // Mengambil jumlah produk
    const unsubscribeProducts = onSnapshot(collection(db, "products"), (snapshot) => {
      setProductCount(snapshot.size); // Mengatur jumlah produk berdasarkan dokumen
    });

    // Mengambil jumlah ulasan
    const unsubscribeReviews = onSnapshot(collection(db, "reviews"), (snapshot) => {
      setReviewCount(snapshot.size); // Mengatur jumlah ulasan berdasarkan dokumen
    });

    // Membersihkan listener saat komponen di-unmount
    return () => {
      unsubscribeProducts();
      unsubscribeReviews();
    };
  }, []);

  return (
    <div className="text-center space-y-4 sm:space-y-12 p-4 md:mr-60">
      {/* Kotak Selamat Datang */}
      <div className="bg-customMaroon text-customBeigeMuda py-4 sm:py-6 px-4 sm:px-6 rounded-lg">
        <h1 className="text-base sm:text-lg md:text-xl font-semibold">
          Selamat Datang di Halaman Admin
        </h1>
        <h2 className="text-sm sm:text-base md:text-lg font-medium">
          Identitas Advertising
        </h2>
      </div>

      {/* Kotak Jumlah Produk dan Ulasan */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {/* Kotak Jumlah Produk */}
        <div className="bg-customMaroon text-customBeigeMuda py-4 sm:py-6 px-4 sm:px-6 rounded-lg flex flex-col items-center">
          <span className="text-sm sm:text-base md:text-lg mb-2">
            Jumlah Produk
          </span>
          <div className="flex items-center mt-2 sm:mt-4">
            <i className="ri-shopping-bag-4-line text-xl sm:text-2xl md:text-3xl mr-2 sm:mr-4"></i>
            <span className="text-lg sm:text-xl md:text-2xl font-bold">
              {productCount}
            </span>
          </div>
        </div>

        {/* Kotak Ulasan */}
        <div className="bg-customMaroon text-customBeigeMuda py-4 sm:py-6 px-4 sm:px-6 rounded-lg flex flex-col items-center">
          <span className="text-sm sm:text-base md:text-lg mb-2">
            Jumlah Ulasan
          </span>
          <div className="flex items-center mt-2 sm:mt-4">
            <i className="ri-survey-line text-xl sm:text-2xl md:text-3xl mr-2 sm:mr-4"></i>
            <span className="text-lg sm:text-xl md:text-2xl font-bold">
              {reviewCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
