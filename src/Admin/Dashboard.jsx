import React from 'react';
import NavbarAdmin from './NavbarAdmin';

// Data produk yang akan ditampilkan di dashboard
const products = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20081324-avyT400BZfQVVmamKsz29CwAxY2d7S.png",
    name: "Gelas Kustom",
    description: "Gelas berbahan dasar kaca berukuran diameter 7 cm ..."
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20081324-avyT400BZfQVVmamKsz29CwAxY2d7S.png",
    name: "Kartu Undangan", 
    description: "Undangan berbahan dasar Kertas Concorde berukuran 16x12cm, ..."
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20081324-avyT400BZfQVVmamKsz29CwAxY2d7S.png",
    name: "Dompet Kustom",
    description: "Dompet berbahan dasar canvas berukuran 16x12cm free custom ..."
  },
  {
    id: 4,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20081324-avyT400BZfQVVmamKsz29CwAxY2d7S.png", 
    name: "Payung Lipat",
    description: "Payung lipat terbuat dari bahan parasut berkualitas tinggi ..."
  },
  {
    id: 5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20081324-avyT400BZfQVVmamKsz29CwAxY2d7S.png",
    name: "Botol Minum",
    description: "Botol minum custom dengan bahan kaca berkualitas tinggi, ..."
  }
];

function Dashboard() {
  <div className='w-full'>
    <NavbarAdmin />
  </div>
  return (
    <div className="min-h-screen bg-[#e6dfd3]">
      <div className="flex justify-end p-4 gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-300" />
      </div>
      
      <div className="mx-auto max-w-xl p-6 bg-[#4a0c0c] text-white rounded-lg">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">PRODUK</h1>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>Gambar Produk</div>
            <div>Nama Produk</div>
            <div>Deskripsi Produk</div>
          </div>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-md flex items-center gap-2" aria-label="Tambahkan Produk">
            <span>+</span> Tambahkan Produk
          </button>
        </div>

        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="grid grid-cols-[1fr_1fr_2fr_auto] gap-4 items-center">
              <div className="w-20 h-20 bg-white rounded-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>{product.name}</div>
              <div className="text-sm text-gray-300">{product.description}</div>
              <div className="flex gap-2">
                <button className="px-4 py-1 bg-gray-600 rounded-md" aria-label={`Edit ${product.name}`}>Edit</button>
                <button className="px-2 py-1 text-red-500" aria-label={`Hapus ${product.name}`}>🗑️</button>
              </div>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-2 mt-4 text-sm text -gray-300" aria-label="Lihat lebih banyak produk">
          4 Lainnya
        </button>
      </div>
    </div>
  );
}

export default Dashboard;