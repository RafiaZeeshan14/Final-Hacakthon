import React from 'react'
import Layout from './Layout'
import ProgressCard from './ProgressCard'
import CoursesCard from './CoursesCard'

const Home = () => {
  return (
    <div>
      <Layout>
        <ProgressCard />
        <CoursesCard />
      </Layout>
    </div>
  )
}

export default Home