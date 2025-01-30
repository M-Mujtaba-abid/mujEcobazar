import React, { createContext, useState, useEffect } from "react";
import toast from 'react-hot-toast';
// Create context
export const cartContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Initialize cart state from localStorage on component mount
  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(existingCart);
  }, []);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingArray = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = existingArray.find((item) => item.id === product.id);

    if (exists) {
      // Update quantity if product exists
      const updatedArray = existingArray.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedArray));
      setCart(updatedArray); // Update React state
    } else {
      // Add new product if it doesn't exist
      const updatedArray = [...existingArray, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedArray));
      setCart(updatedArray); // Update React state
    }

    // alert("Added to cart");
    toast.success("ad to cart")
  };

  // Function to remove a product from the cart
  const removeFromCart = (index) => {
    const existingArray = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedArray = [...existingArray];
    updatedArray.splice(index, 1);

    // Update localStorage and React state
    localStorage.setItem("cart", JSON.stringify(updatedArray));
    setCart(updatedArray);

    // alert("Removed from cart");
    toast.success("SuccsessFully Removed From Cart")
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
};
