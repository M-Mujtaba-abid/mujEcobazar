import React from "react";
import apple from '../assets/footer/apple.png'
import visa from '../assets/footer/visa.png'
import bank from '../assets/footer/bank.png'
import lock from '../assets/footer/lock.png'
import Discover from '../assets/footer/Discover.png'


const Footer = () => {
  return (
    <div className="lg:w-full">
      {/* White Newsletter Section */}
      <div className="bg-white h-[162px] my-9 lg:my-0 lg:flex justify-between items-center px-10">
        <div>
          <h3 className="text-2xl font-bold">Subscribe our Newsletter</h3>
          <p className="text-gray-500 my-1 lg:my-0 lg:w-[420px]">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus 
          </p>
        </div>
        <div className="flex">
          <input
            type="email"
            placeholder="Your email address"
            className="border border-gray-300 px-4 py-2 rounded-l-md w-[150px] lg:w-[300px]"
          />
          <button className="bg-green-500 text-white px-6 py-2 rounded-r-md hover:bg-green-600">
            Subscribe
          </button>
        </div>
        <div className="flex space-x-4 my-4">
          <i className="fab fa-facebook text-green-500 text-xl"></i>
          <i className="fab fa-twitter text-black-500 text-xl"></i>
          <i className="fab fa-pinterest text-gray-400 text-xl"></i>
          <i className="fab fa-instagram text-gray-400 text-xl"></i>
        </div>
      </div>

      {/* Black Footer Section */}
      <div className="bg-black lg:h-[368px] text-white px-10 py-8">
        <div className="grid lg:grid-cols-5 gap-9">
          {/* Brand Info */}
          <div >
            <h2 className="text-green-500 text-2xl font-bold">Ecobazar</h2>
            <p className="text-gray-400 text-sm mt-2 w-[200px]">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <p className="mt-4">
              <span className="block">📞 0333-414046-1</span>
              <span className="block">✉️ mujtabaabid06@...m</span>
            </p>
          </div>

          {/* My Account */}
          <div className="ms-20">
            <h3 className="text-xl font-semibold mb-4">My Account</h3>
            <ul className="text-gray-400 space-y-2">
              <li>My Account</li>
              <li>Order History</li>
              <li>Shopping Cart</li>
              <li>Wishlist</li>
            </ul>
          </div>

          {/* Helps */}
          <div className="ms-20">
            <h3 className="text-xl font-semibold mb-4">Helps</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Contact</li>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Proxy */}
          <div className="ms-20">
            <h3 className="text-xl font-semibold mb-4">Proxy</h3>
            <ul className="text-gray-400 space-y-2">
              <li>About</li>
              <li>Shop</li>
              <li>Product</li>
              <li>Track Order</li>
            </ul>
          </div>

          {/* Categories */}
          <div className="ms-20">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Fruit & Vegetables</li>
              <li>Meat & Fish</li>
              <li>Bread & Bakery</li>
              <li>Beauty & Health</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 lg:flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            Ecobazar eCommerce © 2021. All Rights Reserved By M.Mujtaba 
          </p>
          <div className="flex mt-4  space-x-4">
            <img
              src={apple}
              alt="Apple Pay"
              className="w-[45px] h-[31px]"
            />
            <img
              src={visa}
              alt="Visa"
              className="w-[45px] h-[25px]"
            />
            <img
              src={Discover}
              alt="MasterCard"
              className="w-[45px] h-[25px]"
            />
            <img
              src={bank}
              alt="Secure Payment"
              className="w-[45px] h-[31px]"
            />
            <div className="flex">
            <img
              src={lock}
              alt="Secure Payment"
              className="w-[15px] text-[#FFFFFF] mt-1 h-[15px]"
            />            <span>Secure</span>

            {/* <h1 className="inline">Payment</h1> */}
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
