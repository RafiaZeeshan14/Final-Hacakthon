import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './components/Registration/Signup'
import { Login } from './components/Registration/Login'
import Home from './components/DashBoard'
import FeePortal from './components/UserFeePortal/FeePortal'

const AppRoutes = () => {
  return (
    <div>
       <Routes>
       <Route path='/' element={<Login />} />
       <Route path='/signup' element={<Signup />} />   
      <Route path='/dashboard' element={<Home />} />
      <Route path='/feeportal' element={<FeePortal />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
