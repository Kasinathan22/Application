"use client";
import React, { useState, useEffect } from 'react';
import p1 from '../../../../public/image/Home/Hhero/p1.jpg';
import p2 from '../../../../public/image/Home/Hhero/p2.jpg';
import p3 from '../../../../public/image/Home/Hhero/p3.jpg';
import p4 from '../../../../public/image/Home/Hhero/p4.jpg';

// Define the images array with text and button details
const images = [
  { src: p1.src, title: 'Music is my escape', description: 'Headphone on world off', buttonText: 'Shop now' },
  { src: p2.src, title: 'Good quality full guarantee', description: 'Luxury AD65 smart watch', buttonText: 'Shop now' },
  { src: p3.src, title: 'Just get them to fly in formation', description: 'Yango series wireless', buttonText: 'Shop now' },
  { src: p4.src, title: 'Just get them to fly in formation', description: 'Yango series wireless', buttonText: 'Shop now' },
];

const Hero = () => {
  // State for the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically go to the next image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the time as needed

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Inject keyframes for scrolling animation
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
    `;
    document.head.appendChild(styleElement);

    // Clean up the style element on component unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Inline styles for the carousel container and content
  const containerStyle = {
    display: 'flex',
    overflow: 'hidden',
    width: 'auto',
    position: 'relative',
    height: 'auto', // Adjust height as needed
    margin: '0 auto', // Centers the carousel horizontally
    justifyContent: 'center', // Centers the content within the container
  };

  const contentStyle = {
    display: 'flex',
    width: 'auto%', // Adjust based on the number of images
    transition: 'transform 0.4s ease-in-out',
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <div className='h-full w-full'>
      {/* Carousel */}
      <div className='pt-16 md:lg:pt-14 pb-20 md:lg:pb-20' style={containerStyle}>
        <div style={contentStyle}>
          {images.map((image, index) => (
            <div key={index} className='relative h-32 md:lg:h-full w-full flex-shrink-0'>
              <img
                src={image.src}
                alt={`post ${index}`}
                style={{ width: '100%', height: 'auto' }}
                className='w-full h-full object-cover'
              />
<div className='absolute inset-y-0 right-5 mg:lg:right-40 flex flex-col justify-center text-black p-4 pt-10 md:lg:pt-0'>
  <span className='text-sm w-32 md:lg:w-60 md:lg:text-xl  text-blue-800'>{image.title}</span>
  <h1 className='text-base md:lg:text-6xl w-36 md:lg:w-96 pt-3  md:lg:pt-10 font-bold'>{image.description}</h1>
  <button className='hidden md:block lg:block mt-4 md:lg:mt-7  bg-gray-800 text-white w-24 h-10 rounded'>
    {image.buttonText}
  </button>
</div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
