"use client"
import React from "react";
import Image from 'next/image'
import pp from '../../../../public/image/ppost.svg'






const containerData = [
    {
      id: 1,
      title: "Apple11",
      image: '/image/service-2.jpg',
      company:"Apple",
      price:"$1000",
       discount:"50%"
    
    },
    {
      id: 2,
      title: "Container 2",
      image: '/image/service-2.jpg',
      company:"Apple",
      price:"$2000",
       discount:"0%"
    },
    {
      id: 3,
      title: "Container 3",
      image: '/image/service-2.jpg',
      company:"Apple",
      price:"$2500",
       discount:"5%"
    },
    {
      id: 4,
      title: "Container 4",
      image: '/image/service-2.jpg',
      company:"Apple",
      price:"$2900",
       discount:"99%"
    },
    {
        id: 5,
        title: "Container 4",
        image: '/image/service-2.jpg',
        company:"Apple",
        price:"$7800",
        discount:"10%"
      }
  ];

  const components = [
    {
      imageSrc: "/image/Home/four/b.jpg", // Update with your image path
      title: "Component 1",
      description: "Buy a product and sell a product",
    },
    {
      imageSrc: "/image/Home/four/r.jpg", // Update with your image path
      title: "Component 2",
      description: "Repair and Service",
    },
    {
      imageSrc: "/image/Home/four/w.jpg", // Update with your image path
      title: "Component 3",
      description: "Wholesale Dealer",
    },
    {
      imageSrc: "/image/Home/four/h.jpg", // Update with your image path
      title: "Component 4",
      description: "Rental and sell your product",
    },
  ];
  

const Sales = () => {
  return (
    <div className='w-auto h-full bg-white'>
    {/* <div className='w-full'>
      <Image 
        src={pp} 
        alt="phone post" 
        layout="responsive" 
        width={100}  // Ratio width and height
        height={100} // Define a ratio
      />
    </div> */}



    <div className="container mx-auto py-10 md:lg:py-20 px-5">
      {/* Main Heading */}
      {/* <h1 className="text-4xl text-center font-bold mb-8">Our Components</h1> */}

      {/* Grid layout for image boxes */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4  w-auto gap-6 justify-center items-center mx-auto">

        {/* Render each image component */}
        {components.map((component, index) => (
          <div key={index} className="relative  overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300">

            {/* Image */}
            <Image
              src={component.imageSrc}
              alt={`Component ${index + 1}`}
              width={400} // Adjust width as needed
              height={400} // Adjust height as needed
              className="object-cover rounded-xl w-full h-full"
            />

            {/* Overlay text (title and description) */}
            <div className="absolute inset-0  flex flex-col justify-start items-start text-black  p-4 hover:scale-105">
              <h1 className="text-2xl font-bold hidden md:block lg:block">{component.title}</h1>
              <p className="text-xs md:lg:text-sm  mt-1 font-light text-gray-700 w-32  md:lg:w-52">{component.description}</p>
              <p className="text-xs pt-4 text-black font-extrabold">BuyNow</p>
            </div>
          </div>
        ))}
      </div>
    </div>
 


    {/* <div className='py-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-2'>
        {containerData.map((container) => (
        <div key={container.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col ">
        <div className="flex justify-center items-center "> 
        <img 
            src={container.image} 
            alt={container.title}   
            className='w-32'
        />
        </div>
        <h3 className="text-center font-bold text-sm mt-4 pb-5 ">{container.title}</h3>

        <div className="flex pb-5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-4 text-yellow-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.377 2.453a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.54 1.118l-3.376-2.452a1 1 0 00-1.176 0l-3.376 2.452c-.785.57-1.84-.197-1.54-1.118l1.286-3.973a1 1 0 00-.364-1.118L2.333 9.4c-.784-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
      </svg>
    ))}
    </div>
    
    <div className='rounded-lg border-2 border-black bg-black h-5 w-24 md:lg:w-32 flex items-center justify-center'>
  <h1 className='text-[9px] md:lg:text-xs text-white text-center'>
    Apple Bumper Sales
  </h1>
</div>

    
    <div className="flex items-center gap-2 pt-5 pb-3">
  <p className="font-bold text-xl">{container.price}</p>
  <p className="text-gray-500">{container.discount}</p>
</div>

    <div className='rounded-2xl text-center border-2 border-yellow-400 bg-yellow-400 h-7 w-24'><button className='text-sm'>Add to cart</button></div>
    </div>
        ))}
      </div> */}
  </div>
  )
}

export default Sales
{/* <div className="flex">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-yellow-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.377 2.453a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.54 1.118l-3.376-2.452a1 1 0 00-1.176 0l-3.376 2.452c-.785.57-1.84-.197-1.54-1.118l1.286-3.973a1 1 0 00-.364-1.118L2.333 9.4c-.784-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
      </svg>
    ))}
    </div> */}