import { Link } from 'react-router-dom'
import styles from './card.css'

const Card = ({ producto }) => {

  return (
    <Link to= {`${producto.id}`} >
      <div className='container'>
        <img src={producto.image} alt="" />
        <h4> {producto.title} </h4>
        <p>$ {producto.price}  </p>
      </div>
    </Link>
  )
}

export default Card
