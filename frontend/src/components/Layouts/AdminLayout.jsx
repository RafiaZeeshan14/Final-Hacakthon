import Navbar from "../Common/Navbar/Navbar"
import Sidebar from "../Common/Sidebar/Sidebar"

const AdminLayout = ({ children }) => {
    return (
      <div>
        <div className='grid grid-cols-[auto_1fr] '>
          <Sidebar/>
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