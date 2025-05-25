import React from 'react'
import plant from '../assets/plant.jpg';
import { Link } from 'react-router-dom';

const LogoNavbar = () => {
  return (
    <div>
      <nav className="bg-white w-[350px] lg:w-[1200px] border-gray-200 dark:bg-gray-900 lg:mx-7">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center mx-auto lg:mx-start ml-5 space-x-3 rtl:space-x-reverse">
            <img src={plant} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap ">Ecobazar</span>
          </Link>

          {/* Search and Cart Section (Responsive) */}
          <div className="flex items-center space-x-4">
            {/* Search Input */}
            <div className="relative w-[200px] mt-5 mb-2 lg:w-[400px] ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="lg:w-full w-[200px]  p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0  px-4 text-white bg-[#00B207] rounded-r-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 ml-5 text-sm"
              >
                Search
              </button>
            </div>

            {/* Cart Section */}
            <div className="flex  items-center space-x-3">
              <i className="fa-regular fa-heart fa-2x"></i>
              <div className="border-r-2 border-gray-400 h-6" />
              <Link to="/cart">
                <i className="  fa-solid fa-bag-shopping fa-2x"></i>
              </Link>
              <div className="hidden lg:block">
                <span className="text-gray-600">Shopping cart</span>
                <h1 className="font-bold">$57.00</h1>
              </div>
            </div>
          </div>

       
        </div>
      </nav>
    </div>
  );
};

export default LogoNavbar;
