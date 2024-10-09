"use client"; // Ensures the use of client-side hooks

import { useState, useEffect } from "react"; // Ensure useEffect is imported
import p1 from '../../../../public/image/Home/Hhero/1111.png';
import p2 from '../../../../public/image/Home/Hhero/222.png';
import p3 from '../../../../public/image/Home/Hhero/333.png';
import p5 from '../../../../public/image/Home/Hhero/444.png';
import p4 from '../../../../public/image/Home/Hhero/555.png';


import tl from '../../../../public/image/Home/Hhero/tl 1.png';
import br from '../../../../public/image/Home/Hhero/br1.png';

import lp from '../../../../public/image/Home/Hhero/lp.png';
import rw from '../../../../public/image/Home/Hhero/rw.png';



import sp from '../../../../public/image/Home/Hhero/p1p.png';

import 'aos/dist/aos.css';
import AOS from 'aos';

const Hero = ({ onNextTheme, onPreviousTheme }) => {
  // State for the current image index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateSecondText, setAnimateSecondText] = useState(false); // State for animating the second text

  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  // Handle going to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % 5; // Change the number to match the number of images
      if (newIndex === 1) { // Check if the new index is 1 (second image)
        setAnimateSecondText(true); // Set animation for the second text
      } else {
        setAnimateSecondText(false); // Reset animation if it's not the second image
      }
      return newIndex;
    });
    onNextTheme(); // Call the next theme function
  };

  // Handle going to the previous image
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + 5) % 5; // Change the number to match the number of images
      if (newIndex === 1) { // Check if the new index is 1 (second image)
        setAnimateSecondText(true); // Set animation for the second text
      } else {
        setAnimateSecondText(false); // Reset animation if it's not the second image
      }
      return newIndex;
    });
    onPreviousTheme(); // Call the previous theme function
  };

  return (
//     <div className='h-full w-full bg-transparent overflow-hidden'>
//       {/* Carousel */}
//       <div className='pt-16 md:lg:pt-14 md:lg:pb-20 bg-transparent' style={{ display: 'flex', overflow: 'hidden', width: '95%', position: 'relative', height: 'auto', margin: '0 auto', justifyContent: 'center' }}>
//         <div style={{ display: 'flex', width: '400%', transition: 'transform 0.4s ease-in-out', transform: `translateX(-${currentIndex * 100}%)` }}>
//           {/* First Image */}
//           <div className='h-32 md:lg:h-full w-full flex-shrink-0 relative'>
//             <img
//               src={p1.src}
//               alt="Post 1"
//               className='w-full h-full object-cover'
//             />
//             <div data-aos="fade-up" data-aos-duration="1000" className='absolute top-28  text-start justify-center right-96 transform -translate-x-1/2 text-white '>
//               <h1  className="barlow-thin text-xl">
//                 Application Bazaar
//               </h1>
//               <h1  className="barlow-bold text-3xl w-96 pt-3 pb-7">
//               Shop the Latest in Electronics<br />Phones, Laptops, TVs, and More! 
//               </h1>
//               <button className="barlow-thin  border-[1px] border-white py-1 px-2">
//               purchase
//               </button>
//             </div>

//             <div data-aos="fade-left" data-aos-duration="1000" className="absolute top-0 right-0 w-96">
//     <img 
//       src={tl.src}
//       alt="Top Right Image"
//     />
//   </div>

//   <div data-aos="fade-right" data-aos-duration="1000" className="absolute bottom-0 left-0 w-96 rounded-bl-full">
//     <img 
//       src={br.src}
//       alt="Top Right Image"
//       className="rounded-bl-[50px]"
//     />
//   </div>
//         </div>



//           {/* Second Image */}
//           <div className='h-32 md:lg:h-full w-full flex-shrink-0 relative'>
//             <img
//               src={p2.src}
//               alt="Post 2"
//               className='w-full h-full object-cover'
//             />
//              {/* data-aos={currentIndex === 1 ? "fade-down" : ""}
//                data-aos-duration="1000"
//                data-aos-once="true" */}
//             <div 
              
//                className='barlow-light text-4xl absolute top-10 left-1/2 transform -translate-x-1/2'>
            
//             Discover a place you&apos;ll love to live

//             </div>
//           </div>



//           {/* Third Image */}
//           <div className='h-32 md:lg:h-full w-full flex-shrink-0 relative'>
//             <img
//               src={p3.src}
//               alt="Post 3"
//               className='w-full h-full object-cover'
//             />
//             <div 
//             // data-aos={currentIndex === 2 ? "fade-down" : ""}
//             //   data-aos-duration="1000"
//             //   data-aos-once="true"

//             // transform -translate-x-1/2
//               className='absolute top-20 left-20  '>
              

//               <h1 className="text-3xl text-black barlow-light">Service</h1>
//               <h1 className="text-5xl text-black pt-3 pb-7 barlow-bold">Fast Repairs for Your<br/> Mobile and Laptop Needs</h1>
//               <button className="barlow-light text-xl py-1 px-2 text-black border-[1px] border-black">
//               contact us
//               </button>
//             </div>


//             <div 
//   data-aos={currentIndex === 2 ? "fade-up" : ""} // Use fade-up for bottom to top animation
//   data-aos-duration="2000"
//   data-aos-once="true"
//   className="absolute bottom-0 right-10 w-96 transform translate-y-10 transition-transform duration-3000 ease-in-out" // Start below
// >
//   <img 
//     src={sp.src}
//     alt="Top Right Image"
//     className="transition-transform duration-2000 ease-in-out rounded-br-xl" // Transition for smoothness
//   />
// </div>








//           </div>


//           <div className='h-32 md:lg:h-full w-full flex-shrink-0 relative '>
//             <img
//               src={p5.src}
//               alt="Post 4"
//               className='w-full h-full object-cover rounded-3xl'
//             />
//             {/* data-aos={currentIndex === 3 ? "fade-down" : ""}
//               data-aos-duration="1000"
//               data-aos-once="true" */}
//             <div 
            
//               className='absolute top-28 left-96 '>
//                 <h1 className="text-xl barlow-light text-white">Application Bazaar</h1>
//               <h1 className= 'pt-5 barlow-bold text-white text-3xl'>Turn Your Tech into Cash:<br /> Sell Laptops and Mobiles Today!</h1>
//               <div className="absolute pt-5 w-full flex justify-start ">
//     <form className="flex overflow-hidden border border-g rounded-2xl">
//       <input
//         type="text"
//         className=" px-6 bg-cg   focus:outline-none text-white"
//         placeholder="Search for laptops, mobiles, electronics..."
//       />
//       <button
//         type="submit"
//         className="px-2 py-2 bg-slate-500 text-white hover:bg-blue-700"
//       >
//         Search
//       </button>
//     </form>
//   </div>
//             </div>
          

          
            
//           <div 
//   data-aos={currentIndex === 3 ? "fade-left" : ""} 
//   data-aos-duration="2000" 
//   data-aos-once="true" 
//   className="absolute top-0 right-0 w-[156px] transform translate-x-full transition-transform duration-2000 ease-in-out" // Start off-screen to the right
// >
//   <img 
//     src={rw.src}
//     alt="Top Right Image"
//     className="overflow-hidden rounded-tr-[50px] rounded-br-[50px] transition-transform duration-2000 ease-in-out" // Add a smooth transition to the image
//   />
// </div>





// <div 
//   data-aos={currentIndex === 3 ?"fade-up": ""}  // Use 'fade-right' for the AOS animation
//   data-aos-duration="1000" // Adjust the duration for the animation speed
//    // This makes the animation play only once
//   className="absolute top-0 left-0 w-72 transform translate-y-full" // Start off-screen to the left
// >
//   <img 
//     src={lp.src}
//     alt="Top Left Image"
//     className="rounded-tl-3xl " // Add a smooth transition to the image
//   />
// </div>

//           </div>



//           {/* Fourth Image */}
//           <div className='h-32 md:lg:h-full w-full flex-shrink-0 relative'>
//             <img
//               src={p4.src}
//               alt="Post 4"
//               className='w-full h-full object-cover rounded-3xl'
//             />

// {/* data-aos={currentIndex === 3 ? "fade-down" : ""}
//               data-aos-duration="1000"
//               data-aos-once="true" */}
//             <div 
            
//               className='absolute top-20 left-56 transform -translate-x-1/2 p-2'>
              

//               <h1 className="text-xl barlow-light">Application Bazaar</h1>
//               <h1 className="pt-5 text-3xl  barlow-bold">ElectroWholesale Hub</h1>

//               <div className="absolute pt-5 w-full flex justify-start ">
//     <form className="flex overflow-hidden border border-g rounded-2xl">
//       <input
//         type="text"
//         className=" px-6 bg-cg   focus:outline-none text-white"
//         placeholder="Search for laptops, mobiles, electronics..."
//       />
//       <button
//         type="submit"
//         className="px-2 py-2 bg-slate-500 text-white hover:bg-blue-700"
//       >
//         Search
//       </button>
//     </form>
//   </div>
//             </div>
//           </div>



//         </div>
//         <button 
//           onClick={goToPrev} 
//           className='absolute top-28 md:lg:top-72 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded'
//         >
//           &lt;
//         </button>
//         <button 
//           onClick={goToNext} 
//           className='absolute top-28 md:lg:top-72 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded'
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
<div className='h-full w-full bg-transparent overflow-hidden'>

{/* Carousel */}

<div className='pt-10 md:lg:pt-14 md:lg:pb-20 bg-transparent overflow-hidden' style={{ display: 'flex', overflow: 'hidden', width: '95%', position: 'relative', height: 'auto', margin: '0 auto', justifyContent: 'center' }}>

  <div style={{ display: 'flex', width: '400%', transition: 'transform 0.4s ease-in-out', transform: `translateX(-${currentIndex * 100}%)` }}>

   

    {/* First Image */}

    <div className='h-44 md:lg:h-full w-full flex-shrink-0 relative px-1 overflow-hidden'>

      <img src={p1.src} alt="Post 1" className='w-auto h-full ' />
      <div data-aos="fade-up" data-aos-duration="1000" className='absolute top-8 md:lg:top-28 -right-24 md:lg:right-96 transform -translate-x-1/2 text-white'>
        <h1 className="barlow-thin text-xs md:lg:text-xl">Application Bazaar</h1>
        <h1 className="barlow-bold text-sm md:lg:text-3xl w-96 pt-1 md:lg:pt-3 pb-3 md:lg:pb-7">Shop the Latest in Electronics<br />Phones, Laptops, TVs, and More!</h1>
        <button className="barlow-thin border-[1px] border-white py-0 md:lg:py-1 px-2 text-[8px] md:lg:text-base">purchase</button>
      </div>

      <div data-aos="fade-left" data-aos-duration="1000" className="absolute top-0 right-1 md:lg:right-1 w-24 md:lg:w-96">
        <img src={tl.src} alt="Top Right Image" />

      </div>

      <div data-aos="fade-right" data-aos-duration="1000" className="absolute bottom-0 left-1 md:lg:left-1 w-24 md:lg:w-96 rounded-bl-full">

        <img src={br.src} alt="Bottom Left Image" className="rounded-bl-[15px] md:lg:rounded-bl-[50px]" />

      </div>

    </div>



    {/* Second Image */}

    <div className='h-44 md:lg:h-full w-full flex-shrink-0 relative px-1'>

      <img src={p2.src} alt="Post 2" className='w-full h-full ' />

      <div className='barlow-light text-sm md:lg:text-4xl absolute top-5  left-1/2 transform -translate-x-1/2'>

        Discover a place you&apos;ll love to live

      </div>

    </div>



    {/* Third Image */}

    <div className='h-44 md:lg:h-full w-full flex-shrink-0 relative px-1'>

      <img src={p3.src} alt="Post 3" className='w-full h-full ' />

      <div className='absolute top-7 md:lg:top-20 left-10 md:lg:left-20'>

        <h1 className="text-xs md:lg:text-3xl text-black barlow-light">Service</h1>

        <h1 className="text-xl md:lg:text-5xl text-black pt-1 md:lg:pt-3 pb-3 md:lg:pb-7 barlow-bold">Fast Repairs for Your<br/> Mobile and Laptop Needs</h1>

        <button className="barlow-light text-xs md:lg:text-xl py-0 md:lg:py-1 px-1 md:lg:px-2 text-black border-[1px] border-black">contact us</button>

      </div>

      <div data-aos={currentIndex === 2 ? "fade-up" : ""} data-aos-duration="2000" className="absolute bottom-0 right-10 w-20 md:lg:w-96 translate-y-10 transition-transform duration-3000 ease-in-out">

        <img src={sp.src} alt="Bottom Right Image" className="rounded-br-xl" />

      </div>

    </div>



    {/* Fourth Image */}

    <div className='h-44 md:lg:h-full w-full flex-shrink-0 relative px-1 overflow-hidden'>

      <img src={p5.src} alt="Post 4" className='w-full h-full  rounded-3xl' />

      <div className='absolute top-10 md:lg:top-28 left-24 md:lg:left-96'>

        <h1 className="text-sm md:lg:text-xl barlow-light text-white">Application Bazaar</h1>

        <h1 className="pt-1 md:lg:pt-5 barlow-bold text-white  text-xs md:lg:text-3xl">Turn Your Tech into Cash:<br /> Sell Laptops and Mobiles Today!</h1>

        <div className="absolute pt-5 w-full flex justify-start">

          <form className="flex overflow-hidden border border-g rounded-2xl">

            <input type="text" className="w-20 md:lg:w-72 px-1 md:lg:px-6 text-xs bg-cg focus:outline-none text-white" placeholder="Search for laptops, electronics..." />

            <button type="submit" className="px-0 md:lg:px-2 py-1 md:lg:py-2 bg-slate-500 text-white hover:bg-blue-700 text-xs md:lg:text-lg">Search</button>

          </form>

        </div>

      </div>

      <div data-aos={currentIndex === 3 ? "fade-left" : ""} data-aos-duration="2000" className="absolute top-0 md:lg:top-0 right-1 w-16 md:lg:w-[156px] translate-x-full transition-transform duration-2000 ease-in-out overflow-hidden">

        <img src={rw.src} alt="Right Image" className="rounded-tr-[50px] rounded-br-[50px]" />

      </div>

      <div data-aos={currentIndex === 3 ? "fade-up" : ""} data-aos-duration="1000" className="absolute top-0 left-1 w-20 md:lg:w-72 translate-y-full">

        <img src={lp.src} alt="Left Image" className="rounded-tl-3xl" />

      </div>

    </div>



    {/* Fifth Image */}

    <div className='h-44 md:lg:h-full w-full flex-shrink-0 relative px-1'>

      <img src={p4.src} alt="Post 5" className='w-full h-full rounded-3xl' />

      <div className='absolute top-5 md:lg:top-20 left-36 md:lg:left-56 transform -translate-x-1/2 p-2'>

        <h1 className="text-sm md:lg:text-xl barlow-light">Application Bazaar</h1>

        <h1 className="pt-2 md:lg:pt-5 text-xl md:lg:text-3xl barlow-bold">ElectroWholesale Hub</h1>

        <div className="absolute pt-5 w-full flex justify-start">

          <form className="flex overflow-hidden border border-g rounded-xl md:lg:rounded-2xl">

          <input type="text" className="w-20 md:lg:w-72 px-1 md:lg:px-6 text-xs bg-cg focus:outline-none text-white" placeholder="Search for laptops, electronics..." />

          <button type="submit" className="px-0 md:lg:px-2 py-1 md:lg:py-2 bg-slate-500 text-white hover:bg-blue-700 text-xs md:lg:text-lg">Search</button>

         </form>

        </div>

      </div>

    </div>



  </div>



  {/* Carousel Controls */}

  <button onClick={goToPrev} className='absolute top-32 md:lg:top-72 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-1 py-0 md:lg:p-2 rounded'>

    &lt;

  </button>

  <button onClick={goToNext} className='absolute top-32 md:lg:top-72 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-1 py-0 md:lg:p-2 rounded'>

    &gt;

  </button>





  
</div>

</div>
  );
};

export default Hero;
