
import './Item.css'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'


const Item = ({ info }) => {

  return (
    <div className='container'>
      <Link to={`/detalle/${info.id}`} className='clothes'>
        <img src={info.img} alt="ropa" />
        <h4 className='name'>{info.name}</h4>
        <p className='price'>{info.price}</p>
        <button>Comprar</button>
      </Link>
    </div>
  )
}

export default Item
