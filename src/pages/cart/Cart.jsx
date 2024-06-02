import React from 'react'
import CartContent from '../../components/cartContent/CartContent'
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'

const Cart = () => {
  let cart = useSelector(state => state.cart)

  return (
    <div>
      {
        cart.length
          ?
        <CartContent />
          :
        <Empty/>
      }

    </div>
  )
}

export default Cart