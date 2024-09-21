"use client";
import React from 'react'
import Image from 'next/image';

const cities = [
    { name: 'New York', state: 'NY', imgSrc: '/image/Wholesale/city/city.svg' },
    { name: 'Los Angeles', state: 'CA', imgSrc: '/image/Wholesale/city/city.svg' },
    { name: 'Chicago', state: 'IL', imgSrc: '/image/Wholesale/city/city.svg' },
    { name: 'New York', state: 'NY', imgSrc: '/image/Wholesale/city/city.svg' },
    { name: 'Los Angeles', state: 'CA', imgSrc: '/image/Wholesale/city/city.svg' },
    { name: 'Chicago', state: 'IL', imgSrc: '/image/Wholesale/city/city.svg' },
    { name: 'New York', state: 'NY', imgSrc: '/image/Wholesale/city/city.svg' },
    { name: 'Los Angeles', state: 'CA',imgSrc: '/image/Wholesale/city/city.svg' },
    { name: 'Chicago', state: 'IL', imgSrc: '/image/Wholesale/city/city.svg' },
    // Add more cities as needed
  ];
function Wcity() {
    return (
        <div className="min-h-screen p-8 bg-gray-100">
          <h1 className="text-3xl font-bold text-center md:lg:text-left mb-6">
            Discover Popular Cities
          </h1>
          <p className=" text-center md:lg:text-left mb-8">
            Explore different localities, price trends, reviews, etc.
          </p>
          <div className="flex overflow-x-scroll space-x-4 p-4 ">
            {cities.map((city, index) => (
              <div key={index} className="flex-none w-64 bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={city.imgSrc}
                  alt={city.name}
                  width={256}
                  height={144}
                  className="rounded-lg object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold">{city.name}</h2>
                  <p className="text-gray-500">{city.state}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Wcity;