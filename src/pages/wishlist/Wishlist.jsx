import React from 'react'
import useStore from '../../context/store'
import Product from '../../components/product/Product'

const Wishlist = () => {
  let wishlist = useStore(state => state.wish)

  return (
    <div>
        <Product data={wishlist}/>
    </div>
  )
}

export default Wishlist