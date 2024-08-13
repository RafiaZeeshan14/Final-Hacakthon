import { useState } from "react";
import Navbar from "../Common/Navbar/Navbar";
import AdminSidebar from "../Common/Sidebar/AdminSidebar";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="relative h-screen">
      <AdminSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`transition-all duration-300 lg:ml-60 ${
          isSidebarOpen ? "ml-0" : "ml-0 "
        }`}
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-4 w-full overflow-y-auto ">
          <div className="grid grid-cols-[auto_1fr] ">
            {children[0]}
            <div className="flex flex-col ">
              {children[1]}
              {children[2]}
              {children[3]}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
