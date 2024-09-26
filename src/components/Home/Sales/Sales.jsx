"use client"
import React from "react";
import Image from 'next/image'
import pp from '../../../../public/image/ppost.svg'
import s from '../../../../public/image/Home/s/F.png'
import se from '../../../../public/image/Home/s/S.png'

  const components = [
    {
      imageSrc: "/image/Home/four/b.jpg", // Update with your image path
      title: "Component 1",
      description: "Buy a product and sell a product",
    },
    {
      imageSrc: "/image/Home/four/r.jpg", // Update with your image path
      title: "Component 2",
      description: "Repair and Service",
    },
    {
      imageSrc: "/image/Home/four/w.jpg", // Update with your image path
      title: "Component 3",
      description: "Wholesale Dealer",
    },
    {
      imageSrc: "/image/Home/four/h.jpg", // Update with your image path
      title: "Component 4",
      description: "Rental and sell your product",
    },
  ];
  

const Sales = () => {
  return (
    <div className='w-auto h-auto '>
  
    <div className="container  mx-auto  py-10 md:lg:pb-10 md:lg:pt-0 px-10 ">
     
    <div className="bg-black opacity-75 h-screen rounded-3xl">
  <div className="grid grid-cols-2 h-full">
    {/* Centered Heading and Paragraph */}
    <div className="flex flex-col  items-start text-start pl-20">
      <h1 className="barlow-extrabold text-5xl pt-44">Find Your Perfect Device</h1>
      <p className="barlow-thin w-96 pt-5 pb-10">
        Search for the latest mobiles, laptops, and electronics to discover amazing deals tailored just for you!
      </p>

      <form className="flex overflow-hidden border border-g rounded-xl md:lg:rounded-2xl">

          <input type="text" className="w-20 md:lg:w-72 px-1 md:lg:px-6 text-xs bg-cg focus:outline-none text-white" placeholder="Search for laptops, electronics..." />

          <button type="submit" className="px-0 md:lg:px-2 py-1 md:lg:py-2 bg-slate-500 text-white hover:bg-blue-700 text-xs md:lg:text-lg">Search</button>

         </form>
    </div>

    {/* Image Section */}
    <div className="flex pt-12 ml-32">
  <div>
    <img src={s.src} className="w-40" />
  </div>
  <div>
    <img src={se.src} className="w-40" />
  </div>
</div>





  </div>
 


</div>

    </div>
  </div>
  )
}

export default Sales
