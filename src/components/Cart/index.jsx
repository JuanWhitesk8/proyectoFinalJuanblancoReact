import React from 'react'
import { useCartContex } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import './Cart.css'



const Cart = () => {
  const { cart, totalPrice } = useCartContex()

  const order ={
    buyer: {
      name:'Andrea',
      email: 'andrea2023@gmail.com',
      phone: '3101234567',
      address: 'bogota - oficina'
    },
    items: cart.map(product => ({ id: product.id, tittle: product.name, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () => {
      const db = getFirestore()
      const orderCollection = collection(db, 'orders')
      addDoc(orderCollection, order)
        .then(({ id }) => console.log(id) )


  }





  if (cart.length === 0) {
    return (
      <>
      <div className='cart-empy'>
        <p>TU CARRITO ESTA VACIO</p>
        <Link className='link-buy' to="/">Comprar Ahora</Link>
      </div>
      </>
    )
  }

  return (
    <>
    <div className='tittle-cart'>
      <h2>Tu Pedido</h2>
    </div>
      {
        cart.map(product => <CartItem key={product.id} product={product} />)
      }  
      <div className='container-total'>
          <p className='total-price'>
            TOTAL: ${totalPrice()}
          </p>
          <button onClick={handleClick}>Pagar</button>
      </div>
    </>
  )
}

export default Cart
