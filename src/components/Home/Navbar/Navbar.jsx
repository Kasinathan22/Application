"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cas from '../../../../public/image/cashify.svg';
import he from '../../../../public/image/heart.svg';
import car from '../../../../public/image/cart.svg';
import lo from '../../../../public/image/location.svg';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
  };
    const data = [
      {
        id: 1,
        title: "phone",
       
        imageSrc: " https://img.icons8.com/color/48/multiple-smartphones.png",
        link: "/Section/Digitalmarket",
        dataCategory: "",
        dataAction: "click-navigation",
        dataLabel: "most-popular-flex"
      },
      {
        id: 2,
        title: "Laptop",
        imageSrc: "https://img.icons8.com/color/48/web.png",
        link: "/Section/Webdev",
        dataCategory: "",
        dataAction: "click-navigation",
        dataLabel: "most-popular-gradia"
      },
      {
        id: 3,
        title: "Headset",
        imageSrc: "https://img.icons8.com/color/48/chrome-reader-mode.png",
        link: "/Section/ECommerce",
        dataCategory: "",
        dataAction: "click-navigation",
        dataLabel: "most-popular-zanrly"
      },
      {
        id: 4,
        title: "washing Machine",
        imageSrc: "https://img.icons8.com/color/48/communication-skills.png",
        link: "/Section/Social",
        dataCategory: "",
        dataAction: "click-navigation",
        dataLabel: "most-popular-vendia"
      },
      {
        id: 5,
        title: "Television",
        imageSrc: "https://img.icons8.com/color/48/attract-customers.png",
        link: "/Section/LeadGenServices",
        dataCategory: "",
        dataAction: "click-navigation",
        dataLabel: "most-popular-saturn"
      },
      {
        id: 6,
        title: "Play Station",
        imageSrc: "https://img.icons8.com/color/48/two-smartphones.png",
        link: "/Section/MobileApp",
        dataCategory: "",
        dataAction: "click-navigation",
        dataLabel: "most-popular-flaro"
      },
      {
        id: 7,
        title: "Speakers",
        imageSrc: "https://img.icons8.com/color/48/speaker_1.png",
        link: "/Section/MobileAppPromo",
        dataCategory: "",
        dataAction: "click-navigation",
        dataLabel: "most-popular-gradia"
      },
      {
        id: 8,
        title: "Watch",
        imageSrc: "https://img.icons8.com/color/48/cms.png",
        link: "/Section/CMS",
        dataCategory: "",
        dataAction: "click-navigation",
        dataLabel: "most-popular-basko"
      },
      {
        id: 9,
        title: "more",
        imageSrc: "https://img.icons8.com/color/48/positive-dynamic.png",
        link: "/Section/Seo",
        dataCategory: "",
        dataAction: "click-navigation",
        dataLabel: "most-popular-artemis"
      }
    ];

    return (
        <div>
        <div className="fixed top-0 left-0 w-full z-50">
            <nav className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-4 w-16 md:lg:w-auto">
                            <Link href="/">
                                <img src={cas.src} alt="Logo" width={100} />
                            </Link>
                        </div>

                        <div className="flex flex-col items-center">
                            <input
                                type="text"
                                className="w-32 md:lg:w-96 h-10 md:lg:h-auto p-3 border-2 border-gray-300 rounded-3xl focus:outline-none focus:border-green-400"
                                placeholder="Search products..."
                            />
                            {/* <div className='hidden md:block lg:block'>
                             <button onClick={toggleDropdown} className=" pt-3 flex items-center text-sm font-semibold text-gray-700 hover:text-blue-700 transition ease-linear duration-300">
                                            Services
                                            <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            </button>
                                            </div> */}
                        </div>


                        <div className="flex items-center space-x-3 md:lg:space-x-6">
                            <Link href="/wishlist">
                                <img
                                    src={he.src}
                                    alt="Wishlist"
                                    width={30}
                                    height={30} // Adjust height to match width for consistency
                                />
                            </Link>
                            <Link href="/cart">
                                <img
                                    src={car.src}
                                    alt="Cart"
                                    width={30}
                                    height={30} // Adjust height to match width for consistency
                                />
                            </Link>
                            {/* <Link href="/login">
                                Login
                            </Link> */}
                            <img
                                src={lo.src}
                                alt="Location"
                                width={30}
                                height={30} // Adjust height to match width for consistency
                            />
                        </div>

                        {dropdownVisible && (
                        <div className=" absolute  overflow-hidden dropdown-menu origin-top-right  top-[100px] left-0 z-50 w-full bg-white border-t border-brand-section-dashboard divide-y divide-gray-100 transition-opacity ease-linear duration-300 visible opacity-100" style={{ boxShadow: '0px 6px 6px 0px rgba(0, 0, 0, 0.02)' }} data-nav-dropdown="Services">
                            <div className="container px-4 mx-auto">
                                <div className="flex flex-wrap">
                                    <div className="w-5/12 pt-4 pr-3 pb-6">
                                        <h4 className="mb-2 text-alternatives-gray text-xs uppercase font-semibold">Services</h4>




                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  -m-1">
                                            <div className="w-full p-1">
                                                <a className="p-3 flex items-center hover:bg-brand-section-light rounded shuffle-click" href="/Section/AllServices" data-category="" data-action="click-navigation" data-label="browse-libraries" previewlistener="true">
                                                    <div className="flex items-center justify-center w-10 h-10 mr-2 rounded bg-menu-icon-item bg-opacity-10">
                                                        <img width="48" height="48" src="https://img.icons8.com/color/48/service.png" alt="service" />
                                                    </div>
                                                    <div className="inline-block">
                                                        <p className="mb-1 text-sm font-semibold leading-menu">Buy</p>
                                                        <p className="text-xs font-medium text-alternatives-gray">Buy a products</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-full p-1">
                                                <a className="p-3 flex items-center hover:bg-brand-section-light rounded shuffle-click" href="/marketplace" data-category="" data-action="click-navigation" data-label="browse-libraries" previewlistener="true">
                                                    <div className="flex items-center justify-center w-10 h-10 mr-2 rounded bg-menu-icon-item bg-opacity-10">
                                                        <img width="48" height="48" src="https://img.icons8.com/color/48/idea-sharing.png" alt="idea-sharing" />
                                                    </div>
                                                    <div className="inline-block">
                                                        <p className="mb-1 text-sm font-semibold leading-menu">Sell</p>
                                                        <p className="text-xs font-medium text-alternatives-gray">Sell the products</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-full p-1">
                                                <a className="p-3 flex items-center hover:bg-brand-section-light rounded shuffle-click" href="/templates" data-category="" data-action="click-navigation" data-label="browse-libraries" previewlistener="true">
                                                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 mr-2 rounded bg-menu-icon-item bg-opacity-10">
                                                        <img width="48" height="48" src="https://img.icons8.com/color/48/trust--v1.png" alt="trust--v1" />
                                                    </div>
                                                    <div className="inline-block">
                                                        <p className="mb-1 text-sm font-semibold leading-menu">Repair</p>
                                                        <p className="text-xs font-medium text-alternatives-gray">Ready-to-use</p>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="w-full p-1">
                                                <a className="p-3 flex items-center hover:bg-brand-section-light rounded shuffle-click" href="/Section/AllServices" data-category="" data-action="click-navigation" data-label="browse-libraries" previewlistener="true">
                                                    <div className="flex items-center justify-center w-10 h-10 mr-2 rounded bg-menu-icon-item bg-opacity-10">
                                                        <img width="48" height="48" src="https://img.icons8.com/color/48/service.png" alt="service" />
                                                    </div>
                                                    <div className="inline-block">
                                                        <p className="mb-1 text-sm font-semibold leading-menu">Wholesale</p>
                                                        <p className="text-xs font-medium text-alternatives-gray">Buy a products</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-full p-1">
                                                <a className="p-3 flex items-center hover:bg-brand-section-light rounded shuffle-click" href="/Section/AllServices" data-category="" data-action="click-navigation" data-label="browse-libraries" previewlistener="true">
                                                    <div className="flex items-center justify-center w-10 h-10 mr-2 rounded bg-menu-icon-item bg-opacity-10">
                                                        <img width="48" height="48" src="https://img.icons8.com/color/48/service.png" alt="service" />
                                                    </div>
                                                    <div className="inline-block">
                                                        <p className="mb-1 text-sm font-semibold leading-menu">Rental</p>
                                                        <p className="text-xs font-medium text-alternatives-gray">Buy a products</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-full p-1">
                                                <a className="p-3 flex items-center hover:bg-brand-section-light rounded shuffle-click" href="/Section/AllServices" data-category="" data-action="click-navigation" data-label="browse-libraries" previewlistener="true">
                                                    <div className="flex items-center justify-center w-10 h-10 mr-2 rounded bg-menu-icon-item bg-opacity-10">
                                                        <img width="48" height="48" src="https://img.icons8.com/color/48/service.png" alt="service" />
                                                    </div>
                                                    <div className="inline-block">
                                                        <p className="mb-1 text-sm font-semibold leading-menu">more</p>
                                                        <p className="text-xs font-medium text-alternatives-gray">Buy a products</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="relative w-7/12 pt-4 pl-3 pb-6 bg-brand-section-light bg-opacity-60 border-l border-brand-section-dashboard">
                                        <div class="absolute top-0 h-full w-full bg-brand-section-light bg-opacity-60 -right-full"></div>
                                        <h4 class="mb-2 text-alternatives-gray text-xs uppercase font-semibold">Most popular ui libraries</h4>
                                      
                                        <div class="flex flex-wrap -m-1">
                                        {data.map(item => (
        <div key={item.id} className="w-1/3 p-1">
          <Link onClick={toggleDropdown}
            className="flex items-center group p-3 hover:bg-white border border-transparent hover:border-menu-dropdown rounded-lg"
           href={`/Section/Digitalmarket/${item.id}`}
            data-category={item.dataCategory}
            data-action={item.dataAction}
            data-label={item.dataLabel}
            previewlistener="true"
          >
            <div className="mr-2">
              <img width="48" height="48" src={item.imageSrc} alt={item.title.replace(/\s+/g, '-').toLowerCase()} />
            </div>
            <div>
              <h5 className="mb-0 text-sm text-body font-semibold leading-tight flex items-center">
                <span className="flex items-center">
                  <span className="leading-none">{item.title}</span>
                </span>
              </h5>
              {/* <span className="text-alternatives-gray font-medium text-xs">Additional Info</span> */}
            </div>
          </Link>
        </div>
      ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </nav>

         


            </div>

            <div className='pt-24 '>

            <hr className="border-gray-600 opacity-40" />
            <div>
              
            </div>
 
            <nav className="bg-white h-12 ">
           
      <div className="container h-11 flex justify-between items-center ">
        {/* Logo or Brand */}
        {/* <div className="text-black text-lg font-bold">
          <Link href="/">Services</Link>
        </div> */}

        {/* Mobile Menu Button */}
        {/* <button
          className="text-red-600 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button> */}

        {/* Desktop Navigation Links */}
        <ul className=" hidden md:grid grid-cols-7 gap-4 text-base font-bold w-full text-center justify-center items-center">
        <li className="relative group">
        <Link href="/Buypage" className="text-black relative pb-2 hover:text-gre">
          Buy
          <span className=" absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </Link>

        <ul className="absolute left-0 top-7 rounded-3xl  hidden group-hover:block bg-white border border-gray-200 shadow-lg w-40 z-10">
    <li className="px-4 py-2 hover:bg-gray-200 hover:text-gre  rounded-t-3xl">
    <Link href="/Buypage/Buyphone">Phone</Link>
    </li>
    <li className="px-4 py-2  hover:bg-gray-200 hover:text-gre">
      <Link href="/Buypage/Buyphone">Laptop</Link>
    </li>
    <li className="px-4 py-2 hover:bg-gray-200 hover:text-gre">
      <Link href="/buy/dslr">DSLR</Link>
    </li>
    <li className="px-4 py-2 hover:bg-gray-200 hover:text-gre">
      <Link href="/buy/dslr">Tab</Link>
    </li>
    <li className="px-4 py-2 hover:bg-gray-200 hover:text-gre">
      <Link href="/buy/dslr">Television</Link>
    </li>
    <li className="px-4 py-2 hover:bg-gray-200 hover:text-gre">
      <Link href="/buy/monitor">Smartwatch</Link>
    </li>
  
  </ul>
</li>

     
      <li className="relative group">
      <Link href="/Sell" className="text-black pb-2 relative hover:text-green-500">
  Sell
  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
</Link>

{/* <ul className="absolute left-0 top-7 rounded-3xl  hidden group-hover:block bg-white border border-gray-200 shadow-lg w-40 z-10">
    <li className="px-4 py-2 hover:bg-gray-200 hover:text-gre  rounded-t-3xl">
    <Link href="/">Phone</Link>
    </li>
    <li className="px-4 py-2  hover:bg-gray-200 hover:text-gre">
      <Link href="/buy/laptop">Laptop</Link>
    </li>
    <li className="px-4 py-2 hover:bg-gray-200 hover:text-gre">
      <Link href="/buy/dslr">DSLR</Link>
    </li>
    <li className="px-4 py-2 hover:bg-gray-200 hover:text-gre">
      <Link href="/buy/dslr">Tab</Link>
    </li>
    <li className="px-4 py-2 hover:bg-gray-200 hover:text-gre">
      <Link href="/buy/dslr">Television</Link>
    </li>
    <li className="px-4 py-2 hover:bg-gray-200 hover:text-gre">
      <Link href="/buy/monitor">Smartwatch</Link>
    </li>
  
  </ul> */}

      </li>


      <li className="relative group ">
        <Link href="/Repair" className="text-black pb-2 relative hover:text-gre">
          Repair
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </Link>
      </li>
      <li className="relative group">
        <Link href="/rental " className="text-black pb-2 relative hover:text-gre">
        Rental 
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </Link>
      </li>
      <li className="relative group">
        <Link href="/wholesale" className="text-black pb-2 relative hover:text-gre">
        Wholesale
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </Link>
      </li> <li className="relative group">
        <Link href="/more" className="text-black pb-2 relative hover:text-gre ">
        Refurbished 
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </Link>
      </li>
      <li className="relative group">
        <Link href="/more" className="text-black pb-2 relative hover:text-gre ">
          More
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </Link>
      </li>
</ul>

        {/* Mobile Navigation Links */}
        {/* {isOpen && (
          <ul className="md:hidden space-y-2 mt-4">
            <li>
              <Link href="/buy" className="block text-white hover:text-gray-300">Buy</Link>
            </li>
            <li>
              <Link href="/sell" className="block text-white hover:text-gray-300">Sell</Link>
            </li>
            <li>
              <Link href="/repair" className="block text-white hover:text-gray-300">Repair</Link>
            </li>
            <li>
              <Link href="/wholesale" className="block text-white hover:text-gray-300">Wholesale</Link>
            </li>
            <li>
              <Link href="/rental" className="block text-white hover:text-gray-300">Rental</Link>
            </li>
          </ul>
        )}
         */}





      </div>
    </nav>
    <hr className="border-gray-600 opacity-40 " />
    </div>
        </div>
    );
}

export default Navbar;
