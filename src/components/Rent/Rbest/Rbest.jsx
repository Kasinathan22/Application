"use client";

import React from "react";
import Link from 'next/link';


function Rbest() {
  return (
    
            <div className="bg-white min-h-screen flex flex-col ">
                {/* Heading */}
                <h1 className="text-3xl text-start mt-10 pl-5 font-bold">
    Because you searched Chennai
    <span className="block h-1 w-20 bg-yellow-500 mt-1"></span>
</h1>


                {/* Box Container */}
                <div className="flex flex-wrap justify-center w-full  mt-10 space-x-4 px-4">
                    <div className="bg-yellow-300 rounded-lg shadow p-4 flex-1 m-2  transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <Link href="/box1" className="block text-black text-lg px-5 font-bold">
                        <span className="text-black text-4xl">20+</span > Properties listed for you</Link>
                        <p className="text-red-600 pt-5 px-5 font-bold">see all </p>
                    </div>
                    <div className="bg-yellow-300 rounded-lg shadow p-4 flex-1 m-2   transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <Link href="/box2" className="text-center  text-lg block text-black font-bold pt-5">
                        Get personaised property recommendations from us</Link>
                        <p className="text-red-600 pt-5 px-5 font-bold">see all </p>
                    </div>
                    <div className="bg-yellow-300 rounded-lg shadow p-4 flex-1 m-2  transition-transform duration-300 ease-in-out transform hover:scale-105 ">
                        <Link href="/box3" className=" block text-black text-lg px-5 font-bold"> <span className="text-black text-3xl">100+</span>owner Properties in chennai</Link>
                        <p className="text-red-600 pt-5 px-5 font-bold">see all </p>
                    </div>
                    <div className="bg-yellow-300 rounded-lg shadow p-4 flex-1 m-2  transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <Link href="/box4" className="text-lg px-5 font-bold text-black block"> <span className="text-black text-3xl">200+</span> Properties in popular localities</Link>
                        <p className="text-red-600 pt-5 px-5 font-bold">see all </p>
                    </div>
                </div>


                <h1 className="text-3xl text-start mt-10 pl-5 font-bold">
    Because you searched Ramapuram
    <span className="block h-1 w-20 bg-yellow-500 mt-1"></span>
</h1>


                {/* Box Container */}
                <div className="flex flex-wrap justify-center w-full  mt-10 space-x-4 px-4">
                    <div className="bg-yellow-300 rounded-lg shadow p-4 flex-1 m-2  transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <Link href="/box1" className="block text-black text-lg px-5 font-bold">
                        <span className="text-black text-4xl">20+</span > Properties listed for you</Link>
                        <p className="text-red-600 pt-5 px-5 font-bold">see all </p>
                    </div>
                    <div className="bg-yellow-300 rounded-lg shadow p-4 flex-1 m-2   transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <Link href="/box2" className="text-center  text-lg block text-black font-bold pt-5">
                        Get personaised property recommendations from us</Link>
                        <p className="text-red-600 pt-5 px-5 font-bold">see all </p>
                    </div>
                    <div className="bg-yellow-300 rounded-lg shadow p-4 flex-1 m-2  transition-transform duration-300 ease-in-out transform hover:scale-105 ">
                        <Link href="/box3" className=" block text-black text-lg px-5 font-bold"> <span className="text-black text-3xl">100+</span>owner Properties in chennai</Link>
                        <p className="text-red-600 pt-5 px-5 font-bold">see all </p>
                    </div>
                    <div className="bg-yellow-300 rounded-lg shadow p-4 flex-1 m-2  transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <Link href="/box4" className="text-lg px-5 font-bold text-black block"> <span className="text-black text-3xl">200+</span> Properties in popular localities</Link>
                        <p className="text-red-600 pt-5 px-5 font-bold">see all </p>
                    </div>
                </div>



            </div>
        );
    }


export default Rbest;