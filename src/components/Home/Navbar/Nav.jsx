"use client";
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 pt-40">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-white text-lg font-bold">
          <Link href="/">Services</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/buy" className="text-white hover:text-gray-300">Buy</Link>
          </li>
          <li>
            <Link href="/sell" className="text-white hover:text-gray-300">Sell</Link>
          </li>
          <li>
            <Link href="/repair" className="text-white hover:text-gray-300">Repair</Link>
          </li>
          <li>
            <Link href="/wholesale" className="text-white hover:text-gray-300">Wholesale</Link>
          </li>
          <li>
            <Link href="/rental" className="text-white hover:text-gray-300">Rental</Link>
          </li>
        </ul>

        {/* Mobile Navigation Links */}
        {isOpen && (
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
      </div>
    </nav>
  );
};

export default Nav;
