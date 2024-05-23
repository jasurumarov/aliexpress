import React from 'react'
import useStore from '../../context/store'

// Images
import { FaRegHeart, FaStar, FaHeart } from 'react-icons/fa6'
import { GrCart } from 'react-icons/gr'

const Product = ({ data, loading }) => {
    let handleHeart = useStore(state => state.toggleHeart)
    let handleAddToCart = useStore(state => state.addToCart)

    let wishlist = useStore(state => state.wish)

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
                    <button onClick={() => handleHeart(el)}>
                        {
                            wishlist?.some(item => item.id === el.id)
                                ?
                                <FaHeart style={{ color: "red" }} />
                                :
                                <FaRegHeart />
                        }
                    </button>
                    <button onClick={() => handleAddToCart(el)}><GrCart /></button>
                </article>
            </div>
        </div>
    ))
    return (
        <section className='products-section'>
            <div className="container">
                <div className="products-section__content">
                    {products}
                </div>
            </div>
        </section>
    )
}

export default Product