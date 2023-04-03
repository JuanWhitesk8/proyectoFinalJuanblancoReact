import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProductItem from './components/ProductItem'
import CartContent from './components/CartContent/CartContent'
import DataProvider from './components/Context/DataContext'
import Products from './components/Products/Products'

function App() {
  const [productos, setProductos] = useState([])

  return (
    <DataProvider>
    <div>
      < Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/productos/:id' element={ <ProductItem /> } />
        <Route path='/cart' element={ <CartContent />} />
      </Routes>
    </div>
    </DataProvider>
  )
}

export default App
