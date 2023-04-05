import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartItemCounter from "./CartItemCounter";

import "./CartContent.css"

const CartElements = () => {
    const { cart, setCart } =useContext(dataContext)

    const deleteProducts = (id) => {
        const foundId = cart.find((element) => element.id === id)

        const newCart = cart.filter((element) => {
          return element !== foundId
        })

        setCart(newCart)
    }
  return cart.map((products)=> {
    return (
        <div className="cartContent" key={products.id}>
            <img src={products.img} alt="product" />
            <h3 className="name">{products.name} </h3>
            <CartItemCounter products={products} quanty={products.quanty} />
            <h4 className="name">{products.price * products.quanty} $</h4>
            <button className="delete-cart" onClick={() => deleteProducts(products.id)}>X</button>
        </div>
    )
  })
}

export default CartElements
