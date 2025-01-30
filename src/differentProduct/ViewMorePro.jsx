import React, { useContext, useState } from "react";
import { data } from "../data/data";
import { cartContext } from "../context/UseContextData";
import Range from "./Range";
import { FaBars } from "react-icons/fa";

const ViewMorePro = () => {
  const { addToCart } = useContext(cartContext);
  const [filteredProduct, setFilteredProduct] = useState(data);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate paginated data
  const totalItems = filteredProduct.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProduct.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle page change
  const changePage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Filter products by category
  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredProduct(data);
    } else {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredProduct(filtered);
      setCurrentPage(1); // Reset to the first page
    }
  };

  // Filter products by price range
  const handleRangeChange = (min, max) => {
    const filtered = data.filter((item) => item.price >= min && item.price <= max);
    setFilteredProduct(filtered);
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className="w-full   relative mx-auto bg-white">
      <div className="flex  lg:w-[1200px] py-5 my-5 mx-auto">
        {/* Sidebar Toggle Button (Only for Mobile) */}
        <button
          className="lg:hidden h-10 relative  left-2 z-50 bg-gray-200 p-2 rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars className="text-2xl text-gray-700" />
        </button>

        {/* Left Side: Filters */}
        <div
          className={`   mt-4 h-[600px] bg-white transition-transform duration-300 lg:translate-x-0 ${
            isSidebarOpen ? "-translate-x-10" : "-translate-x-[120%]"
          }  lg:static top-0 left-0 lg:flex lg:flex-col p-5 shadow-md z-40`}
        >
          <h1 className="font-bold">All Categories</h1>
          <div className="flex flex-col gap-5">
            {["All", "Fresh Fruit", "Vegetable", "Cooking", "Snacks", "Beverages", "Beauty and Health", "Bread and Bakery"].map((category) => (
              <label key={category}>
                <input
                  type="radio"
                  name="category"
                  onChange={() => handleFilter(category)}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>

          {/* Price Range Slider */}
          <div className="mt-5">
            <Range min={0} max={1000} getRange={handleRangeChange} />
          </div>
        </div>

        <div className="relative -left-[360px] lg:left-0 w-[300px]   lg:w-[800px] top-6 ">
        {/* Right Side: Product Cards */}
          <div className="flex flex-wrap gap-5 justify-center">
            {paginatedProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white border shadow-md rounded-lg p-3 w-[400px] lg:w-[180px] h-[280px] flex flex-col items-center hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[160px] h-[120px] object-cover rounded-md"
                />
                <h1 className="text-center mt-2 text-lg font-semibold text-gray-700">
                  {item.title}
                </h1>
                <p className="text-sm text-gray-500 mt-1">${item.price}</p>
                <p>{item.rating}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-auto bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-5 gap-3">
            {/* Previous Arrow */}
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded ${
                currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            <span className="font-semibold  w-[90px] text-gray-700">
              Page {currentPage} of {totalPages}
            </span>

            {/* Next Arrow */}
            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded ${
                currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMorePro;
