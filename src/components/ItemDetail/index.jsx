import React from 'react'
import './ItemDetail.css'
import { useCartContex } from '../../context/CartContext'
import ItemCount from '../ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({ data }) => {

  const [goToCart, setGotoCart] = useState(false)
  const { addProduct } = useCartContex()

  const onAdd = (quantity) => {
    setGotoCart(true)
    addProduct(data, quantity)
  }

  return (
    <div className='container-detail'>
        <div className='detail'>
            <img className='detail_img' src={data.img} alt="ropa" />
            <div className='content'>
                <h3 className='content-tittle'> {data.name} </h3>
                <h4 className='content-category'> {data.category} </h4>
                <h3 className='content-description'> {data.description} </h3>
                {
                  goToCart
                  ? <Link to="/cart" className='go-to-cart'> <button> Terminar compra </button></Link>
                  :<ItemCount initial={1} stock={30} onAdd={onAdd} />
                }
                
            </div>
        </div>
      
    </div>
  )
}

export default ItemDetail
