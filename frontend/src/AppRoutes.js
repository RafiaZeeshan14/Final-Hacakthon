import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './components/Registration/Signup'
import { Login } from './components/Registration/Login'
import Home from './components/DashBoard'
import FeePortal from './components/UserFeePortal/FeePortal'
import { fetchUser } from './components/controller/handleApi'
import { UserContext } from './components/controller/UserContext'
import Success from './components/UserFeePortal/SuccessPage'
import AdminDashboard from './components/AdminDashboard'
import Dashboard from './components/DashBoard'


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
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/fee-payment' element={<FeePortal />} />
          <Route path='/success' element={<Success />} />
          <Route path='/adminscreen' element={<AdminDashboard />} />
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default AppRoutes
