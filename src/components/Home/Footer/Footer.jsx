"use client";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-g text-black py-10 px-20 w-full font-sans">
      <div className="container py-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* First Part */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Bazaar</h2>
          <p className="pt-5 w-60 text-gray-600">Our experts cover the full spectrum of products.</p>
        </div>

        {/* Second Part */}
        <div>
          <h3 className="text-xl  font-bold mb-4">My Account</h3>
          <ul className="space-y-2">
            <li><a href="#" className="pt-3 hover:text-gray-400 text-gray-600">My Account</a></li>
            <li><a href="#" className="pt-3 hover:text-gray-400 text-gray-600">My Cart</a></li>
            <li><a href="#" className="pt-3 hover:text-gray-400 text-gray-600">Wishlist</a></li>
            <li><a href="#" className="pt-3 hover:text-gray-400 text-gray-600">Order History</a></li>
            <li><a href="#" className="pt-3 hover:text-gray-400 text-gray-600">Return Policy</a></li>
          </ul>
        </div>

        {/* Third Part */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="pt-3 hover:text-gray-400 text-gray-600">Terms & Conditions</a></li>
            <li><a href="#" className="pt-3 hover:text-gray-400 text-gray-600">Accessibility</a></li>
            <li><a href="#" className="pt-3 hover:text-gray-400 text-gray-600">About Us</a></li>
            <li><a href="#" className="pt-3 hover:text-gray-400 text-gray-600">Track Order</a></li>
            <li><a href="#" className="pt-3 hover:text-gray-400 text-gray-600">Store Location</a></li>
          </ul>
        </div>

        {/* Fourth Part */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="pt-3 text-gray-600">401 Broadway, 20th floor, Orchard View, Newyork, US</p>
          <p className="pt-3 text-gray-600">+1234 567 890</p>
          <p className="pt-3 text-gray-600">
            <a href="mailto:info@domain.com" className="hover:text-gray-600">info@bazaar.com</a>
          </p>
        </div>
      </div>

      {/* Full-width horizontal line */}
      <div className="w-full border-t border-gray-400 mt-8"></div>
      
      {/* Footer Bottom Text */}
      <div className="container mx-auto mt-4 text-center text-gray-600 text-sm">
        &copy; 2024 Bazaar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
