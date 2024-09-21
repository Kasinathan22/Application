"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';



const productsData = [
  { id: 1, name: "Apple 11", brand: "Apple", price: 399, features: ["5G", "128GB"], rating: 4, image: "/image/Buyphone/mob.svg" },
  { id: 2, name: "Mobile 2", brand: "Samsung", price: 299, features: ["4G", "64GB"], rating: 3, image: "/image/Buyphone/mob.svg" },
  { id: 3, name: "Mobile 3", brand: "Oppo", price: 499, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
  { id: 4, name: "Mobile 3", brand: "Realme", price: 499, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
  { id: 5, name: "Mobile 3", brand: "One puls", price: 699, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
  { id: 6, name: "Mobile 3", brand: "Lg", price: 199, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
  { id: 7, name: "Mobile 3", brand: "Nokia", price: 999, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
  { id: 8, name: "Mobile 3", brand: "Vivo", price: 399, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
 
  { id: 9, name: "Mobile 1", brand: "Apple", price: 299, features: ["5G", "128GB"], rating: 1, image: "/image/Buyphone/mob.svg" },
  { id: 10, name: "Mobile 2", brand: "Samsung", price: 199, features: ["4G", "64GB"], rating: 3, image: "/image/Buyphone/mob.svg" },
  { id: 11, name: "Mobile 3", brand: "Realme", price: 399, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
  { id: 12, name: "Mobile 3", brand: "Realme", price: 499, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
  { id: 13, name: "Mobile 3", brand: "One puls", price: 599, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
  { id: 14, name: "Mobile 3", brand: "Lg", price: 799, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
  { id: 15, name: "Mobile 3", brand: "Nokia", price: 299, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
  { id: 16, name: "Mobile 3", brand: "Vivo", price: 699, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
   

  { id: 17, name: "Mobile 1", brand: "Apple", price: 599, features: ["5G", "128GB"], rating: 4, image: "/image/Buyphone/mob.svg" },
  { id: 18, name: "Mobile 2", brand: "Samsung", price: 999, features: ["4G", "64GB"], rating: 3, image: "/image/Buyphone/mob.svg" },
  { id: 19, name: "Mobile 3", brand: "Realme", price: 199, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
  { id: 20, name: "Mobile 3", brand: "Realme", price: 599, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
  { id: 21, name: "Mobile 3", brand: "One puls", price: 899, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
  { id: 22, name: "Mobile 3", brand: "Samsung", price: 399, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
  { id: 23, name: "Mobile 3", brand: "Nokia", price: 899, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },
  { id: 24, name: "Mobile 3", brand: "Realme", price: 399, features: ["5G", "256GB"], rating: 5, image: "/image/Buyphone/mob.svg" },

];

const uniqueBrands = [...new Set(productsData.map(product => product.brand))];
const priceOptions = [...new Set(productsData.map(product => product.price))].map(price => ({
    value: price,
    label: `$${price}`
}));
const uniqueFeatures = [...new Set(productsData.flatMap(product => product.features))];
const uniqueRatings = [...new Set(productsData.map(product => product.rating))];

const Buyphone=()=> {
  const [products, setProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    brand: '',
    priceRange: '',
    features: '',
    rating: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  // Filter products based on selected filters
  useEffect(() => {
    let filteredProducts = productsData;

    if (filters.brand) {
      filteredProducts = filteredProducts.filter(product => product.brand === filters.brand);
    }

    if (filters.priceRange) {
      if (filters.priceRange === 'under300') {
        filteredProducts = filteredProducts.filter(product => product.price <= 300);
      } else if (filters.priceRange === '300to500') {
        filteredProducts = filteredProducts.filter(product => product.price > 300 && product.price <= 500);
      } else if (filters.priceRange === 'above500') {
        filteredProducts = filteredProducts.filter(product => product.price > 500);
      }
    }

    if (filters.features) {
      filteredProducts = filteredProducts.filter(product => product.features.includes(filters.features));
    }

    if (filters.rating) {
      filteredProducts = filteredProducts.filter(product => product.rating === parseInt(filters.rating));
    }

    setProducts(filteredProducts);
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto flex flex-row lg:flex-row">

        
        <div className="w-36 lg:w-1/6 p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          {/* Brand Filter */}
          <div className="mb-4">
            <h3 className="text-sm md:lg:text-base font-medium">Brand</h3>
            <select name="brand" value={filters.brand} onChange={handleFilterChange} className="w-20 md:lg:w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
    <option value="" className=" text-black">All</option>
    {uniqueBrands.map(brand => (
      <option className=" text-sm " key={brand} value={brand}>{brand} </option>
    ))}
  </select>
          </div>

         
          <div className="mb-4">
            <h3 className="text-sm md:lg:text-base font-medium">Price Range</h3>
            <select name="price" value={filters.price} onChange={handleFilterChange} className="w-20 md:lg:w-full p-2 border rounded">
    <option value=""className=" text-black">All</option>
    {priceOptions.map(option => (
      <option className=" text-sm " key={option.value} value={option.value}>{option.label}</option>
    ))}
  </select>
          </div>

         
          <div className="mb-4">
            <h3 className="text-sm md:lg:text-base font-medium">Features</h3>
            <select name="features" value={filters.features} onChange={handleFilterChange} className="w-20 md:lg:w-full p-2 border rounded">
    <option value=""className=" text-black">All</option>
    {uniqueFeatures.map(feature => (
      <option className=" text-sm " key={feature} value={feature}>{feature}</option>
    ))}
  </select>
          </div>

          <div className="mb-4">
            <h3 className=" text-sm md:lg:text-base font-medium">Rating</h3>
            <select name="rating" value={filters.rating} onChange={handleFilterChange} className="w-20 md:lg:w-full p-2 border rounded">
    <option value=""className=" text-black">All</option>
    {uniqueRatings.map(rating => (
      <option  className=" text-sm " key={rating} value={rating}>{rating} Stars</option>
    ))}
  </select>
          </div>
        </div>

      
        <div className="w-72 lg:w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
  <Link key={product.id} href={`/Buypage/${product.id}`}>
    <div className="bg-white p-4 rounded-lg shadow-lg" key={product.id}>
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.features.join(', ')}</p>
      <p className="text-gray-600">Rating: {product.rating} stars</p>
      <p className="mt-2 text-indigo-600 font-bold">${product.price}</p>
    </div>
  </Link>
))}

        </div>
     
      </div>
    </div>
  );
}

export default Buyphone;
// "use client";

// import React, { useState } from 'react';



// import Link from 'next/link';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import clsx from 'clsx';


// const jobListings = [
//   {
//     id:"1",
//     title: 'Digital Marketing Executive',
//     description: 'As a Digital Marketing Executive at Weboin, you will be responsible for developing, implementing, and...',
//     path: "Frontend",
//     date: "20 Oct, 2024",
//     workType: ["dayshift", "parttime", "dayshift", "parttime"],
//     color: "bg-red-100",
//     icon: "data:image/png;base64,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"
//   },
//   {id:"2",
//     title: 'Digital Marketing Specialist',
//     description: 'We are seeking an experienced and creative Digital Marketing Specialist to join our team. The ideal...',
//     path: "Backend",
//     date: "20 Oct, 2024",
//     workType: ["dayandshift", "parttime", "dayshift", "freelancher"],
//     color: "bg-gray-100",
//     icon: "data:image/png;base64,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"
//   },
//   {id:"3",
//     title: 'Digital Marketing Manager',
//     description: 'As a Digital Marketing Executive at Weboin, you will be responsible for developing, implementing, and...',
//     path: "UIUXDesigner",
//     date: "20 oct,2024",
//     workType: ["dayshift", "parttime", "dayshift", "parttime"],
//     color: "bg-yellow-100",
//     icon: "data:image/png;base64,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"
//   },
//   {
//     id:"4",
//     title: 'Head of Digital Marketing',
//     description: 'As a Digital Marketing Executive at Weboin, you will be responsible for developing, implementing, and...',
//     path: "ProductDesigner",
//     date: "20 oct,2024",
//     workType: ["dayshift", "parttime", "dayshift", "parttime"],
//     color: "bg-green-100",
//     icon: "data:image/png;base64,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"
//   },
//   {
//     id:"5",
//     title: 'Business Development Executive',
//     description: 'If you are looking to have an exciting career as a business development executive in Chennai then you....',
//     path: "ProductManager",
//     date: "20 oct,2024",
//     workType: ["dayshift", "parttime", "dayshift", "parttime"],
//     color: "bg-blue-100",
//     icon: "data:image/png;base64,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"
//   },
//   {
//     id:"6",
//     title: 'Business Development Manager',
//     description: 'We are seeking a proactive and strategic Business Development Manager to join our team....',
//     link: '#',
//     date: "20 oct,2024",
//     workType: ["dayshift", "parttime", "dayshift", "parttime"],
//     color: "bg-orange-100"
//   },
//   {
//     id:"7",
//     title: 'Python Developer Intern',
//     description: 'Pursuing degree in Computer Science or related field Solid understanding of Python programming Familiarity....',
//     link: '#',
//     date: "20 oct,2024",
//     workType: ["dayshift", "parttime", "dayshift", "parttime"],
//     color: "bg-cyan-100"
//   },
//   {
//     id:"8",
//     title: 'React JS Developer Intern',
//     description: 'Studying Computer Science or related field Solid understanding of JavaScript and ReactJS Familiarity with....',
//     link: '#',
//     date: "20 oct,2024",
//     workType: ["dayshift", "parttime", "dayshift", "parttime"],
//     color: "bg-purple-100"
//   },
//   {
//     id:"9",
//     title: 'Digital Marketing Intern',
//     description: 'Pursuing degree in marketing or related field Familiarity with digital marketing channels Basic understanding....',
//     link: '#',
//     date: "20 Jan,2024",
//     workType: ["dayshift", "parttime", "dayshift", "parttime"],
//     color: "bg-rose-100"
//   },
//   {
//     id:"10",
//     title: 'Graphic Designer Intern',
//     description: 'Pursuing degree in graphic design or related field. Proficient in Adobe Creative Suite/any editing softwares. Basic....',
//     link: '#',
//     date: "20 oct,2024",
//     workType: ["dayshift", "parttime", "dayshift", "parttime"],
//     color: "bg-violet-100"
//   },
//   {
//     id:"11",
//     title: 'Business Analyst Intern',
//     description: 'Pursuing degree in business, economics, or related field. Strong analytical and problem-solving skills. Proficient in....',
//     link: '#',
//     date: "20 oct,2024",
//     workType: ["Day shift", "Part time"],
//     color: "bg-lime-100"
//   },
//   {
//     id:"12",
//     title: 'Social Media Marketing Intern',
//     description: 'Current marketing or communications student. Proficient in major social media platforms. Basic graphic design skills....',
//     link: '#',
//     date: "20 oct,2024",
//     workType: ["Day shift", "Part time", "Day shift", "Part time"],
//     color: "bg-pink-100"
//   },
//   {
//     id:"13",
//     title: 'Video Editor Intern',
//     description: 'Pursuing degree in Film, Digital Media, or related field Proficient in video editing softwares Basic understanding of ....',
//     link: '#',
//     date: "20 oct,2024",
//     workType: ["dayshift", "parttime", "dayshift", "parttime"],
//     color: "bg-red-100"
//   },
// ];


// const CareersMain = () => {


//   const [viewjob,setViewjob] = useState('')


//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="bg-gray-50 min-h-screen py-12">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">
//             Were more than just a workplace.<br /> Were a family.
//           </h1>
//           <p className="text-lg md:text-2xl mb-6 px-4 md:px-20">
//             We know that finding a meaningful and rewarding career can be a long journey. Our<br className="hidden md:inline" /> goal is to make that process easy for you and to create a work environment thats enriching—one that youll look forward to every day.
//           </p>
//           <Link href="#job-listings" className=" rounded-lg text-white py-2 px-4 text-lg inline-block mb-12 group">
//             <span className="flex items-center">
             
//               <button
//       className={`relative px-5 py-4 bg-blue-400 text-black border-2 rounded-full font-roboto text-sm font-light overflow-hidden transition-transform duration-200 ease-in-out transform ${
//         isHovered ? 'scale-105 border-transparent text-black' : 'border-blue-500'
//       }`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{ zIndex: 0 }}
//     >
//       <span
//         className={`absolute inset-0 bg-white rounded-full transition-transform duration-200 ease-out transform ${
//           isHovered ? 'translate-y-0' : 'translate-y-full'
//         }`}
//         style={{ transformOrigin: 'bottom', zIndex: -1 }}
//       ></span>
//       VIEW OPEN ROLES
//       <ChevronRightIcon className="ml-2 transition-transform transform group-hover:translate-x-1" />
//     </button>
//             </span>
//           </Link>
//         </div>

//         <p className="text-center text-2xl md:text-3xl mb-12" id="job-listings">Our opportunities for <br className="hidden md:inline" /> you to explore</p>
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
//           {jobListings.map((job, index) => (
           
//             <div key={index} className='border border-1 border-gray-800  rounded-3xl p-2'>

// <div className={clsx("rounded-2xl min-h-72 p-4 relative", job.color)}>
//   <div className='bg-white w-fit mb-7 rounded-full'>
//     <h4 className=' px-4 py-3 font-semibold text-sm text-black'>{job.date}</h4>
//   </div>
//   <div className='flex items-center justify-between mb-6'>
//     <h2 className='text-xl font-semibold w-[70%]'>{job.title}</h2>
//     <img src={job.icon} alt="" className='w-14 h-14 rounded-full' />
//   </div>
//   <div className='flex absolute pr-4 bottom-4 flex-wrap gap-2 mt-10'>
//     {
//       job.workType.map((item, idx) => (
//         <div key={idx} className='rounded-full px-4 py-2 w-fit border border-gray-700 text-sm font-medium border-1 '>
//           <p>{item}</p>
//         </div>
//       ))
//     }
//   </div>
// </div>

// <div className='mx-3 my-4 flex justify-end items-end'>
//   <Link href={`/Buypage/${job.id}`}><button className='bg-black text-white px-4 py-3 rounded-full text-sm'>View job</button></Link>
// </div>

// </div>
  
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareersMain;
