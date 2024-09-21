"use client";

import React from "react";
import Link from 'next/link';

function Rhero() {
    return (
        <div className="bg-white  flex flex-col items-center pt-20"> {/* Add padding to the top */}
            {/* Heading */}
            <h1 className="text-2xl md:lg:text-4xl font-light text-center mb-14 text-black">
                Welcome back! Let&apos;s continue your search
            </h1>

            <ul className="flex space-x-6 mb-8 md:lg:mb-6 font-bold px-3 md:lg:px-0 text-xs md:lg:text-sm"> {/* Add margin to the bottom */}
               
                <li className="relative group ">
                    <Link href="/Rent/Renthero" className="text-black pb-2 relative hover:text-green-500">
                        Buy 
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </Link>
                </li>
                <li className="relative group">
                    <Link href="/wholesale" className="text-black pb-2 relative hover:text-green-500">
                        Rent
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </Link>
                </li>
                <li className="relative group">
                    <Link href="/more" className="text-black pb-2 relative hover:text-green-500">
                        New project
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </Link>
                </li>
                <li className="relative group">
                    <Link href="/more" className="text-black pb-2 relative hover:text-green-500">
                        PG
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </Link>
                </li>
                <li className="relative group">
                    <Link href="/Repair" className="text-black pb-2 relative hover:text-green-500">
                        Commerical
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </Link>
                </li>
                <li className="relative group">
                    <Link href="/Repair" className="text-black pb-2 relative hover:text-green-500">
                        Post you AD
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </Link>
                </li>
            </ul>

            {/* Search Bar */}
          {/* Search Bar */}
<div className="w-80 md:lg:w-full max-w-3xl flex space-x-1 mb-6 rounded-full border-4  border-black">
    {/* Location Dropdown */}
    <select className="w-20 md:lg:w-full rounded-full p-4  focus:outline-none focus:ring-0 text-[10px] md:lg:text-sm">
    <option value="" className="">Location</option>
    <option value="location1">Location 1</option>
    <option value="location2">Location 2</option>
    <option value="location3">Location 3</option>
</select>


    {/* Property Type Dropdown */}
    <select className="w-full p-4 rounded-full focus:outline-none focus:ring-0 text-[10px] md:lg:text-sm ">
        <option value="">Property Type</option>
        <option value="type1">Type 1</option>
        <option value="type2">Type 2</option>
        <option value="type3">Type 3</option>
    </select>

    {/* Budget Dropdown */}
    <select className="w-full p-4 rounded-full focus:outline-none focus:ring-0 text-[10px] md:lg:text-sm">
        <option value="">Budget</option>
        <option value="budget1">Budget 1</option>
        <option value="budget2">Budget 2</option>
        <option value="budget3">Budget 3</option>
    </select>
</div>

        </div>
    );
}

export default Rhero;
