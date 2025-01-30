import React from 'react'
import {cartContext} from '../context/UseContextData'
import PopularProduct from '../differentProduct/PopularProduct'

const Product = () => {

    const {addtocart}=useContext(cartContext)
    

  return (
    <div>
        <PopularProduct 
        // key={product.id}
            type={"product"}
            // product={product}
            addtocart={addtocart} />
      
    </div>
  )
}

export default Product
