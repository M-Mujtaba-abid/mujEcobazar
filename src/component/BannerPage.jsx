import React from 'react';
import Delivery from '../assets/delivery-truck 1.png';
import Frame from '../assets/Frame.png'
import bannerOK from '../assets/banner/img/bannerOK.jpeg'
import rightBGreen from '../assets/banner/img/rightBGreen.jpeg'
import rightUVeg from '../assets/banner/img/rightUVeg.jpeg'
// import data from "..data"
import {data} from '../data/data'

const BannerPage = () => {
  const shippingData = [
    {
      id: 1,
      title: 'Free Shipping',
      description: 'Free Shipping on all your orders',
      img: Delivery
    },
    {
      id: 2,
      title: 'Customer Support 24/7',
      description: 'Free Shipping on all your orders',
      img: Delivery
    },
    {
      id: 3,
      title: '100% Secure Payment',
      description: 'Free Shipping on all your orders',
      img: Delivery
    },
    {
      id: 4,
      title: 'Money-back Guarantee',
      description: 'Free Shipping on all your orders',
      img: Delivery
    }
  ];

  return (
    <div className="bg-[#E6E6E6] p-3 lg:p-0 lg:pt-2">
      {/* Main Banner Section */}
      <div className="lg:flex flec-col justify-center items-center mx-auto lg:h-[600px] lg:w-[1200px] bg-gray-200">
        {/* Left Side: Large Image */}
        <div className="relative  lg:w-[800px] lg:h-[600px]">
        <img src={bannerOK} alt="not found" 
        
            className="lg:w-full lg:h-full object-cover rounded-lg"
        />;
        
          <div className="absolute inset-0 flex flex-col justify-center items-start  bg-black bg-opacity-40 rounded-lg">
            {/* <h1 className="text-4xl font-bold text-white text-center ms-20 ">Fresh & Healthy </h1>
            <h1 className="text-4xl font-bold text-white text-center ms-20">Organic Food</h1> */}
            <img className=' ms-12' src={Frame} alt="" />
          </div>
        </div>

        {/* Right Side: Two Smaller Images */}
        <div className="flex lg:flex-col gap-5 lg:gap-0 justify-between lg:pt-0 pt-4  lg:ml-8">
          {/* Top Image */}
          <div className="relative w-[350px] h-[288px]">
            <img   
              src={rightUVeg}
              alt="Small Banner 1"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-lg">
              <h2 className="text-2xl font-semibold text-white text-center">Top Small Banner</h2>
            </div>
          </div>

          {/* Bottom Image */}
          <div className="relative w-[350px] h-[288px] lg:mt-6">
            <img
              src={rightBGreen}
              alt="Small Banner 2"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-lg">
              <h2 className="text-2xl font-semibold text-white text-center">Bottom Small Banner</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Banner Box */}
      <div className="border bg-white sm:flex gap-16 mt-8 h-[250px] lg:h-[128px] items-center shadow shadow-black rounded-lg justify-center mx-auto w-full lg:w-[1185px] lg:flex block">
  {shippingData.map((item) => (
    <div key={item.id} className="flex lg:mt-0 lg:ms-0 mt-4 ms-10">
      <div className="ms-3 ">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="ms-3">
        <h1 className="text-l font-bold">{item.title}</h1>
        <p className="text-[10px]">{item.description}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default BannerPage;
