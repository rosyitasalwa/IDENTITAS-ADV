import React from 'react'

const Dashboard = () => {
  return (
    <div className="p-8">
    <div className="bg-[#4b0000] p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-white text-2xl font-bold">PRODUK</h1>
            <button className="bg-[#d3d3b8] text-[#4b0000] px-4 py-2 rounded flex items-center">
                <i className="fas fa-plus mr-2"></i> Tambahkan Produk
            </button>
        </div>
        <div className="grid grid-cols-12 gap-4 text-white mb-4">
            <div className="col-span-3">Gambar Produk</div>
            <div className="col-span-3">Nama Produk</div>
            <div className="col-span-4">Deskripsi Produk</div>
            <div className="col-span-2"></div>
        </div>
        {products.map((product, index) => (
            <div key={index} className="grid grid-cols-12 gap-4 items-center mb-4">
                <div className="col-span-3">
                    <img src={product.image} alt={`Image of ${product.name}`} className="w-16 h-16 object-cover rounded" />
                </div>
                <div className="col-span-3">{product.name}</div>
                <div className="col-span-4">{product.description}</div>
                <div className="col-span-2 flex space-x-2">
                    <button className="bg-[#d3d3b8] text-[#4b0000] px-4 py-2 rounded">Edit</button>
                    <button className="bg-[#d3d3b8] text-[#4b0000] px-4 py-2 rounded">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        ))}
        <div className="text-white flex items-center">
            <i className="fas fa-chevron-down mr-2"></i> 4 Lainnya
        </div>
    </div>
</div>
);
}

export default Dashboard