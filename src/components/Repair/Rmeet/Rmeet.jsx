"use client"
import React from 'react'

const customers = [
  {
    name: 'John Doe',
    photo: '/image/Repair/Meet/profile.svg',
    testimonial: 'I given my mobile for display change after reading a reviews and I am 100% satisfy with service they provide and price',
  },
  {
    name: 'Jane Smith',
    photo: '/image/Repair/Meet/pr2.svg',
    testimonial: 'I given my mobile for display change after reading a reviews and I am 100% satisfy with service they provide and price.',
  },
  {
    name: 'Michael Johnson',
    photo: '/image/Repair/Meet/pr3.svg',
    testimonial: 'I given my mobile for display change after reading a reviews and I am 100% satisfy with service they provide and price.',
  },
  // Add more customer profiles as needed
];

const Rmeet = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Meet Our Customers</h1>
        <p className="text-lg text-gray-500 mt-4">See what our amazing customers have to say about us!</p>
      </header>

      <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8">
        {customers.map((customer, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
            <img
              src={customer.photo}
              alt={customer.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{customer.name}</h2>
            <p className="text-gray-500 mt-2">{customer.testimonial}</p>
          </div>
        ))}
      </section>

      <footer className="text-center mt-12">
        <p className="text-gray-600">Thank you to all our wonderful customers!</p>
      </footer>
    </div>
  );
}
export default Rmeet