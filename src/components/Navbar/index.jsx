import React from 'react'
import CartWidget from '../CartWidget'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav>
      <ul>
        <li> <NavLink to="/"><img className='logo' src="./img/logotrp.png" alt="logo" /></NavLink> </li>
        <li>  <NavLink to="/"> <p>Inicio</p> </NavLink>     </li>
        <li>  <NavLink to='/categoria/woman'> <p>Dama</p> </NavLink>       </li>
        <li>  <NavLink to='/categoria/men'> <p>Caballero</p> </NavLink>  </li>
        <li>  <NavLink to="/contacto"> <p>Contacto</p> </NavLink>   </li>
        <li>  <NavLink to="/cart"> <CartWidget /> </NavLink> </li>
      </ul>
    </nav>
    </div>
  )
}

export default NavBar
