"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img1 from '../../../../public/image/Home/pho/ph.jpg';
import img2 from '../../../../public/image/Home/p/a2.png';
import img3 from '../../../../public/image/Home/p/c2.png';
import img4 from '../../../../public/image/Home/p/d2.png';
import img5 from '../../../../public/image/Home/p/b2.png';

const Services = () => {
  const components = [
    { imageSrc: img1, title: 'Smart Phone',price:'Rs.500' },
    { imageSrc: img2, title: 'Laptop',price:'Rs.500' },
    { imageSrc: img3, title: 'Headphone',price:'Rs.500' },
    { imageSrc: img4, title: 'Earphone',price:'Rs.500' },
    { imageSrc: img5, title: 'Smart watch',price:'Rs.500' },
    { imageSrc: img2, title: 'Tev',price:'Rs.500' },
    { imageSrc: img3, title: 'Ac' ,price:'Rs.500'},
    { imageSrc: img4, title: 'Monitor',price:'Rs.500' },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default to 4 items per page

  // Detect screen size and adjust itemsPerPage dynamically
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2); // On small screens, show 2 items per page
      } else {
        setItemsPerPage(4); // On larger screens, show 4 items per page
      }
    };

    // Set the correct items per page when the component mounts
    updateItemsPerPage();

    // Add event listener to update on screen resize
    window.addEventListener('resize', updateItemsPerPage);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const endIndex = startIndex + itemsPerPage;
  const visibleComponents = components.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < components.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="container mx-auto py-12">
      {/* Flex container to align heading and buttons */}
      <div className="flex justify-between items-center mb-8 px-10">
        <h1 className="text-2xl md:lg:text-4xl font-bold">Moblie</h1>
        
        {/* Navigation buttons */}
        <div className="flex ">
          <button 
            onClick={handlePrevious} 
            className={`px-2 py-2  rounded-lg ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
            disabled={startIndex === 0}
          >
            <ArrowBackIcon />
          </button>
          <button 
            onClick={handleNext} 
            className={`px-2 py-2  rounded-lg ${endIndex >= components.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
            disabled={endIndex >= components.length}
          >
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
      
      {/* Grid of 4 visible components */}
      <div className="px-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
        {visibleComponents.map((component, index) => (
          <div key={index} className="overflow-hidden">
            <Image
              src={component.imageSrc}
              alt={`Component ${index + 1}`}
              className="w-60 h-52 md:lg:h-64 object-cover rounded-xl transform transition-all duration-300 hover:scale-105 hover:rounded-3xl"
            />
            <div className="p-4 text-center justify-center items-center md:lg:-ml-10">
              <h1 className="text-xl font-semibold">{component.title}</h1>
              <p>{component.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
