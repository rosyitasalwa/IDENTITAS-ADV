import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    });

    return () => unsubscribe();
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Tentukan produk yang ditampilkan
  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <section id="product" className="bg-customBeigeMuda py-10">
      <div className="px-6 md:px-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-customMochaBrown mb-10">
          Produk Kami
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-customMaroon shadow-lg rounded-lg max-w-[350px] mx-auto"
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-white mt-4 mb-2">
                {product.name}
              </h3>
              <p className="text-white text-sm md:text-base leading-relaxed">
                {product.description}
              </p>
              <p className="text-lg font-semibold text-center text-white mt-2">
                {product.price ? `Harga Mulai Dari Rp ${product.price.toLocaleString()}` : "Harga Tidak Tersedia"}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={toggleShowAll}
            className="px-6 py-3 bg-customMaroon text-white font-semibold rounded-lg hover:bg-opacity-80"
          >
            {showAll ? "Tampilkan Lebih Sedikit" : "Tampilkan Lebih Banyak"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
