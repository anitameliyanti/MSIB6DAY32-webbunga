import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
            <p className="text-gray-600">
              123 Flower Street <br />
              City, Country <br />
              Postal Code
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+1234567890</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">info@flowersfly.com</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                Instagram
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
