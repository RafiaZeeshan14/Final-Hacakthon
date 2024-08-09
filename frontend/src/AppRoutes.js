import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './components/Registration/Signup'
import { Login } from './components/Registration/Login'
import Home from './components/DashBoard'
import FeePortal from './components/User/UserFeePortal/FeePortal'
import { fetchUser } from './components/controller/handleApi'
import { UserContext } from './components/controller/UserContext'
import Success from './components/User/UserFeePortal/SuccessPage'
import AdminDashboard from './components/AdminDashboard'
import Dashboard from './components/DashBoard'
import AdminFeeTable from './components/AdminFeePortal/AdminFeeTable'
import RegisterForm from './components/User/RegisterForm/RegisterForm'
import Instructor from './components/User/UserDashboard/Instructor'
import EditProfile from './components/AdDashboard/EditProfile'
import Courses from './components/User/Courses/Courses'
import NotificationPage from './components/AdDashboard/NotificationPage'



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
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path='/adminfeesection' element={<AdminFeeTable />} />
          <Route path='/registration' element={<RegisterForm />} />
          <Route path='/instructor' element={<Instructor />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path='/noticepage' element={<NotificationPage />} />

        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default AppRoutes
