import React, { useContext } from 'react'
import Layout from './Layouts/DashboardLayout'
import ProgressCard from './UserDashboard/ProgressCard'
import CoursesCard from './UserDashboard/CoursesCard'
import CourseInst from './UserDashboard/CourseInst'
import Remainders from './UserDashboard/Remainders'
import { UserContext } from './controller/UserContext'

const Home = () => {
  const { user } = useContext(UserContext)
  return (
    <div>
      {user &&
        <Layout>
          <ProgressCard />
          <CoursesCard />
          <CourseInst />
          <Remainders />
        </Layout>
      }
    </div>
  )
}

export default Home