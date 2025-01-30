import React, { useContext, useState } from "react";
//  import PopularProduct from '../differentProduct/bv'
import { data } from "../data/data"; // Importing product data
import { cartContext } from "../context/UseContextData"; // Importing the cart context
import { Link } from "react-router-dom";

const PopularProduct = () => {
  const [product, setProduct] = useState(data); // State to manage the product list
  const { cart, addToCart, removeFromCart } = useContext(cartContext); // Using context for cart functionalities
  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage the selected product for the modal

  // Function to check if a product is already in the cart
  const isInCart = (id) => cart.some((item) => item.id === id);

  // Function to open the modal and set the selected product
  const openModal = (product) => {
    setSelectedProduct(product);  
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className=" bg-[#E6E6E6] h-full pt-5">
      <h1 className="w-[300px]  my-5 text-3xl font-bold ml-10">Popular Product</h1>
      <div className="lg:w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-2">
  {product.slice(0, 10).map((i, index) => (
    <div
      key={index}
      className="bg-white text-left border shadow-md w-full h-[337px] flex flex-col cursor-pointer"
      onClick={() => openModal(i)}
    >
      <img
        src={i.img}
        alt={i.title}
        className="w-full h-[240px] object-cover rounded-md"
      />
      <div className="p-2">
        <h1 className="text-gray-400 text-sm font-medium">{i.title}</h1>
        <p className="mt-1 text-lg font-bold text-black-500">${i.price}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <span className="text-yellow-500 text-[10px ]">
              {"⭐".repeat(Math.round(i.rating || 0))}
            </span>
            <span className="ml-2 lg:text-sm text-[10px] text-gray-500">
              {`(${i.rating})`}
            </span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


      {/* Modal */}
      <div className="w-[300px] lg:w-[1180px]">
 
  <div>
  {selectedProduct && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-[25%] sm:w-[400px] md:w-[500px] lg:w-[50%] p-5 relative -left-[410px] lg:-left-0 max-h-[90vh] overflow-y-auto">
        {/* Close Modal Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          ✖
        </button>

        {/* Modal Content */}
        <img
          src={selectedProduct.img}
          alt={selectedProduct.title}
          className="w-full h-48 md:h-64 object-cover rounded-md"
        />
        <h1 className="text-lg md:text-2xl font-bold mt-4">{selectedProduct.title}</h1>
        <p className="mt-2 text-sm md:text-lg text-gray-700">${selectedProduct.price}</p>
        <p className="text-xs md:text-sm text-gray-500 mt-1">
          Rating: {selectedProduct.rating} ⭐
        </p>

        {/* Add to Cart from Modal */}
        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => {
            addToCart(selectedProduct);
            closeModal();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )}
</div>

</div>



<div className="mx-auto w-[300px]">
  
<Link 
to="/ViewMoreProduct"
className=" mt-5 px-6 py-3 bg-white text-green-500 font-semibold rounded-full items-center  w-[300px] shadow-md flex justify-center space-x-2 hover:bg-green-100">
    <span>Shop Now</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h14" />
    </svg>
  </Link>
</div>
    </div>
  );
};

export default PopularProduct;
