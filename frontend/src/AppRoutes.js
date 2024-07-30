import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './components/Registration/Signup'
import { Login } from './components/Registration/Login'
import Home from './components/DashBoard'
import FeePortal from './components/UserFeePortal/FeePortal'
import { fetchUser } from './components/controller/handleApi'
import { UserContext } from './components/controller/UserContext'


const AppRoutes = () => {
  const [user, setUser] = useState()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      fetchUser(setUser)
    }
  }, [])
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/fee-payment' element={<FeePortal />} />
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default AppRoutes
