import React from 'react'

import Navbar from './Components/Navbar'

import { Routes,Route } from 'react-router-dom'
import Carbooking from './Pages/Carbooking'
import Home from './Pages/Home'
import Sigin from './Pages/Sigin'
import Login from './Pages/Login'


const App = () => {
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route  path="/booking" element={<Carbooking/>} />
      <Route path= "/signin" element={<Sigin/>} />
      <Route path= "/login" element={<Login/>} />

    </Routes>


    </div>
    
  )
}

export default App
