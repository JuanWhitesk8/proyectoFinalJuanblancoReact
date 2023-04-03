import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElements"
import CartTotal from "./CartTotal";

const CartContent = () => {
  const { cart } =useContext(dataContext)

  
  return cart.length > 0 ? (
  <>
  <div className="objet-cart">
    <CartElements />;
    <CartTotal />;
  </div>
  </>
  ): (
    <h2 className="cart-message-center">Tu Carrito esta vacio</h2>
  );
}

export default CartContent
