import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cart.css'

const cartWidget = () => {
  return (
    <div className='icon'>
      <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </div>
  )
}

export default cartWidget
