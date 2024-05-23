import React from 'react'
import useStore from '../../context/store'
import Product from '../../components/product/Product'
import Empty from '../../components/empty/Empty'

const Wishlist = () => {
  let wishlist = useStore(state => state.wish)

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