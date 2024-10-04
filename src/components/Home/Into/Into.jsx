"use client"
import React from 'react';
// import P from "../../../../public/image/SalesPhone/i.png"
// import M from "../../../../public/image/SalesPhone/m.png"
// import W from "../../../../public/image/SalesPhone/w.png"
// import T from "../../../../public/image/SalesPhone/tv.png"
// import S from "../../../../public/image/SalesPhone/s.png"
// import H from "../../../../public/image/SalesPhone/h.png"


function Into() {
  // Sample JSON data for the products
  const products = [
    
    { id: 1, name: "Washing Machine", image: "/image/SalesPhone/w.png"},
    { id: 2, name: "AC", image: "/image/SalesPhone/ac.png" },
    { id: 3, name: "MicroWave", image: "/image/SalesPhone/mic.png" },
    { id: 4, name: "Refrigerator", image: "/image/SalesPhone/Re.png"},
    { id: 5, name: "Moblie", image: "/image/SalesPhone/m.png" },
    { id: 6, name: "Laptop", image: "/image/SalesPhone/i.png"},
    { id: 7, name: "Tv", image: "image/SalesPhone/tv.png" },
    { id: 8, name: "Speaker", image: "image/SalesPhone/s.png" },


  ];

  return (
    <div className="w-auto h-auto pt-5 md:lg:pt-10 pb-5 md:lg:pb-10">
          <div className="container  mx-auto  py-10 md:lg:pb-10 md:lg:pt-0 px-5 md:lg:px-10 ">
        <div className=' rounded-3xl py-10'>
      {/* Title */}
      <h1 className="text-center text-3xl font-bold text-black mb-8 py-5">Categories</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:lg:gap-0 justify-center items-center px-10">
        {/* Map through JSON data */}
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center ">
            <img src={product.image} alt={product.name} className=" w-36 rounded-full bg-g transition-transform duration-300 ease-in-out transform hover:scale-110" />
            <h1 className="text-base mt-4 text-black pb-5">{product.name}</h1>
          </div>
        ))}
      </div>

      </div>
    
      </div>
    </div>
  );
}

export default Into;
