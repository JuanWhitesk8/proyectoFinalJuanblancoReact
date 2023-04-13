import React from 'react'
import Item from '../Item'

const ItemList = ( {data = []} ) => {
  return (
        data.map(clothes => <Item key={clothes.id} info={clothes}  />)
        
    
  )
}

  

export default ItemList
