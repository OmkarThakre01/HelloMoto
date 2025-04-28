'use client';

import React from "react";

export function Navbar() {
  return (
    <nav className="sticky top-8 w-full z-50">
      <div className="max-w-9xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-center py-2">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-75 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
            <div className="relative flex items-center bg-black/50 backdrop-blur-md rounded-full px-6 sm:px-8 md:px-10 py-3 sm:py-4 space-x-6 sm:space-x-8 md:space-x-10 shadow-md">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white font-medium text-sm sm:text-base md:text-lg hover:text-gray-300 transition-all duration-300 whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}