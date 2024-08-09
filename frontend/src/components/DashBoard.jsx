import React, { useContext } from 'react'
import ProgressCard from './User/UserDashboard/ProgressCard'
import CoursesCard from './User/UserDashboard/CoursesCard'
import CourseInst from './User/UserDashboard/CourseInst'
import Remainders from './User/UserDashboard/Remainders'
import { UserContext } from './controller/UserContext'
import DashboardLayout from './Layouts/DashboardLayout'

const Dashboard = () => {
  const { user } = useContext(UserContext)
  return (
    <div>
      {user &&
        <DashboardLayout>
          <ProgressCard />
          <CoursesCard />
          <CourseInst />
          <Remainders />
        </DashboardLayout>
      }
    </div>
  )
}

export default Dashboard