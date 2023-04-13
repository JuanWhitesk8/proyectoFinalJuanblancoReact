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
        <li>  <NavLink to="/"> <h5>Inicio</h5> </NavLink>     </li>
        <li>  <NavLink to='/categoria/woman'> <h5>Dama</h5> </NavLink>       </li>
        <li>  <NavLink to='/categoria/men'> <h5>Caballero</h5> </NavLink>  </li>
        <li>  <NavLink to="/form"> <h5>Contacto</h5> </NavLink>   </li>
        <li>  <NavLink to="/cart"> <CartWidget /> </NavLink> </li>
      </ul>
    </nav>
    </div>
  )
}

export default NavBar
