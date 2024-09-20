"use client"
import React from 'react'
import mp from '../../../../public/image/Sellerpage/mp.svg'

function Sellhero() {

    return (
      <div className='w-auto h-auto '>
          <div className='pt-24 md:lg:pt-5  '>
        <div className='h-16 w-full bg-teal-100 flex '>
          <h1 className='text-black pl-10 pt-5  text-lg md:text-xl lg:text-2xl'>
          Sell Old Product  in World

          </h1>
        </div>
      </div>
      <section className="container mx-auto py-14 bg-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center w-full">
          {/* Left Side: Text Content */}
          <div className="space-y-6   py-10 px-10">
            <h1 className="text-2xl md:lg:text-4xl font-bold">Get Instant Cash
            <br /> Sell your Product</h1>
          
            <ul className="text-sm flex gap-4">
  <li><span className="">Highest Value</span></li>
  <li><span className="">100% Safe & Hassle-free</span></li>
  <li><span className="">Free Doorstep Pickup</span></li>
</ul>
            <input 
              type="text" 
              placeholder="Search your product" 
              className="w-9/12 p-3 border rounded-xl focus:outline-none"
            />
            <p className="text-lg">Search your product to sell </p>
          </div>
  
          {/* Right Side: Image */}
          <div className="flex justify-center md:justify-end">
            <img 
              src={mp.src}
              alt="Mobile Phone" 
              className="rounded-lg"
             
              height={400} 
            />
          </div>
        </div>
      </section>
      </div>
  )
}

export default Sellhero