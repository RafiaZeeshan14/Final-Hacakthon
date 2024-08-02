import React from 'react';
import Sidebar from '../Common/Sidebar/Sidebar';
import Navbar from '../Common/Navbar/Navbar';

const AdminFeelayout = ({ children }) => {
  return (
    <div className="grid grid-cols-[auto_1fr]">
            <Sidebar />
            <main className="p-4">
                <Navbar />     
                   <div className="p-4 flex flex-col">
                    {children}
                </div>
            </main>
        </div>
  )
}

export default AdminFeelayout 