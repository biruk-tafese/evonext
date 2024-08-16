import React from 'react';

const ContactUs = () => {
  return (
    <div id="contact" className="contact-us py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Name" required className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <input type="email" placeholder="Email" required className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <textarea placeholder="Your Message" required className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
        <button type="submit" className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
