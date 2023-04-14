import React,{ useState, useEffect } from 'react'
import './ItemCount.css'

  const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial))

    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    } 

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])

  return (
    <div className='counter'>
      <button className='buttom-count' disabled={count <= 1} onClick={decrease}>-</button>
      <span>{count}</span>
      <button className='buttom-count' disabled={count >= stock} onClick={increase}>+</button>
      <div>
        <button className='buttom-add' disabled={stock <= 0} onClick={() => onAdd(count) } >Agregar al Carrito</button>
      </div>
    </div>
  )
}

export default ItemCount
