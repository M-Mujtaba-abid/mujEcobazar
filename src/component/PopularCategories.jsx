import React from 'react'
import { data } from '../data/data'
import { useNavigate } from 'react-router-dom'

const PopularCategories = () => {
const navigate=useNavigate()
   
const gotoShoping=()=>{
  // alert("click")
  navigate("/ViewMoreProduct")
}
    

  return (
    <>
  <div   className="bg-[#E6E6E6] pt-5">
  <h1 className="my-5 text-3xl font-bold ml-10">Popular Categories   </h1>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-[90%] lg:w-[1185px] mx-auto">
    {data.map((i, index) => (
      <div onClick={gotoShoping}
        key={index}
        className="bg-white text-center border rounded-lg p-4 shadow-md"
      >
        <img
          src={i.img}
          alt=""
          className="w-full h-32 object-cover rounded-md"
        />
        <h1 className="mt-2 text-sm font-medium">{i.title}</h1>
      </div>
    ))}
  </div>
</div>

    </>
  )
}

export default PopularCategories
