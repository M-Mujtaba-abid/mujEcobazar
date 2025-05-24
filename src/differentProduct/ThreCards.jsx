import React from 'react'
import first from '../assets/threecard/first.jpg'
import second from '../assets/threecard/second.jpg'
import third from '../assets/threecard/third.jpg'
import { useNavigate } from 'react-router-dom'
const ThreCards = () => {
  const navigate=useNavigate()
   
const gotoShoping=()=>{
  // alert("click")
  navigate("/ViewMoreProduct")
}
    
  return (


<div className="bg-[#E6E6E6] flex justify-center items-center py-10">
  <div  className="flex flex-col lg:flex-row justify-between flex-wrap items-center gap-6 w-full max-w-[1180px] px-4">
    
    {/* Card 1 */}
    <div className="relative w-full lg:w-[32%] h-[300px] lg:h-[424px]">
      <img
        src={first}
        alt="Card 1"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 rounded-md p-4">
        <h1 className="text-white text-lg font-semibold">BEST DEALS</h1>
        <h1 className="text-white text-2xl font-bold">Sales of the Month</h1>
        <button onClick={gotoShoping} className="mt-5 px-6 py-3 bg-white text-green-500 font-semibold rounded-full shadow-md flex items-center space-x-2 hover:bg-green-100">
          <span>Shop Now</span>
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative w-full lg:w-[32%] h-[300px] lg:h-[424px]">
      <img
        src={second}
        alt="Card 2"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 rounded-md p-4">
        <h1 className="text-white text-lg font-semibold">BEST FAT FREE</h1>
        <h1 className="text-white text-2xl font-bold">Low-Fat Meat</h1>
        <h1 className="text-white">Started at <span className="text-orange-400">$799.99</span></h1>
        <button onClick={gotoShoping} className="mt-5 px-6 py-3 bg-white text-green-500 font-semibold rounded-full shadow-md flex items-center space-x-2 hover:bg-green-100">
          <span>Shop Now</span>
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="relative w-full lg:w-[32%] h-[300px] lg:h-[424px]">
      <img
        src={third}
        alt="Card 3"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 rounded-md p-4">
        <h1 className="text-white text-lg font-semibold">BEST FAT FREE</h1>
        <h1 className="text-white text-2xl font-bold">Low-Fat Meat</h1>
        <h1 className="text-white mt-2">Started at <span className="text-yellow-400 bg-black p-1 rounded-lg">$799.99</span></h1>
        <button onClick={gotoShoping} className="mt-5 px-6 py-3 bg-white text-green-500 font-semibold rounded-full shadow-md flex items-center space-x-2 hover:bg-green-100">
          <span>Shop Now</span>
        </button>
      </div>
    </div>

  </div>
</div>

)
}

export default ThreCards
