import React, { useContext } from 'react'
import ProgressCard from './UserDashboard/ProgressCard'
import CoursesCard from './UserDashboard/CoursesCard'
import CourseInst from './UserDashboard/CourseInst'
import Remainders from './UserDashboard/Remainders'
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