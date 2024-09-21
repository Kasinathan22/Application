"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const productsData = [
    { id: 1, name: "Apple 11", brand: "Apple", price: 399, features: ["5G", "128GB"], rating: 4, image: "/image/service-2.jpg" },
    { id: 2, name: "Mobile 2", brand: "Samsung", price: 299, features: ["4G", "64GB"], rating: 3, image: "/images/mobile-2.jpg" },
    { id: 3, name: "Mobile 3", brand: "Oppo", price: 499, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
    { id: 4, name: "Mobile 3", brand: "Realme", price: 499, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
    { id: 5, name: "Mobile 3", brand: "One puls", price: 699, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
    { id: 6, name: "Mobile 3", brand: "Lg", price: 199, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
    { id: 7, name: "Mobile 3", brand: "Nokia", price: 999, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
    { id: 8, name: "Mobile 3", brand: "Vivo", price: 399, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
   
    { id: 9, name: "Mobile 1", brand: "Apple", price: 299, features: ["5G", "128GB"], rating: 1, image: "/images/mobile-1.jpg" },
    { id: 10, name: "Mobile 2", brand: "Samsung", price: 199, features: ["4G", "64GB"], rating: 3, image: "/images/mobile-2.jpg" },
    { id: 11, name: "Mobile 3", brand: "Realme", price: 399, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
    { id: 12, name: "Mobile 3", brand: "Realme", price: 499, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
    { id: 13, name: "Mobile 3", brand: "One puls", price: 599, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
    { id: 14, name: "Mobile 3", brand: "Lg", price: 799, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
    { id: 15, name: "Mobile 3", brand: "Nokia", price: 299, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
    { id: 16, name: "Mobile 3", brand: "Vivo", price: 699, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
     
  
    { id: 17, name: "Mobile 1", brand: "Apple", price: 599, features: ["5G", "128GB"], rating: 4, image: "/images/mobile-1.jpg" },
    { id: 18, name: "Mobile 2", brand: "Samsung", price: 999, features: ["4G", "64GB"], rating: 3, image: "/images/mobile-2.jpg" },
    { id: 19, name: "Mobile 3", brand: "Realme", price: 199, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
    { id: 20, name: "Mobile 3", brand: "Realme", price: 599, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
    { id: 21, name: "Mobile 3", brand: "One puls", price: 899, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
    { id: 22, name: "Mobile 3", brand: "Samsung", price: 399, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
    { id: 23, name: "Mobile 3", brand: "Nokia", price: 899, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
    { id: 24, name: "Mobile 3", brand: "Realme", price: 399, features: ["5G", "256GB"], rating: 5, image: "/images/mobile-3.jpg" },
  
  ];

  const uniqueBrands = [...new Set(productsData.map(product => product.brand))];
const priceOptions = [...new Set(productsData.map(product => product.price))].map(price => ({
    value: price,
    label: `$${price}`
}));
const uniqueFeatures = [...new Set(productsData.flatMap(product => product.features))];
const uniqueRatings = [...new Set(productsData.map(product => product.rating))];

function Buydslr() {
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

export default Buydslr