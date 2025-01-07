import React, { useState } from 'react';
import Product11 from '../assets/product11.jpeg';
import Product12 from '../assets/product12.jpeg';
import Product13 from '../assets/product13.jpeg';
import Product14 from '../assets/product14.jpeg';
import Product15 from '../assets/product15.jpeg';
import Product16 from '../assets/product16.jpeg';
import Product17 from '../assets/product17.jpeg';
import Product18 from '../assets/product18.jpeg';
import Product19 from '../assets/product19.jpeg';

const Product = () => {
    const [showAll, setShowAll] = useState(false);

  return (
    <section id='product' className=''>
        <div className="product px-10 pt-32">
            <h1 className="text-3xl font-bold text-center text-customMochaBrown mb-6">Our Product</h1>

            <div className="box grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="box p-4 bg-customMochaBrown shadow rounded-lg" style={{width:'380px', height:'480px', margin:'auto'}}>
                    <div className="w-full h-2/3 p-2 flex items-center justify-center">
                    <img src={Product11} alt="Product Image" className="h-full w-full object-cover rounded-lg"/>
                    </div>
                    <h3 className="text-xl font-bold text-center text-white mt-6 mb-2">Set Peralatan Makan</h3>
                    <p className="text-white text-base/loose">Set peralatan makan terbuat dari <span className="italic">stainless steel</span> berkualitas tinggi, desain minimalis dan elegan</p>
                </div>
                <div className="box p-4 bg-customMochaBrown shadow rounded-lg" style={{width:'380px', height:'480px', margin:'auto'}}>
                    <div className="w-full h-2/3 p-2 flex items-center justify-center">
                    <img src={Product12} alt="Product Image" className="h-full w-full object-cover rounded-lg"/>
                    </div>
                    <h3 className="text-xl font-bold text-center text-white mt-6 mb-2">Kipas <span className="italic">Handmade</span></h3>
                    <p className="text-white text-base/loose">Kipas <span className="italic">Handmade</span> berbahan dasar kayu yang kokoh dan tahan lama. <span className="italic">Free</span> ukuran, desain, dan kemasan</p>
                </div>
                <div className="box p-4 bg-customMochaBrown shadow rounded-lg" style={{width:'380px', height:'480px', margin:'auto'}}>
                    <div className="w-full h-2/3 p-2 flex items-center justify-center">
                    <img src={Product13} alt="Product Image" className="h-full w-full object-cover rounded-lg"/>
                    </div>
                    <h3 className="text-xl font-bold text-center text-white mt-6 mb-2">Undangan Kustom</h3>
                    <p className="text-white text-base/loose">Undangan berbahan dasar Kertas Concorde berukuran 16x12cm, <span className="italic">free</span> kustom dan desain serta free packaging.</p>
                </div>
                {showAll && (
                    <>
                <div className="box p-4 bg-customMochaBrown shadow rounded-lg" style={{width:'380px', height:'480px', margin:'auto'}}>
                    <div className="w-full h-2/3 p-2 flex items-center justify-center">
                    <img src={Product14} alt="Product Image" className="h-full w-full object-cover rounded-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-center text-white mt-6 mb-2">Set Peralatan Dapur</h3>
                    <p className="text-white text-base/loose">Set peralatan dapur terbuat dari bahan kayu yang kokoh, <span className="italic">free</span>kustom desain</p>
                </div>
                <div className="box p-4 bg-customMochaBrown shadow rounded-lg" style={{width:'380px', height:'480px', margin:'auto'}}>
                    <div className="w-full h-2/3 p-2 flex items-center justify-center">
                    <img src={Product15} alt="Product Image" className="h-full w-full object-cover rounded-lg"/>
                    </div>
                    <h3 className="text-xl font-bold text-center text-white mt-6 mb-2">Botol Minum Kustom</h3>
                    <p className="text-white text-base/loose">Botol minum custom dengan bahan kaca berkualitas tinggi, kami bisa mencetak desain yang minimalis dan elegan.</p>
                </div>
                <div className="box p-4 bg-customMochaBrown shadow rounded-lg" style={{width:'380px', height:'480px', margin:'auto'}}>
                    <div className="w-full h-2/3 p-2 flex items-center justify-center">
                    <img src={Product16} alt="Product Image" className="h-full w-full object-cover rounded-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-center text-white mt-6 mb-2">Payung Lipat</h3>
                    <p className="text-white text-base/loose">Payung lipat terbuat dari bahan parasut berkualitas tinggi yang tahan air dan angin. Free custom dan desain. </p>
                </div>
                <div className="box p-4 bg-customMochaBrown shadow rounded-lg" style={{width:'380px', height:'480px', margin:'auto'}}>
                    <div className="w-full h-2/3 p-2 flex items-center justify-center">
                    <img src={Product17} alt="Product Image" className="h-full w-full object-cover rounded-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-center text-white mt-6 mb-2">Dompet</h3>
                    <p className="text-white text-base/loose">Dompet berbahan dasar canvas berukuran 16x12cm free custom dan desain serta free packaging.</p>
                </div>
                <div className="box p-4 bg-customMochaBrown shadow rounded-lg" style={{width:'380px', height:'480px', margin:'auto'}}>
                    <div className="w-full h-2/3 p-2 flex items-center justify-center">
                    <img src={Product18} alt="Product Image" className="h-full w-full object-cover rounded-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-center text-white mt-6 mb-2"><span className="italic">Pouch</span></h3>
                    <p className="text-white text-base/loose">Pouch multifungsi berbahan kulit sintetis berkualitas, lembut, dan tahan lama. Desainnya yang minimalis</p>
                </div>
                <div className="box p-4 bg-customMochaBrown shadow rounded-lg" style={{width:'380px', height:'480px', margin:'auto'}}>
                    <div className="w-full h-2/3 p-2 flex items-center justify-center">
                    <img src={Product19} alt="Product Image" className="h-full w-full object-cover rounded-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-center text-white mt-6 mb-2">Gelas Kustom</h3>
                    <p className="text-white text-base/loose">Gelas berbahan dasar kaca berukuran diameter 7 cm free custom dan desain serta free packaging.</p>
                </div>
                </>
                )}
            </div>
                <div className="text-center mt-6 pb-6">
                    {!showAll ? (
                    <button className="px-4 py-2 bg-yellow-900 text-white font-semibold rounded shadow  hover:bg-yellow-800" onClick={() => setShowAll (true)}>
                        Lihat Lebih Banyak
                    </button>
                    ) : (
                        <button className="px-4 py-2 bg-yellow-900 text-white font-semibold rounded shadow  hover:bg-yellow-800" onClick={() => setShowAll (false)}>
                            Lihat lebih Sedikit
                        </button>
                         )}
                </div>
        </div>
    </section>
  )
}

export default Product