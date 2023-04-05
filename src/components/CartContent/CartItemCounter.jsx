import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({ products, quanty }) => {
    const { cart, setCart, buyProducts} = useContext(dataContext);


    const decrese = () => {
      const productrepeat = cart.find((item) => item.id === products.id)

      productrepeat.quanty !== 1 && setCart(cart.map((item)=> item.id === products.id ? {...products, quanty: productrepeat.quanty - 1 } : item))
    }
  return (
    <>
        <button className='counter-button' onClick={decrese}>-</button>
        <p className="name"> {quanty} </p>
        <button className='counter-button' onClick={()=> buyProducts(products)} >+</button>
   </>
  )
}

export default CartItemCounter
