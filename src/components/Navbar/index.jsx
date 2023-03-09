import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/cartWidget';
import './navbar.css';



function Navbar() {

  return (
    <nav>
      <ul>
        <li><img className='logo' src="/images/logotrp.png" alt="logo" /></li>
        <li> <Link to="/"> <p>Inicio</p> </Link> </li>
        <li> <Link to="productos"> <p>Productos</p> </Link> </li>
        <li> <Link to="/"> <p>Nosotros</p> </Link> </li>
        <li> <Link to="/"> <p>Contacto</p> </Link> </li>
        <li> <CartWidget /> </li>
      </ul>
    </nav>
  );
}

export default Navbar;