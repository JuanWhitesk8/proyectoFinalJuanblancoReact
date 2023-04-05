import { useParams } from "react-router-dom"
import styles from './item.css'
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const ProducstItem = ( { products } ) => {
  const { data, cart, setCart, buyProducts} = useContext(dataContext)

  return (
    <div className='container-item'>
        <img className="container-item_img" src={products.img} alt="" />
        <h4> {products.name} </h4>
        <h4> {products.category} </h4>
        <p> {products.description} </p>
        <p>$ {products.price}  </p>
    </div>
  )
}

export default ProducstItem
