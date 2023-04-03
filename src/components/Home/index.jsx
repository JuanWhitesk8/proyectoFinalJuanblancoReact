import React from 'react'
import './home.css'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'

const Home = () => {
  return (
    <>
      <Banner />
      <div className='product-card-container' ><Products /></div>
    </>
  )
}

export default Home

