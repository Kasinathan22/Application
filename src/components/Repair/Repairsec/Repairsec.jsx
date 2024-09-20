"use client"
import React from 'react'
import Link from 'next/link';
import rs from '../../../../public/image/Repair/rsec.svg';

function Repairsec() {
  return (
   
    <div className="flex flex-col md:flex-row items-center justify-between p-6 pt-20 ">
      {/* Left Side: Image */}
      <div className="flex-shrink-0 w-full md:lg:w-1/2">
        <img src={rs.src} alt="Description" className="w-full h-auto rounded-lg" />
      </div>
      
      {/* Right Side: Text */}
      <div className="w-full md:lg:w-1/2 pl-10 pt-10 ">
        <h2 className="text-2xl md:lg:text-4xl font-bold ">Clean Workmanship</h2>
        <p className="lg:text-lg pt-10 font-bold">
        There is a reason why we call our experts display doctors, let our work speak for us! </p>
       
        <ul className="list-disc pl-4 pt-3 font-bold pb-5">
  <li>Certified Technicians</li>
  <li>Background Verified</li>
  <li>COVID Safety Measures Followed</li>
</ul>


<Link href="/#" className="text-black pl-0 text-lg font-bold pb-2 group relative hover:text-gre">
          order now 
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </Link>
     
        
      </div>
    </div>

  )
}

export default Repairsec