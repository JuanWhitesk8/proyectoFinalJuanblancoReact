import { useParams } from "react-router-dom"
import styles from './item.css'

const ProductItem = ( { productos } ) => {
    const { id } = useParams()
    const producto = productos.find((producto) => producto.id == id)

  return (
    <div className='container-item'>
        <img className="container-item_img" src={producto.image} alt="" />
        <h4> {producto.title} </h4>
        <h4> {producto.category} </h4>
        <p> {producto.description} </p>
        <p>$ {producto.price}  </p>
        <p>Rating: {producto.rating.rate} </p>
    </div>
  )
}

export default ProductItem
