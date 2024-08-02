import React from 'react'
import AdminLayout from './Layouts/AdminLayout'
import PerformanceCard from './AdDashboard/PerformanceCard'
import ReportCard from './AdDashboard/ReportCard'
import SessionCards from './AdDashboard/SessionCards'

const AdminDashboard = () => {
  return (
    <AdminLayout>
        <PerformanceCard />
        <ReportCard />
    </AdminLayout>
  )
}

export default AdminDashboard