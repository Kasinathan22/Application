"use client";
import React, { useEffect, useState } from 'react';
import mp from '../../../../public/image/Wholesale/whero.svg';

function Wsalehero() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const targetCount = 30;
        const duration = 2000; // Animation duration in milliseconds
        const intervalTime = 50; // Time between increments
        const totalSteps = duration / intervalTime;
        const increment = Math.ceil(targetCount / totalSteps);

        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev + increment >= targetCount) {
                    clearInterval(interval);
                    return targetCount;
                }
                return prev + increment;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-auto h-auto'>
            <div className='pt-24 md:lg:pt-5'>
                {/* <div className='h-16 w-full bg-teal-100 flex '>
                    <h1 className='text-black pl-10 pt-5 text-lg md:text-xl lg:text-2xl'>
                        Sell Old Product in World
                    </h1>
                </div> */}
            </div>
            <section className="container mx-auto py-14 bg-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center w-full">
                    {/* Left Side: Text Content */}
                    <div className="space-y-6 py-10 px-10">
                        <h1 className="text-2xl md:lg:text-5xl font-bold">
                            Welcome
                            <br /> All Shop Owners
                        </h1>

                        <input 
                            type="text" 
                            placeholder="Search your product" 
                            className="w-9/12 p-3 border rounded-xl focus:outline-none"
                        />
                        {/* <h1 className='text-3xl text-red-800 border-cyan-400 '>{count}<span className='text-xl text-black'> Lakh+Retail</span></h1> */}
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
    );
}

export default Wsalehero;
