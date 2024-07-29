import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './components/Registration/Signup'
import { Login } from './components/Registration/Login'
import Home from './components/DashBoard'

const AppRoutes = () => {
  return (
    <div>
       <Routes>
       <Route path='/' element={<Login />} />
       <Route path='/signup' element={<Signup />} />   
      <Route path='/dashboard' element={<Home />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
