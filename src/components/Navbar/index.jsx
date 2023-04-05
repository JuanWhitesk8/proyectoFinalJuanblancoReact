import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/cartWidget';
import './navbar.css';

const Products = () => {
  const { data, buyProducts} = useContext(dataContext);


return data.map((products)=> {
  return (
  <>
      <div>
      <Card key={products.id} products={products} />
      </div>
  </>
  )
}) }

function Navbar() {

  return (
    <nav>
      <ul>
        <li> <Link to="/"> <img className='logo' src="./img/logotrp.png" alt="logo" /> </Link> </li>
        <li> <Link to="/"> <p>Inicio</p> </Link> </li>
        <li> <Link to="categoria/dama"> <p>Dama</p> </Link> </li>
        <li> <Link to="categoria/caballero"> <p>Caballero</p> </Link> </li>
        <li> <Link to="/contacto"> <p>Contacto</p> </Link> </li>
        <li> <Link to="/cart"> <CartWidget /> </Link> </li>
      </ul>
    </nav>
  );
}

export default Navbar;