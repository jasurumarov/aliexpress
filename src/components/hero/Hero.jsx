import React from 'react'
import HeroImg from '../../images/hero-img.webp'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className="container">
            <div className="hero-section__content">
                <img src={HeroImg} alt="hero img" />
                <div className="hero__title">
                    <h1>ONE PRICE</h1>
                    <p>For orders from 3 to 10 items</p>
                    <button>
                        buy
                        <MdOutlineKeyboardArrowRight/>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero