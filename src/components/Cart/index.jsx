import React from 'react'
import { useCartContex } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem'
import { addDoc, collection, getFirestore } from 'firebase/firestore'



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
        <p>Tu Carrito esta vacio</p>
        <Link to="/">Comprar Ahora</Link>
      </>
    )
  }

  return (
    <>
      {
        cart.map(product => <CartItem key={product.id} product={product} />)
      }  
      <p>
        total: ${totalPrice()}
      </p>
      <button onClick={handleClick}>Comprar</button>
    </>
  )
}

export default Cart
