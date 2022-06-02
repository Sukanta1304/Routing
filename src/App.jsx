import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import {Routes,Route} from 'react-router-dom'
import Products from './components/Products'
import About from './components/About'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Product } from './components/product'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products/:id' element={<Product/>} />
      </Routes>
    </div>
  )
}

export default App
