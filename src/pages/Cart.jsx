import React, { useContext } from "react";
import { cartContext } from "../context/UseContextData";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(cartContext);

  return (
  <div className="bg-gray-100">
      <div className="p-6  mx-auto lg:w-[1100px]">
      <h2 className="text-3xl font-bold mb-4 text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center mt-16">
          <p className="text-xl text-gray-500">Your cart is empty.</p>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 border-b last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.img} // Make sure `item.image` exists in your data
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg lg:w-full w-[250px]">{item.title}</h3>
                    <p className="text-gray-500 text-sm">
                      Quantity: {item.quantity || 1}
                    </p>
                  </div>
                </div>
                <div>
                  <span className=" ml-5  text-lg font-bold text-gray-800">
                    ${item.price}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 ml-4 rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right">
            <h3 className="text-2xl mb-4 font-semibold">
              Total: $
              {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </h3>
            <Link
            to="/CheckoutPage " 
            
            className=" bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default Cart;
