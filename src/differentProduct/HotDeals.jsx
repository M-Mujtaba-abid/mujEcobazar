import React from 'react'
import {data}  from '../data/data'

const HotDeals = () => {
  return (
    <div className="bg-[#F7F7F7] h-full pt-5 pb-10 ">
    <h1 className="my-5 text-3xl font-bold ml-10">Hot Deals </h1>
    <div className="w-full lg:max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0">
      {data.map((i, index) => (
        <div
          key={index}
          className={`${
            index === 0
              ? "col-span-2 row-span-2 lg:w-[528px] h-[674px]"
              : "lg:w-[240px] h-[337px]"
          } bg-white text-left border shadow-md flex flex-col justify-between`}
        >
          <img
            src={i.img}
            alt={i.title}
            className={`${
              index === 0 ? "lg:w-[528px] h-[480px]" : "w-[100px] h-[100px] lg:w-[264px] lg:h-[240px]"
            } object-cover rounded-md mx-auto`}
          />
          <div className="p-2">
            <h1 className="text-gray-400 text-sm font-medium">{i.title}</h1>
            <p className="mt-1 text-lg font-bold text-black-500">${i.price}</p>
            <div className="flex justify-between items-center mt-2">
              {/* Stars and Rating aligned to the left */}
              <div className="flex items-center">
                <span className="text-yellow-500">
                  {"⭐".repeat(Math.round(i.rating))}
                </span>
                <span className="ml-2 text-sm text-gray-500">{`(${i.rating})`}</span>
              </div>
              {/* Add to Cart Icon aligned to the right */}
              <button className="text-green-500 hover:text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.341 3.436M7.25 14.25h9.5m1.569-5.486l1.181 6.493A2.25 2.25 0 0115.784 18H8.216a2.25 2.25 0 01-2.216-1.743L4.82 9.764m15.325-3.857H6.897M5.25 21a.75.75 0 100-1.5.75.75 0 000 1.5zm13.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default HotDeals
