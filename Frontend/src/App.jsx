import React from 'react'

import Navbar from './Components/Navbar'

import { Routes,Route } from 'react-router-dom'
import Carbooking from './Pages/Carbooking'
// import Home from './Pages/Home'


const App = () => {
  return (
    <div>
      <Navbar/>
    <Routes>
      {/* <Route path="/"  element={<Home/>}/> */}
      <Route  path="/booking" element={<Carbooking/>} />
    </Routes>


    </div>
    
  )
}

export default App
