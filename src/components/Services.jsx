import React from 'react';

const Services = () => {
  return (
    <div id='services' className="services py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="service-list grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="service-item p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Website Development</h3>
          <p>Responsive and dynamic websites tailored to your business needs.</p>
        </div>
        <div className="service-item p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Mobile App Development</h3>
          <p>Custom mobile applications for both Android and iOS platforms.</p>
        </div>
        <div className="service-item p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
          <p>Beautiful and intuitive user interfaces that enhance user experience.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
