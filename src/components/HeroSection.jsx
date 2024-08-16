import React from 'react';
import evonext from '../images/EvoNext.png';

const HeroSection = () => {
  return (
    <>
    <div id="herosection" className='bg-green-500'>
  <div className="flex flex-col  sm:flex-row sm:justify-between sm:items-center">
    <div className="w-full sm:w-1/2 float hero-section  text-center py-20 sm:order-1">
      <img src={evonext} alt="EvoNext" className="mx-auto rounded-full mb-4" />
    </div>
    <div className="w-full sm:w-1/2 hero-section bg-gradient-to-r  text-center py-20 sm:order-2">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Empowering Small Businesses with Cutting-Edge Web and App Solutions</h1>
      <p className="text-xl mb-8 text-gray-700">We specialize in crafting custom websites and mobile applications to elevate your business and drive growth.</p>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition">Get Started</button>
    </div>
  </div>
  </div>
</>


  
  );
};

export default HeroSection;
