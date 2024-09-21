"use client";
import React from 'react';




// MembershipPage Component
function Wcard() {
    return (
        <div className=' bg-white flex justify-center items-center pt-12'>
        <div className="flex flex-col md:flex-row w-[1200px] items-center justify-between p-4 bg-r rounded-lg">
        {/* First Part - Image */}
        <div className="flex-shrink-0 md:w-1/6">
          <img src="/image/Wholesale/ca.svg" alt="Your Description" className="w-full h-auto rounded-lg" />
        </div>
  
        {/* Second Part - Text */}
        <div className="md:w-1/3 text-center p-4 pt-12 text-white">
          <p className="font-semibold ">Already a LOTS Member?</p>
          <p className='pt-5'>Activate your Account with your Registered LOTS Membership now</p>
          <button className="mt-2 bg-white text-red-700 py-2 px-2 font-bold rounded">GENERATE PASSWORD</button>
          <p className="mt-4">New to LOTS? Become a Member</p>
        </div>
  
        {/* Third Part - Benefits */}
        <div className="md:w-1/2 text-left p-4 text-white">
        <h3 className="font-semibold text-center ">Shopping Benefits</h3>
        <div className='grid grid-cols-6 text-xs md:lg:text-sm justify-center items-center text-center pt-7'>
  <div className='flex flex-col items-center '>
    <img src="/image/Wholesale/card/ps.svg" alt="Your Description" className="w-10 h-auto" />
    <h1>Easy Product Search</h1>
  </div>
  <div className='flex flex-col items-center'>
    <img src="/image/Wholesale/card/pric.svg" alt="Your Description" className="w-10 h-auto" />
    <h1>Slab Pricing Display</h1>
  </div>
  <div className='flex flex-col items-center'>
    <img src="/image/Wholesale/card/cash.svg" alt="Your Description" className="w-10 h-auto" />
    <h1>Exciting Deals & Offers</h1>
  </div>
  <div className='flex flex-col items-center'>
    <img src="/image/Wholesale/card/deals.svg" alt="Your Description" className="w-10 h-auto" />
    <h1>Cash on Delivery</h1>
  </div>
  <div className='flex flex-col items-center'>
    <img src="/image/Wholesale/card/live.svg" alt="Your Description" className="w-10 h-auto" />
    <h1>Delivery within 48 Hours</h1>
  </div>
  <div className='flex flex-col items-center -mt-5'>
    <img src="/image/Wholesale/card/ot.svg" alt="Your Description" className="w-10 h-auto" />
    <h1>Real-Time</h1>
  </div>
</div>

       
      
        </div>
      </div>
      </div>
    );
}

export default Wcard;
