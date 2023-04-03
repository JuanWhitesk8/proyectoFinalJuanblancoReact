import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({ products, quanty }) => {
    const { buyProducts} = useContext(dataContext);
  return (
    <>
        <p className='counter-button'>-</p>
        <p> {quanty} </p>
        <p className='counter-button' onClick={()=> buyProducts(products)} >+</p>
   </>
  )
}

export default CartItemCounter
