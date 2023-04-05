import { Link } from 'react-router-dom'
import './card.css'
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const Card = ({ products }) => {
  const { data, cart, setCart, buyProducts} = useContext(dataContext)


  return (
    <div >
    
      <div className='container' >
        <Link to= {`${products.id}`} >
          <img src={products.img} alt="" />
          </Link>
        <h4 className='names'> {products.name} </h4>
        <p className='prices'>$ {products.price}  </p>
        <button onClick={()=> buyProducts(products)}>Comprar</button>
      </div>
    
    </div>
  )
}

export default Card
