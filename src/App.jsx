import React from 'react'

import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import NavBar from './components/NavBar'
 

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
    
  )
}

export default App