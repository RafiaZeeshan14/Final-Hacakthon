import React from 'react'
import AdminLayout from './Layouts/AdminLayout'
import PerformanceCard from './AdDashboard/PerformanceCard'
import ReportCard from './AdDashboard/ReportCard'
import SessionCards from './AdDashboard/SessionCards'
import StudentData from './AdDashboard/StudentData'

const AdminDashboard = () => {
  return (
    <AdminLayout>
        <PerformanceCard />
        <ReportCard />
        <SessionCards />
        <StudentData />
    </AdminLayout>
  )
}

export default AdminDashboard