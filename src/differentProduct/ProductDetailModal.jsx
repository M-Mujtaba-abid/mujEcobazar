import React from "react";

const ProductDetailModal = ({ product, closeModal }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal} // Background par click karne par modal close
    >
      <div
        className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg p-6 relative"
        onClick={(e) => e.stopPropagation()} // Modal ke andar click karne se close na ho
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-600 text-xl font-bold"
        >
          &times;
        </button>

        {/* Product Details */}
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between ml-6">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-green-600 font-medium mt-2">In Stock</p>
            <p className="mt-4 text-gray-600">
              Yahan tum product ka description dal sakte ho.
            </p>

            <div className="flex items-center mt-6">
              <span className="text-xl font-bold mr-2">${product.price}</span>
              <span className="text-sm text-gray-500 line-through">$48.00</span>
              <span className="ml-2 text-sm text-red-600">64% Off</span>
            </div>

            <div className="flex items-center mt-4">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 border rounded-lg text-center"
              />
              <button className="ml-4 bg-green-500 text-white px-6 py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
