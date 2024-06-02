import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeFromCart, incCartQty, decCartQty } from '../../lib/action/action'

// Images
import { BsTrash3 } from 'react-icons/bs'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const CartContent = () => {
    let cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    let cartItem = cart?.map(el => (
        <div key={el.id} className="cart__list-item">
            <div className="cart__list-item__img">
                <img src={el.images[0]} alt="product img" />
            </div>
            <div className="cart__list-item__title">
                <h3 title={el.title}>{el.title}</h3>
                <p title={el.description}>{el.description}</p>
            </div>
            <div className="cart__list-item__quantity">
                <button disabled={el.quantity <= 1} onClick={() => dispatch(decCartQty(el))}><FaMinus /></button>
                <span>{el.quantity}</span>
                <button onClick={() => dispatch(incCartQty(el))}><FaPlus /></button>
            </div>
            <div className="cart__list-item__prices">
                <del>{(el.price * 1.4).brm()}$</del>
                <h3>{(el.price).brm()}$</h3>
            </div>
            <button onClick={() => dispatch(removeFromCart(el))} className="cart__list-item__delete"><BsTrash3 /></button>
        </div>
    ))

    let checkoutProducts = cart?.map(el => (
        <article key={el.id}><img src={el.images[0]} alt="" /></article>
    ))

    let totalPrice = cart?.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    return (
        <div className='cart-section'>
            <div className="container">
                <div className="cart-wrapper">
                    <section className='cart-section__content'>
                        <div className="cart__title">
                            <h1>Cart</h1>
                            <button onClick={() => dispatch(clearCart())}><BsTrash3 /></button>
                        </div>
                        <div className="cart__list">
                            {cartItem}
                        </div>
                    </section>
                    <aside className='cart-section__aside'>
                        <h2>Place an order</h2>
                        <div className="cart__aside-box">
                            <div className="cart__aside-box__img">
                                {checkoutProducts}
                            </div>
                            <ul>
                                <li>
                                    <p>{cart.length} items</p>
                                    <p>{(totalPrice).brm()}$</p>
                                </li>
                                <li>
                                    <p>Delivery</p>
                                    <p>16$</p>
                                </li>
                                <button>
                                    Checkout
                                    <span>{(totalPrice + 16).brm()}$ <MdOutlineKeyboardArrowRight /></span>
                                </button>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default CartContent