import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cart.css'

const cartWidget = () => {
  const { cart } =useContext(dataContext)

  const itemsQuanty = cart.reduce((acc, el)=> acc + el.quanty, 0)
  return (
    <div className='icon'>
      <Badge badgeContent={itemsQuanty} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </div>
  )
}

export default cartWidget
