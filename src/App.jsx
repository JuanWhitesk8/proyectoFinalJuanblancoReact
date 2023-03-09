import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProductItem from './components/ProductItem'

function App() {
  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    setProductos(res.data)
  }

  useEffect(() => {
    getProductos()
  }, [])

  return (
    <div>
      < Navbar />
      <h1>Tropical Store</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<ProductList productos={productos} />} />
        <Route path='/productos/:id' element={ <ProductItem productos={productos} /> } />
      </Routes>
    </div>
  )
}

export default App
