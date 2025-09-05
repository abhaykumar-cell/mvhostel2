import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MV Hostel's</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#rooms" className="hover:text-blue-600">Rooms</a></li>
          <li><a href="#facilities" className="hover:text-blue-600">Facilities</a></li>
          <li><a href="#gallery" className="hover:text-blue-600">Gallery</a></li>
          <li><a href="#reviews" className="hover:text-blue-600">Reviews</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 text-2xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col space-y-4 p-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#rooms" className="hover:text-blue-600">Rooms</a></li>
          <li><a href="#facilities" className="hover:text-blue-600">Facilities</a></li>
          <li><a href="#gallery" className="hover:text-blue-600">Gallery</a></li>
          <li><a href="#reviews" className="hover:text-blue-600">Reviews</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
