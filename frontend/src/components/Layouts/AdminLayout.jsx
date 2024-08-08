import Navbar from "../Common/Navbar/Navbar"
import AdminSidebar from "../Common/Sidebar/AdminSidebar"

const AdminLayout = ({ children }) => {
    return (
      <div>
        <div className='grid grid-cols-[auto_1fr] '>
          <AdminSidebar/>
          <main className="p-4">
            <Navbar />
            <div className="grid grid-cols-[auto_1fr]">
              {children}
              <div className="flex flex-col">
                {children[3]}
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
  
  export default AdminLayout