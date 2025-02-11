import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      try {
        await deleteDoc(doc(db, "products", id));
        alert("Produk berhasil dihapus.");
      } catch (error) {
        console.error("Error deleting product:", error.message);
        alert(`Gagal menghapus produk: ${error.message}`);
      }
    }
  };

  const handleEdit = (product) => {
    navigate("/admin/addproduct", { state: { product } });
  };

  return (
    <div className="dashboard">
      <div className="mx-auto max-w-7xl p-8 sm:p-6 md:p-8 md:mr-56 bg-customMaroon text-white rounded-lg">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Produk</h1>
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
            onClick={() => navigate("/admin/addproduct")}
          >
            + Tambahkan Produk
          </button>
        </div>

        {/* Produk */}
        {products.length === 0 ? (
          <p className="text-center text-gray-300">Tidak ada produk yang tersedia.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white text-black rounded-md shadow-lg overflow-hidden flex flex-col"
              >
                {/* Gambar */}
                <div className="w-full h-48 bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Informasi Produk */}
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="font-semibold text-lg mb-2 truncate">{product.name}</h2>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-400 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-400 transition"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
