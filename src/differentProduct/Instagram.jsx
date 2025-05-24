import React, { useState } from 'react'
import CompanyLogo from '../assets/CompanyLogo.png'
import { data } from '../data/data'
const Instagram = () => {
  const [product,setProduct]=useState(data)
  return (
    <div className='pb-10   bg-[#E6E6E6]'>
      <div className='mx-auto w-[300px] lg:w-[1180px] '>
        <img src={CompanyLogo} alt="" />
      </div>

      {/* insta wala seen start here---------------------- */}
      <div className='' >
        <h1 className='text-3xl lg:text-3xl font-bold flex justify-center mb-10'>Related Products </h1>
        <div className="lg:w-[1180px] w-[300px] mx-auto flex-wrap lg:flex gap-4">
  {product.slice(1, 6).map((i, index) => (
    <div key={index} className="relative mx-auto m-5 lg:m-5 w-48 h-48 bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={i.img} alt="" className="w-full h-full object-cover" />
     
    </div>
  ))}
</div>

      </div>
      {/* insta wala seen start here---------------------- */}
    </div>
  )
}

export default Instagram
