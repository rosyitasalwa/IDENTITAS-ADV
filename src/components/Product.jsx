import React, { useState } from "react";
import Product11 from "../assets/product11.jpeg";
import Product12 from "../assets/product12.jpeg";
import Product13 from "../assets/product13.jpeg";
import Product14 from "../assets/product14.jpeg";
import Product15 from "../assets/product15.jpeg";
import Product16 from "../assets/product16.jpeg";
import Product17 from "../assets/product17.jpeg";
import Product18 from "../assets/product18.jpeg";
import Product19 from "../assets/product19.jpeg";

const Product = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="product" className="bg-customBeigeMuda py-10">
      <div className="px-6 md:px-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-customMochaBrown mb-10">
          Our Product
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-4 bg-customMaroon shadow-lg rounded-lg transition-transform transform hover:scale-105 active:scale-95 max-w-[350px] mx-auto">
            <div className="w-full h-2/3 p-2 flex items-center justify-center">
              <img
                src={Product11}
                alt="Product Image"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-center text-white mt-4 mb-2">
              Set Peralatan Makan
            </h3>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Set peralatan makan terbuat dari <span className="italic">stainless steel</span> berkualitas tinggi, desain minimalis dan elegan.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-4 bg-customMaroon shadow-lg rounded-lg transition-transform transform hover:scale-105 active:scale-95 max-w-[350px] mx-auto">
            <div className="w-full h-2/3 p-2 flex items-center justify-center">
              <img
                src={Product12}
                alt="Product Image"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-center text-white mt-4 mb-2">
              Kipas <span className="italic">Handmade</span>
            </h3>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Kipas <span className="italic">Handmade</span> berbahan dasar kayu yang kokoh dan tahan lama.{" "}
              <span className="italic">Free</span> ukuran, desain, dan kemasan.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-4 bg-customMaroon shadow-lg rounded-lg transition-transform transform hover:scale-105 active:scale-95 max-w-[350px] mx-auto">
            <div className="w-full h-2/3 p-2 flex items-center justify-center">
              <img
                src={Product13}
                alt="Product Image"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-center text-white mt-4 mb-2">
              Undangan Kustom
            </h3>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Undangan berbahan dasar Kertas Concorde berukuran 16x12cm,{" "}
              <span className="italic">free</span> kustom dan desain serta free packaging.
            </p>
          </div>

          {/* Additional Products */}
          {showAll && (
            <>
              {/* Repeat similar structure for other cards */}
              <div className="p-4 bg-customMaroon shadow-lg rounded-lg transition-transform transform hover:scale-105 active:scale-95 max-w-[350px] mx-auto">
                <div className="w-full h-2/3 p-2 flex items-center justify-center">
                  <img
                    src={Product14}
                    alt="Product Image"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-center text-white mt-4 mb-2">
                  Set Peralatan Dapur
                </h3>
                <p className="text-white text-sm md:text-base leading-relaxed">
                  Set peralatan dapur terbuat dari bahan kayu yang kokoh,{" "}
                  <span className="italic">free</span> kustom desain.
                </p>
              </div>
              {/* Add similar cards for Product15, Product16, etc. */}
            </>
          )}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center mt-6">
          {!showAll ? (
            <button
              className="px-6 py-2 bg-customMaroon text-white font-semibold rounded shadow hover:bg-orange-900 transition-all"
              onClick={() => setShowAll(true)}
            >
              Lihat Lebih Banyak
            </button>
          ) : (
            <button
              className="px-6 py-2 bg-customMaroon text-white font-semibold rounded shadow hover:bg-orange-900 transition-all"
              onClick={() => setShowAll(false)}
            >
              Lihat Lebih Sedikit
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
