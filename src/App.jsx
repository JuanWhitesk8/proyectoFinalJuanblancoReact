import './App.css'
import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/Index'
import Cart from './components/Cart'
import CartProvider from './context/CartContext'

function App() {
  return (
      <>
          <CartProvider>
            <NavBar />
            <Routes> 
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            </Routes>
          </CartProvider>
      </>
    )
  }


  


export default App
