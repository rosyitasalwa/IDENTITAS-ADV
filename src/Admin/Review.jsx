import React from 'react'

const Review = () => {
  return (
    <div className="p-6 max-w-2xl w-full">
                    <h1 className="text-2xl font-bold text-[#5a2d0c] mb-4">REVIEW</h1>
                    <div className="space-y-4">
                        <div className="border-2 border-[#5a2d0c] p-4 bg-white">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="font-bold">Killa Cantika</h2>
                                    <p className="text-sm text-gray-500">killacantika@gmail.com</p>
                                </div>
                                <p className="text-sm text-gray-500">2 jam yang lalu</p>
                            </div>
                            <p className="mt-2">Produk-produknya sangat bagus, dan penjualnya ramah. Respon dari penjualnya juga sangat cepat, produknya sesuai dengan yang digambar</p>
                        </div>
                        <div className="border-2 border-[#5a2d0c] p-4 bg-white">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="font-bold">Kiara Kayla</h2>
                                    <p className="text-sm text-gray-500">kiarakayla@gmail.com</p>
                                </div>
                                <p className="text-sm text-gray-500">2 Desember</p>
                            </div>
                            <p className="mt-2">Barangnya sesuai dengan gambar, harga terjangkau tapi kualitas yang diberikan sangat bagus</p>
                        </div>
                        <div className="border-2 border-[#5a2d0c] p-4 bg-white">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="font-bold">Andhika Putra</h2>
                                    <p className="text-sm text-gray-500">andhikaputra@gmail.com</p>
                                </div>
                                <p className="text-sm text-gray-500">19 November</p>
                            </div>
                            <p className="mt-2">Puas banget order disini, pelayanannya ramah</p>
                        </div>
                    </div>
                </div>
            );
        };

export default Review