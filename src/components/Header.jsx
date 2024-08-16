import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="/">
            EvoNext
          </a>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-gray-700">
            <li>
              <a href="#herosection" className="hover:text-blue-600 transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600 transition">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600 transition">Services</a>
            </li>
            <li>
              <a href="#porfolio" className="hover:text-blue-600 transition">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
