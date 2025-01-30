import React, { useState } from 'react'
import { data } from '../data/data'
import VectorClient from '../assets/VectorClient.png'
const ClientTestominals = () => {
    const [product,setProduct]=useState(data)
  return (
   <>
   <div className='bg-[#F7F7F7] '>
        <h1 className='text-3xl w-[1170px]  mx-auto   py-5 pl-12 font-bold'>Client Testominals</h1>
   <div className='lg:flex gap-5 p-2 lg:p-0 lg:w-[1170px]  mx-auto justify-center' >
{product.slice(0,3).map((i)=>(
       <div className="max-w-sm rounded-lg shadow-lg bg-white mb-6">
       <div className="p-5">
        <p><img src={VectorClient} alt="" /></p>
         <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ratione libero fuga pariatur laudantium, laboriosam itaque facilis doloremque aut placeat aliquid iusto dolor cum labore at. Officiis laboriosam ut excepturi!</p>
         <div className="flex items-center mt-5">
           <div className="w-10 h-10 rounded-full overflow-hidden">
             <img src={i.img} alt={i.title} className="w-full h-full object-cover" />
           </div>
           <div className="ml-4">
             <h4 className="font-bold text-xl">{i.title}</h4>
             <p className="text-sm text-gray-500">customer </p>
           </div>
         </div>
       </div>
       <div 
       className="relative   left-[70px] "
       >
  
  
     <div className="flex  items-center">
      <span className="text-yellow-500">
          {"⭐".repeat(Math.round(i.rating))}
      </span>
      {/* <span className="ml-2 text-sm text-gray-500">{`(${i.rating})`}</span> */}
  </div>
</div>

     </div>
))}      
    </div>
   </div>
   </>
  )
}

export default ClientTestominals
