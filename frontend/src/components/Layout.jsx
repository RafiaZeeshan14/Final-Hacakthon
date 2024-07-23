import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Banner from "./Banner";
const Layout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-[auto_1fr] ">
        <Sidebar />
        <main className="p-4">
          <Navbar />
          <Banner />
        </main>
      </div>
    </div>
  );
};

export default Layout;
