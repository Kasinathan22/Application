"use client"
import React from 'react'
import mp from '../../../../public/image/Sellerpage/mp.svg'
import i from '../../../../public/image/Repair/Home/as.png'

function Sellhero() {

    return (
//       <div className='w-auto h-auto '>
//       <section className="container mx-auto py-14 ">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center w-full">
//           {/* Left Side: Text Content */}
//           <div className="space-y-6   py-10 px-10">
//             <h1 className="text-2xl md:lg:text-4xl font-bold">Get Instant Cash
//             <br /> Sell your Product</h1>
          
//             <ul className="text-sm flex gap-4">
//   <li><span className="">Highest Value</span></li>
//   <li><span className="">100% Safe & Hassle-free</span></li>
//   <li><span className="">Free Doorstep Pickup</span></li>
// </ul>
// <select
//   className="w-9/12 p-3 border rounded-xl focus:outline-none text-black"
// >
//   <option value="">Search your product</option>
//   <option value="washing-machine">Washing Machine</option>
//   <option value="ac">AC</option>
//   <option value="microwave">Microwave</option>
// </select>



//             <p className="text-lg">Search your product to sell </p>
//           </div>
  
//           {/* Right Side: Image */}
//           <div className="flex justify-center md:justify-end">
//             <img 
//               src={mp.src}
//               alt="Mobile Phone" 
//               className="rounded-lg"
             
//               height={400} 
//             />
//           </div>
//         </div>
//       </section>
//       </div>
<div className='w-auto h-auto'>
<div className="container  mx-auto  py-10 md:lg:pb-10 md:lg:pt-0 px-5 md:lg:px-10 ">
<div className="bg-black opacity-75 h-auto rounded-2xl flex flex-col py-32">


  <div className="text-center">
    <h1 className="text-white mt-0 text-xl md:text-8xl barlow-bold">Best deals</h1> {/* Added mt-4 for top margin */}
    <h1 className="text-white mt-4 text-2xl md:text-5xl barlow-bold">on Refurbished Gadgets</h1> {/* Added mt-2 for top margin */}
    <h1 className="text-white mt-4 text-3xl">Up to 60% less than brand new.</h1> {/* Added mt-2 for top margin */}

    <select className="w-60 p-3 border bg-black rounded-xl focus:outline-none text-white mt-4 ">
     
      <option className='bg-transparent' value="">Search your product</option>
      <option value="washing-machine">Washing Machine</option>
      <option value="ac">AC</option>
      <option value="microwave">Microwave</option>
    </select>
  </div>

 

 


</div>





  </div>
  </div>
  )
}

export default Sellhero