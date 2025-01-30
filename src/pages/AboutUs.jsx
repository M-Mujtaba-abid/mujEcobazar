import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-green-600 text-center">About Us</h1>
        <p className="mt-4 text-gray-700 text-center">
          Welcome to <span className="font-semibold">EcoBazar</span>, your trusted online grocery store. We are dedicated to providing fresh, high-quality products at affordable prices.
        </p>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-green-50 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-700">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              Our mission is to make grocery shopping easy, convenient, and affordable for everyone. We strive to bring fresh and organic products right to your doorstep.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-700">Why Choose Us?</h2>
            <p className="text-gray-600 mt-2">
              - Fresh and organic products<br/>
              - Fast and reliable delivery<br/>
              - Affordable pricing<br/>
              - Customer satisfaction guaranteed
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-green-700">Contact Us</h2>
          <p className="text-gray-600 mt-2">Email: support@ecobazar.com | Phone: +123 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
