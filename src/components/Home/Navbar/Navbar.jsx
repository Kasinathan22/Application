// "use client";
// import React, { useState } from 'react';
// import { FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';
// import Image from 'next/image';
// import Link from 'next/link';
// import cas from '../../../../public/image/cashify.svg';
// import he from '../../../../public/image/heart.svg';
// import car from '../../../../public/image/cart.svg';
// import lo from '../../../../public/image/location.svg';

// const Navbar = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => {
//       setDropdownVisible(!dropdownVisible);
//   };
//     const data = [
//       {
//         id: 1,
//         title: "phone",
       
//         imageSrc: " https://img.icons8.com/color/48/multiple-smartphones.png",
//         link: "/Section/Digitalmarket",
//         dataCategory: "",
//         dataAction: "click-navigation",
//         dataLabel: "most-popular-flex"
//       },
//       {
//         id: 2,
//         title: "Laptop",
//         imageSrc: "https://img.icons8.com/color/48/web.png",
//         link: "/Section/Webdev",
//         dataCategory: "",
//         dataAction: "click-navigation",
//         dataLabel: "most-popular-gradia"
//       },
//       {
//         id: 3,
//         title: "Headset",
//         imageSrc: "https://img.icons8.com/color/48/chrome-reader-mode.png",
//         link: "/Section/ECommerce",
//         dataCategory: "",
//         dataAction: "click-navigation",
//         dataLabel: "most-popular-zanrly"
//       },
//       {
//         id: 4,
//         title: "washing Machine",
//         imageSrc: "https://img.icons8.com/color/48/communication-skills.png",
//         link: "/Section/Social",
//         dataCategory: "",
//         dataAction: "click-navigation",
//         dataLabel: "most-popular-vendia"
//       },
//       {
//         id: 5,
//         title: "Television",
//         imageSrc: "https://img.icons8.com/color/48/attract-customers.png",
//         link: "/Section/LeadGenServices",
//         dataCategory: "",
//         dataAction: "click-navigation",
//         dataLabel: "most-popular-saturn"
//       },
//       {
//         id: 6,
//         title: "Play Station",
//         imageSrc: "https://img.icons8.com/color/48/two-smartphones.png",
//         link: "/Section/MobileApp",
//         dataCategory: "",
//         dataAction: "click-navigation",
//         dataLabel: "most-popular-flaro"
//       },
//       {
//         id: 7,
//         title: "Speakers",
//         imageSrc: "https://img.icons8.com/color/48/speaker_1.png",
//         link: "/Section/MobileAppPromo",
//         dataCategory: "",
//         dataAction: "click-navigation",
//         dataLabel: "most-popular-gradia"
//       },
//       {
//         id: 8,
//         title: "Watch",
//         imageSrc: "https://img.icons8.com/color/48/cms.png",
//         link: "/Section/CMS",
//         dataCategory: "",
//         dataAction: "click-navigation",
//         dataLabel: "most-popular-basko"
//       },
//       {
//         id: 9,
//         title: "more",
//         imageSrc: "https://img.icons8.com/color/48/positive-dynamic.png",
//         link: "/Section/Seo",
//         dataCategory: "",
//         dataAction: "click-navigation",
//         dataLabel: "most-popular-artemis"
//       }
//     ];
"use client";
import React, { useState } from 'react';
import { FiUser, FiHeart, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'; // Icons for profile, wishlist, cart, menu
import Link from 'next/link';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
//         <div>
//         <div className="fixed top-0 left-0 w-full z-50">
//             <nav className="bg-white">
//                 <div className="container mx-auto px-4">
//                     <div className="flex justify-between items-center py-4">
//                         <div className="flex items-center space-x-4 w-16 md:lg:w-auto">
//                             <Link href="/">
//                                 <img src={cas.src} alt="Logo" width={100} />
//                             </Link>
//                         </div>

//                         <div className="flex flex-col items-center">
//                             <input
//                                 type="text"
//                                 className="w-32 md:lg:w-96 h-10 md:lg:h-auto p-3 border-2 border-gray-300 rounded-3xl focus:outline-none focus:border-green-400"
//                                 placeholder="Search products..."
//                             />
//                             {/* <div className='hidden md:block lg:block'>
//                              <button onClick={toggleDropdown} className=" pt-3 flex items-center text-sm font-semibold text-gray-700 hover:text-blue-700 transition ease-linear duration-300">
//                                             Services
//                                             <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                                             </svg>
//                                             </button>
//                                             </div> */}
//                         </div>


//                         <div className="flex items-center space-x-3 md:lg:space-x-6">
//                             <Link href="/wishlist">
//                                 <img
//                                     src={he.src}
//                                     alt="Wishlist"
//                                     width={30}
//                                     height={30} // Adjust height to match width for consistency
//                                 />
//                             </Link>
//                             <Link href="/cart">
//                                 <img
//                                     src={car.src}
//                                     alt="Cart"
//                                     width={30}
//                                     height={30} // Adjust height to match width for consistency
//                                 />
//                             </Link>
//                             {/* <Link href="/login">
//                                 Login
//                             </Link> */}
//                             <img
//                                 src={lo.src}
//                                 alt="Location"
//                                 width={30}
//                                 height={30} // Adjust height to match width for consistency
//                             />
//                         </div>

                       
//                     </div>
//                 </div>
//             </nav>

         


//             </div>

//             <div className='pt-24 '>

//             <hr className="border-gray-600 opacity-40" />
//             <div>
              
//             </div>
 
//             <nav className="bg-white h-12 ">
           
//       <div className="container h-11 flex justify-between items-center ">
//         {/* Logo or Brand */}
//         {/* <div className="text-black text-lg font-bold">
//           <Link href="/">Services</Link>
//         </div> */}

//         {/* Mobile Menu Button */}
//         <button
//     className="text-black md:hidden ml-80 "
//     onClick={() => setIsOpen(!isOpen)}
//   >
//     ☰
//   </button>

//         {/* Desktop Navigation Links */}
//         <ul className="hidden  md:grid grid-cols-6 gap-2 md:lg:gap-4 text-xs md:lg:text-lg font-bold w-full text-center justify-center items-center">
//         <li className="relative group">
//         <Link href="/Buypage" className="text-black relative pb-2 hover:text-gre">
//           Buy
//           <span className=" absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
//         </Link>

//         <ul className="absolute left-0 top-7 rounded-3xl  hidden group-hover:block bg-white border border-gray-200 shadow-lg w-40 z-10">
//     <li className="px-4 py-2 hover:bg-gray-200 hover:text-gre  rounded-t-3xl">
//     <Link href="/Buypage/Buyphone">Phone</Link>
//     </li>
//     <li className="px-4 py-2  hover:bg-gray-200 hover:text-gre">
//       <Link href="/Buylaptop/Buylaptop">Laptop</Link>
//     </li>
//     <li className="px-4 py-2 hover:bg-gray-200 hover:text-gre">
//       <Link href="/Buydslr/Buydslr">DSLR</Link>
//     </li>
//     <li className="px-4 py-2 hover:bg-gray-200 hover:text-gre">
//       <Link href="/buy/dslr">Tab</Link>
//     </li>
//     <li className="px-4 py-2 hover:bg-gray-200 hover:text-gre">
//       <Link href="/buy/dslr">Television</Link>
//     </li>
//     <li className="px-4 py-2 hover:bg-gray-200 hover:text-gre">
//       <Link href="/buy/monitor">Smartwatch</Link>
//     </li>
  
//   </ul>
// </li>

     
//       <li className="relative group">
//       <Link href="/Sell" className="text-black pb-2 relative hover:text-green-500">
//   Sell
//   <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
// </Link>


//       </li>


//       <li className="relative group ">
//         <Link href="/Repair" className="text-black pb-2 relative hover:text-gre">
//           Repair
//           <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
//         </Link>
//       </li>
//       <li className="relative group">
//         <Link href="/Rent/Renthero" className="text-black pb-2 relative hover:text-gre">
//         Rental 
//           <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
//         </Link>
//       </li>
//       <li className="relative group">
//         <Link href="/Wholesale" className="text-black pb-2 relative hover:text-gre">
//         Wholesale
//           <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
//         </Link>
//       </li> 
     
//       <li className="relative group">
//         <Link href="/more" className="text-black pb-2 relative hover:text-gre ">
//           More
//           <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
//         </Link>
//       </li>
// </ul>

//         {/* Mobile Navigation Links */}
//         {isOpen && (
//   <ul className="z-50 md:hidden absolute left-1/2 transform -translate-x-1/2 space-y-2 mt-48 bg-black p-4 rounded-md shadow-md w-40 max-w-md">
//     <li>
//       <button 
//         onClick={() => setIsOpen(false)} 
//         className="block text-r hover:text-gray-700 mb-2"
//       >
//         Close
//       </button>
//     </li>
//     <li>
//       <Link href="/Buypage" className="block text-black hover:text-gray-700">Buy</Link>
//     </li>
//     <li>
//       <Link href="/Sell" className="block text-black hover:text-gray-700">Sell</Link>
//     </li>
//     <li>
//       <Link href="/Repair" className="block text-black hover:text-gray-700">Repair</Link>
//     </li>
//     <li>
//       <Link href="/Wholesale" className="block text-black hover:text-gray-700">Wholesale</Link>
//     </li>
//     <li>
//       <Link href="/rental" className="block text-black hover:text-gray-700">Rental</Link>
//     </li>
//   </ul>
// )}









//       </div>
//     </nav>
//     <hr className="border-gray-600 opacity-40 " />
//     </div>
//         </div>




<nav className="bg-white  h-[50px]">
<div className="max-w-7xl mx-auto pt-3 px-4 sm:px-6 lg:px-10">
  <div className="flex justify-between items-center h-16">
    {/* Left Side - Logo */}
    <div className="flex-shrink-0">
      <a href="/" className="text-black pl-10 text-3xl font-black">Bazaar</a>
    </div>

    {/* Center - Navigation Links for Desktop */}
    <div className="hidden md:flex space-x-6 font-bold text-base">


<div className="relative group">
       <Link href="/Buypage" className="text-black relative pb-2 hover:text-r">
         Buy
         <span className=" absolute left-0 bottom-0 w-full h-[2px] bg-r transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
       </Link>
       </div>
       <div className="relative group">
       <Link href="/Buypage" className="text-black relative pb-2 hover:text-r">
         Sell
         <span className=" absolute left-0 bottom-0 w-full h-[2px] bg-r transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
       </Link>
       </div>
       <div className="relative group">
       <Link href="/Buypage" className="text-black relative pb-2 hover:text-r">
       Repair
         <span className=" absolute left-0 bottom-0 w-full h-[2px] bg-r transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
       </Link>
       </div>
       <div className="relative group">
       <Link href="/Buypage" className="text-black relative pb-2 hover:text-r">
       Wholesale
         <span className=" absolute left-0 bottom-0 w-full h-[2px] bg-r transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
       </Link>
       </div>
       <div className="relative group">
       <Link href="/Buypage" className="text-black relative pb-2 hover:text-r">
         Rental
         <span className=" absolute left-0 bottom-0 w-full h-[2px] bg-r transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
       </Link>
       </div>
    </div>

    {/* Right Side - Profile, Wishlist, Cart Icons */}
    <div className="flex space-x-4 items-center">
      <a href="/profile" className="text-black hover:text-r">
        <FiUser size={20} />
      </a>
      <a href="/wishlist" className="text-black hover:text-r">
        <FiHeart size={20} />
      </a>
      <a href="/cart" className="text-black hover:text-r">
        <FiShoppingCart size={20} />
      </a>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none"
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
    </div>
  </div>
</div>

{/* Mobile Menu - Slide in from the left on small screens */}
<div
  className={`z-50 fixed top-0 left-0 h-full w-64 bg-gray-800 transform ${
    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
  } transition-transform duration-300 ease-in-out md:hidden`}
>
  <div className="px-4 py-4">
    <a href="/buy" className="block text-white text-lg hover:text-indigo-400 mb-4">Buy</a>
    <a href="/sell" className="block text-white text-lg hover:text-indigo-400 mb-4">Sell</a>
    <a href="/repair" className="block text-white text-lg hover:text-indigo-400 mb-4">Repair</a>
    <a href="/wholesale" className="block text-white text-lg hover:text-indigo-400 mb-4">Wholesale</a>
    <a href="/rental" className="block text-white text-lg hover:text-indigo-400 mb-4">Rental</a>
  </div>
</div>
</nav>
    );
}

export default Navbar;
