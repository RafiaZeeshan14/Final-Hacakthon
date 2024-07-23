import React from 'react'
import Layout from './Layout'
import ProgressCard from './ProgressCard'
import CoursesCard from './CoursesCard'
import CourseInst from './CourseInst'
import Remainders from './Remainders'

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