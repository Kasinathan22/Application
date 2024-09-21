import React from 'react'

function Bcard() {
  return (
    <div className=' bg-gray-300 flex justify-center items-center py-12'>
    <div className="flex flex-col md:flex-row w-[1000px] items-center justify-between text-black p-4 bg-white rounded-lg">
    {/* First Part - Image */}
  

    {/* Second Part - Text */}
    <div className="md:w-52 text-center p-4 pt-12 ">
     <button className="mt-2 text-white py-3 text-2xl px-5 bg-black font-bold rounded">Buy</button>
      <p className="mt-4"></p>
    </div>
    <div className="flex-shrink-0 md:w-72">
      <img src="/image/tv.png" alt="Your Description" className="w-full h-auto rounded-lg" />
    </div>

    {/* Third Part - Benefits */}
    <div className="md:w-1/2  p-4 text-center">
    <h3 className="font-semibold text-center ">FURNIWUD Liyo Engineered Wood TV Entertainment Unit Floor Stand TV Unit TV Console Table  50 inch</h3>
    <p className='text-red-500 justify-center text-center pt-5'>-57% <span className='text-black'>$4,274</span> </p>
    {/* <div className='grid grid-cols-6 text-xs md:lg:text-sm justify-center items-center text-center pt-7'>
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
</div> */}

   
  
    </div>
  </div>
  </div>
  )
}

export default Bcard