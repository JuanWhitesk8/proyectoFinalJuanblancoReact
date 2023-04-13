import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cart.css'
import React from 'react'
import { useCartContex } from '../../context/CartContext';



const cartWidget = () => {
const {totalProduct} = useCartContex()

    return (
      <div className='icon'>
        <Badge badgeContent={ totalProduct () || '0'} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </div>
    )
  }
  
  export default cartWidget