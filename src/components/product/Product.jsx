import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleWishlist } from '../../lib/action/action'
import { addToCart } from '../../lib/action/action'

// Images
import { FaRegHeart, FaStar, FaHeart } from 'react-icons/fa6'
import { GrCart } from 'react-icons/gr'
import { toast } from 'react-toastify'

const Product = ({ data, loading }) => {
    let wishlist = useSelector(state => state.wishlist)
    const dispatch = useDispatch()

    let products = data?.map(el => (
        <div key={el.id} className="products__card">
            <div className="product-card__img">
                <img src={el.images[0]} alt="product img" />
            </div>
            <p title={el.description}>{el.description}</p>
            <h5><span><FaStar /> {Math.round(el.rating)}</span> <span>{el.stock} ta xarid</span></h5>
            <div className='product-card__prices'>
                <h3>${(el.price).brm()}</h3>
                <article>
                    <button onClick={() => dispatch(toggleWishlist(el))}>
                        {
                            wishlist?.some(item => item.id === el.id)
                                ?
                                <FaHeart style={{ color: "red" }} />
                                :
                                <FaRegHeart />
                        }
                    </button>
                    <button onClick={() => {
                        dispatch(addToCart(el))
                        toast.success("Product has been added to cart")
                    }}><GrCart /></button>
                </article>
            </div>
        </div>
    ))

    let loadingSize = Array(12).fill("")

    let loadingItem = loadingSize.map((el, i) => (
        <div key={i} className="products__card">
            <div className="product-card__img">
            </div>
            <p></p>
            <h5></h5>
            <div className='product-card__prices'>
                <h3></h3>
                <article>
                    <button>
                    </button>
                    <button></button>
                </article>
            </div>
        </div>
    ))
    return (
        <section className='products-section'>
            <div className="container">
                <div className="products-section__content">
                    {
                        loading ?
                        <div className="loading">
                            {loadingItem}
                        </div>
                        :
                        products
                    }
                </div>
            </div>
        </section>
    )
}

export default Product