import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './Registration/Signup'
import { Login } from './Registration/Login'

const AppRoutes = () => {
  return (
    <div>
       <Routes>
      <Route path='/signup'element={<Signup />} />
      <Route path='/login'element={<Login />} />
      {/* <Route path='/'element={<Home />} /> */}
      </Routes>
    </div>
  )
}

export default AppRoutes
