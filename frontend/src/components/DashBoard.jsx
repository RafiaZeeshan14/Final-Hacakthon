import React from 'react'
import Layout from './Layouts/DashboardLayout'
import ProgressCard from './UserDashboard/ProgressCard'
import CoursesCard from './UserDashboard/CoursesCard'
import CourseInst from './UserDashboard/CourseInst'
import Remainders from './UserDashboard/Remainders'

const Home = () => {
  return (
    <div>
      <Layout>
        <ProgressCard />
        <CoursesCard />
        <CourseInst />
        <Remainders />
      </Layout>
    </div>
  )
}

export default Home