import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartItemCounter from "./CartItemCounter";

import "./CartContent.css"

const CartElements = () => {
    const { cart } =useContext(dataContext)
  return cart.map((products)=> {
    return (
        <div className="cartContent" key={products.id}>
            <img src={products.img} alt="product" />
            <h3 className="name">{products.name} </h3>
            <CartItemCounter products={products} quanty={products.quanty} />
            <h4 className="price">{products.price} $</h4>

        </div>
    )
  })
}

export default CartElements
