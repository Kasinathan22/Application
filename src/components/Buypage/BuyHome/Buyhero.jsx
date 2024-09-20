"use client";
import React from 'react';
import Link from 'next/link';


const Buyhero = () => {
  return (
    <div className="pt-10">
      <div className="grid grid-cols-3 gap-10 md:grid-cols-3 lg:grid-cols-6 px-2 md:lg:px-32 ">
        
        {/* First Product */}

        <div className="text-center rounded-3xl ">
        <Link href="/Buypage/Buyphone">
    <img src="/image/Buyphone/phone.png" alt="Phone" className="rounded-3xl border-4 border-black hover:border-gre " />
    <h1 className="md:lg:-ml-14 pt-2 hover:text-gre">Phone</h1>
 
  </Link>
        </div>

        {/* Second Product */}
        <div className="text-center rounded-3xl">
          <img src="/image/Buyphone/laptop.png" alt="Laptop" className="rounded-3xl border-4 border-black hover:border-gre" />
          <h1 className="-ml-14 pt-2">Laptop</h1>
        </div>

        {/* Third Product */}
        <div className="text-center rounded-3xl">
          <img src="/image/Buyphone/camere.png" alt="Camera" className="rounded-3xl border-4 border-black hover:border-gre" />
          <h1 className="-ml-14 pt-2">Camera</h1>
        </div>

        {/* Fourth Product */}
        <div className="text-center rounded-3xl">
          <img src="/image/Buyphone/tab.png" alt="Tab" className="rounded-3xl border-4 border-black hover:border-gre" />
          <h1 className="-ml-14 pt-2">Tab</h1>
        </div>

        {/* Fifth Product */}
        <div className="text-center rounded-3xl">
          <img src="/image/Buyphone/tv.png" alt="Tv" className="rounded-3xl border-4 border-black hover:border-gre" />
          <h1 className="-ml-14 pt-2">Tv</h1>
        </div>

        {/* Sixth Product */}
        <div className="text-center rounded-3xl">
          <img src="/image/Buyphone/sw.png" alt="SmartWatch" className="rounded-3xl border-4 border-black hover:border-gre" />
          <h1 className="-ml-14 pt-2">SmartWatch</h1>
        </div>
        
      </div>
    </div>
  );
}

export default Buyhero;
