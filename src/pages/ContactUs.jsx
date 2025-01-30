import React from "react";

function ContactUs() {
  return (
    <div className="bg-gray-100 min-h-screen">

  
      {/* Contact Form */}
      <div className="bg-white py-16">
        
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Send Us a Message
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="message" className="block text-lg font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
          <div className="space-y-4">
            <details className="bg-white shadow-md rounded-lg p-4">
              <summary className="cursor-pointer text-lg font-medium">
                How can I track my order?
              </summary>
              <p className="mt-2 text-gray-700">
                You can track your order by logging into your account and
                navigating to the "My Orders" section.
              </p>
            </details>
            <details className="bg-white shadow-md rounded-lg p-4">
              <summary className="cursor-pointer text-lg font-medium">
                What is your return policy?
              </summary>
              <p className="mt-2 text-gray-700">
                We accept returns within 30 days of purchase. The product must
                be in its original condition.
              </p>
            </details>
            <details className="bg-white shadow-md rounded-lg p-4">
              <summary className="cursor-pointer text-lg font-medium">
                How can I contact customer support?
              </summary>
              <p className="mt-2 text-gray-700">
                You can email us at support@ecommerce.com or call us at +1 123
                456 7890.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345090643!2d-122.4216583846811!3d37.774929779759746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cbaae6eeb%3A0xe8037ed57c246a1f!2sE-Commerce%20HQ!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="border rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
