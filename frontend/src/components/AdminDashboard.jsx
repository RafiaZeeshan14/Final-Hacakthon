import React from 'react'
import AdminLayout from './Layouts/AdminLayout'
import PerformanceCard from './AdDashboard/PerformanceCard'

const AdminDashboard = () => {
  return (
    <AdminLayout>
        <PerformanceCard />
    </AdminLayout>
  )
}

export default AdminDashboard