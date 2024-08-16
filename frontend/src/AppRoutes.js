import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './components/Registration/Signup'
import { Login } from './components/Registration/Login'
import FeePortal from './components/User/UserFeePortal/FeePortal'
import { fetchUser } from './components/controller/handleApi'
import { UserContext } from './components/controller/UserContext'
import Success from './components/User/UserFeePortal/SuccessPage'
import AdminDashboard from './components/AdminDashboard'
import Dashboard from './components/DashBoard'
import RegisterForm from './components/User/RegisterForm/RegisterForm'
import Instructor from './components/User/UserDashboard/Instructor'
import Courses from './components/User/Courses/Courses'
import AdminFeeTable from './components/Admin/AdminFeePortal/AdminFeeTable'
import EditProfile from './components/Admin/EditProfile/EditProfile'
import NotificationPage from './components/Admin/NotificationPage/NotificationPage'
import StudentDetails from './components/Admin/StudentDetail/StudentDetail'
import AllDetails from './components/Admin/AllDetails/AllDetails'
import OngoingCourses from './components/Admin/OngoingCourses/OngoingCourses'
import AllBatches from './components/Admin/AllBatches/AllBatches'
import QuizesScore from './components/User/QuizScore/QuizScore'
import Notification from './components/User/Notification/Notification'
import EditUserProfile from './components/User/EditUserProfile/EditUserProfile'
import EnrollCard from './components/User/EnrollCard/EnrollCard'
import UpcomingPosts from './components/Admin/UpcomingPosts/UpcomingPosts'
import ProtectedRoute from './ProtectedRoute'


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
          {/**Signup & Login Routes */}
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          {/**User Routes */}
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path='/fee-payment' element={<ProtectedRoute><FeePortal /></ProtectedRoute>}/>
          <Route path='/success' element={<ProtectedRoute><Success /></ProtectedRoute>} />
          <Route path='/registration' element={<ProtectedRoute><RegisterForm /></ProtectedRoute>} />
          <Route path='/instructor' element={<ProtectedRoute><Instructor /></ProtectedRoute>} />
          <Route path='/courses' element={<ProtectedRoute><Courses /></ProtectedRoute>} />
          <Route path='/quizes-score' element={<ProtectedRoute><QuizesScore /></ProtectedRoute>} />
          <Route path='/edituserprofile' element={<ProtectedRoute><EditUserProfile/></ProtectedRoute>} />
          <Route path='/enrollcard' element={<ProtectedRoute><EnrollCard/></ProtectedRoute>}/>
          {/**Admin Routes */}
          <Route path='/admin-dashboard' element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path='/adminfeesection' element={<ProtectedRoute><AdminFeeTable /></ProtectedRoute>} />
          <Route path='/editprofile' element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
          <Route path='/noticepage' element={<ProtectedRoute><NotificationPage /></ProtectedRoute>} />
          <Route path='/studentdetails' element={<ProtectedRoute><StudentDetails /></ProtectedRoute>} />
          <Route path='/alldetails' element={<ProtectedRoute><AllDetails /></ProtectedRoute>} />
          <Route path='/ongoing-courses' element={<ProtectedRoute><OngoingCourses /></ProtectedRoute>} />
          <Route path='/all-batches' element={<ProtectedRoute><AllBatches/></ProtectedRoute>} />
          <Route path='/notifications' element={<ProtectedRoute><Notification/></ProtectedRoute>} />
          <Route path='/posts' element={<ProtectedRoute><UpcomingPosts/></ProtectedRoute>} />
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default AppRoutes
