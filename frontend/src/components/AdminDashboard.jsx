import React from 'react'
import AdminLayout from './Layouts/AdminLayout'
import PerformanceCard from './Admin/AdDashboard/PerformanceCard'
import ReportCard from './Admin/AdDashboard/ReportCard'
import SessionCards from './Admin/AdDashboard/SessionCards'
import StudentData from './Admin/AdDashboard/StudentData'

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