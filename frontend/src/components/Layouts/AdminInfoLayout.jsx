import React, { useState } from 'react';
import Navbar from '../Common/Navbar/Navbar';
import AdminSidebar from '../Common/Sidebar/AdminSidebar';

const AdminInfolayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <div className="relative h-screen ">
      <AdminSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`transition-all duration-300 lg:ml-60 ${isSidebarOpen ? 'ml-0' : 'ml-0 '}`}
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-2 sm:p-4 w-full overflow-y-auto">
          <div className="p-2 sm:p-4 flex flex-col">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminInfolayout;
