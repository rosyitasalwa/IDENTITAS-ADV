import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const AddProduct = () => {
  const location = useLocation();
  const productToEdit = location.state?.product || null;

  const [productData, setProductData] = useState(
    productToEdit || { name: "", description: "", image: "" }
  );
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductData({ ...productData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    if (!productData.name || !productData.description || !productData.image) {
      alert("Semua field wajib diisi!");
      return;
    }

    try {
      if (productToEdit) {
        const productRef = doc(db, "products", productToEdit.id);
        await updateDoc(productRef, productData);
        alert("Produk berhasil diperbarui!");
      } else {
        await addDoc(collection(db, "products"), productData);
        alert("Produk berhasil ditambahkan!");
      }
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error saving product: ", error);
      alert(`Gagal menyimpan produk: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl bg-customMaroon p-6 rounded-lg shadow-md">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center text-customTaupe">
          {productToEdit ? "Edit Produk" : "Tambah Produk Baru"}
        </h1>
        <form onSubmit={handleSaveChanges} className="space-y-4">
          <div>
            <label className="block text-sm text-customTaupe font-medium mb-1">Nama Produk</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md text-sm sm:text-base border-gray-300 bg-customBeigeMuda"
              placeholder="Masukkan nama produk"
            />
          </div>
          <div>
            <label className="block text-sm text-customTaupe font-medium mb-1">Deskripsi</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md text-sm sm:text-base h-28 border-gray-300 bg-customBeigeMuda"
              placeholder="Masukkan deskripsi produk"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm text-customTaupe font-medium mb-1">Unggah Gambar</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-customTaupe"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-customBeigeMuda text-customMaroon py-2 px-4 rounded text-sm sm:text-base hover:bg-customTaupe transition"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
