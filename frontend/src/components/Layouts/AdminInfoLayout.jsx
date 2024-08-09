import React from 'react';
import Navbar from '../Common/Navbar/Navbar';
import AdminSidebar from '../Common/Sidebar/AdminSidebar';

const AdminInfolayout = ({ children }) => {
  return (
    <div className="grid grid-cols-[auto_1fr]">
            <AdminSidebar />
            <main className="p-4">
                <Navbar />     
                   <div className="p-4 flex flex-col">
                    {children}
                </div>
            </main>
        </div>
  )
}

export default AdminInfolayout 