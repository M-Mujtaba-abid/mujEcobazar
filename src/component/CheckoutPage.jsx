import React, { useContext, useState } from "react";
import { cartContext } from "../context/UseContextData";

const CheckoutPage = () => {
  const { cart, removeFromCart } = useContext(cartContext);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty. Add some items before checking out.");
      return;
    }

    console.log("Order Submitted:", customerDetails);
    alert("Order placed successfully! Thank you for your purchase.");
    setCustomerDetails({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <div className="bg-[#E6E6E6] min-h-screen p-5">
      <h1 className="text-3xl font-bold mb-5">Checkout</h1>
      <div className="max-w-[1200px] mx-auto bg-white rounded-lg shadow-lg p-5">
        <h2 className="text-xl font-semibold mb-5">Your Cart</h2>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex border shadow-md p-4 bg-gray-50 rounded-lg"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="ml-4 flex-grow">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                    <button
                      className="mt-2 text-red-500 hover:text-red-700 text-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total and Form */}
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Cart Summary */}
              <div className="border-t pt-5">
                <h3 className="text-xl font-semibold">Order Summary</h3>
                <p className="mt-2 text-lg">
                  Total Items: <span className="font-medium">{cart.length}</span>
                </p>
                <p className="text-lg">
                  Total Price: <span className="font-medium">${calculateTotal()}</span>
                </p>
              </div>

              {/* Customer Details Form */}
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 p-5 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">Customer Details</h3>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={customerDetails.name}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={customerDetails.email}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={customerDetails.phone}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={customerDetails.address}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Enter your address"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 w-full"
                >
                  Place Order
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="text-center bg-white py-10 px-5 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">
              Your cart is empty!
            </h2>
            <p className="text-gray-500 mt-2">
              Browse products and add them to your cart.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
