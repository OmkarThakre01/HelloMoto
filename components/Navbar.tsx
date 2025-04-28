"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from react-icons

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className=" absolute bg-opacity-80 backdrop-blur-lg items-center justify-center  top-0 left-0 right-0 z-10 shadow-md">
      <div className="  p-10 mx-auto flex items-center justify-center w-full">
        
        {/* Desktop Navbar Items */}
        <div className="hidden sm:flex space-x-8 bg-[#9bf0fc] rounded-full px-10 py-6">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-black hover:text-gray-300 transition duration-300 ease-in-out"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="sm:hidden text-white p-2 rounded-md hover:bg-gray-600 transition duration-300 ease-in-out"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </button>

        {/* Mobile Navbar Menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-[#d7f5dc] bg-opacity-90 p-6 rounded-lg absolute top-16 left-0 right-0 mx-auto z-10 shadow-lg">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white py-2 text-lg hover:text-gray-300 transition duration-300 ease-in-out"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
