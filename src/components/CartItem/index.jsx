import React from 'react'
import './CartItem.css'
import { useCartContex } from '../../context/CartContext'

const cartItem = ({ product }) => {

    const { removeProduct } = useCartContex()

  return (
    <>
    <div className='itemCart'>
        <img src={product.img} alt={product.name} />
        <div className='element'>
            <p>Titulo: {product.name} </p>
            <p>Cantidad: {product.quantity} </p>
            <p>precio: {product.price} </p>
            <p>Subtotal: ${product.quantity * product.price} </p>
            <button onClick={() => removeProduct(product.id) } >Eliminar</button>
        </div>
      
    </div>
    </>
  )
}

export default cartItem
