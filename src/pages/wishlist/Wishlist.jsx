import React from 'react'
import Product from '../../components/product/Product'
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'

const Wishlist = () => {
  let wishlist = useSelector(state => state.wishlist)

  return (
    <div>
      {
        wishlist.length
          ?
        <Product data={wishlist}/>
          :
        <Empty/>
      }
    </div>
  )
}

export default Wishlist