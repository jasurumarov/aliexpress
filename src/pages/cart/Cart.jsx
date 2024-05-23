import React from 'react'
import CartContent from '../../components/cartContent/CartContent'
import useStore from '../../context/store'
import Empty from '../../components/empty/Empty'

const Cart = () => {
  let cart = useStore(state => state.cartList)

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