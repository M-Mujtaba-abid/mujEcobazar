import React, { useState } from 'react'
import { data } from '../data/data'
import featureBanner from "../assets/featureBanner.jpg"
const FeatureProductBanner = () => {
    const [product,setProduct]=useState(data)
  return (
    <div className='bg-[#E6E6E6] pb-10 h-full'>
      {/* bannaer satrt from here  */}
     <div>
  
  <div className="bg-[#E6E6E6] h-full flex items-center justify-center py-10">
    <div className="relative w-full max-w-[1200px] h-[358px] bg-white flex overflow-hidden shadow-lg rounded-lg">
      {/* Image Section */}
      <img
        src={featureBanner}
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* Text Section Overlay */}
      <div className="absolute inset-0  flex flex-col justify-center items-start lg:items-start px-6 lg:px-10 lg:ml-[700px]">
        <h1 className="text-white text-xl sm:text-2xl">SUMMER SALE</h1>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          <span className="text-orange-500">37%</span> OFF
        </h1>
        <p className="mt-4 text-sm sm:text-lg text-gray-200 max-w-[300px]">
          Add some descriptive text here to explain the content or purpose of
          the banner. Customize it as per your needs.
        </p>
        <button className="mt-5 px-6 py-3 bg-[#00B207] w-[160px] text-white font-semibold rounded-full shadow-md flex items-center space-x-2 hover:bg-green-600">
          <span>Shop Now</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h14" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

  {/* Banner End */}
  {/* cards start here-------------------- */}
  
  <div>
  <div className="">
    <h1 className="my-5 text-3xl font-bold ml-10">Featured Product</h1>
    <div className="w-full lg:max-w-[1200px] p-1 lg:p-0 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {product.slice(0, 5).map((i, index) => (
            <div
                key={index}
                className="bg-white text-left border shadow-md lg:w-[240px] h-[337px] flex flex-col justify-between"
            >
                <img
                    src={i.img}
                    alt={i.title}
                    className="w-[264px] h-[240px] object-cover rounded-md mx-auto"
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

  </div>
  {/* cards end here-------------------- */}

{/* three card start here-------------------------- */}

    <h1 className='font-bold text-3xl mx-auto flex justify-center my-10'>Latest News</h1>
<div className='lg:flex  p-5 lg:p-0  lg:w-[1180px] mx-auto items-center justify-center gap-5'>
    {product.slice(0,3).map((i)=>(
       <div className="max-w-sm mt-5 lg:mt-0 mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
       {/* Image Section */}
       <div className="relative">
         <img
           src={i.LatestNaew}
           alt="Card Image"
           className="lg:w-full h-48 object-cover"
         />
         {/* Calendar Overlay */}
         <div className="absolute bottom-4 left-4 bg-white text-white px-3 py-1 text-sm rounded">
           <h1 className='font-bold text-black '> 23</h1> 
           <span className='text-gray-500'>Jan</span>
         </div>
       </div>
     
       {/* Icons Section */}
       <div className="flex items-center justify-between px-4 py-3 border-b ">
         <div className="flex items-center space-x-1">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="w-5 h-5 text-green-500"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
             strokeWidth={2}
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M5 13l4 4L19 7"
             />
           </svg>
           <span className="text-sm text-gray-600">Food</span>
         </div>
         <div className="flex items-center space-x-1">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="w-5 h-5 text-blue-500"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
             strokeWidth={2}
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M17 20h5v-2a2 2 0 00-2-2h-3v4zm-5 0v-4a4 4 0 10-8 0v4h8zM12 12a4 4 0 110-8 4 4 0 010 8z"
             />
           </svg>
           <span className="text-sm text-gray-600">By Admin</span>
         </div>
         <div className="flex items-center space-x-1">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="w-5 h-5 text-yellow-500"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
             strokeWidth={2}
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-8 6h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v13a2 2 0 002 2z"
             />
           </svg>
           <span className="text-sm text-gray-600">Comments</span>
         </div>
       </div>
     
       {/* Description Section */}
       <div className="px-4 py-3">
         <p className="text-gray-600 text-sm">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim
           veniam.
         </p>
         <div className="mt-3 flex items-center text-green-500 font-medium">
           <button className="flex items-center space-x-1 hover:underline">
             <span>Read More</span>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="w-5 h-5"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth={2}
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 d="M13 5l7 7-7 7M5 5l7 7-7 7"
               />
             </svg>
           </button>
         </div>
       </div>
     </div>
     
      
    ))}
</div>


{/* three card ends here-------------------------- */}
    
    </div>
  )
}

export default FeatureProductBanner
