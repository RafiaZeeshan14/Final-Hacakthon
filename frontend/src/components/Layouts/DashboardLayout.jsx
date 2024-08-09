import Sidebar from "../Common/Sidebar/Sidebar";
import Navbar from "../Common/Navbar/Navbar";
import Banner from '../User/UserDashboard/Banner'


const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-[auto_1fr] ">
        <Sidebar />
        <main className="p-4">
          <Navbar />
          <Banner />
          <div className=" grid grid-cols-[auto_1fr] ">
            {children[0]} 
            <div className="flex flex-col">
               {children[2]}
              {children[3]} 
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
