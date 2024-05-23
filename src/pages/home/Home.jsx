import React, { memo } from 'react'
import { useFetch } from '../../hooks/useFetch'

// Components
import Product from '../../components/product/Product'
import Hero from '../../components/hero/Hero'

const Home = () => {
  const {data, loading} = useFetch('/products') 
  return (
    <div className='home-page'>
        <Hero/>
        <Product data={data?.data?.products} loading={loading}/>
    </div>
  )
}

export default memo(Home)