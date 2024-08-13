import React, { useContext, useState, useEffect } from "react";
import {
  FaTachometerAlt,
  FaDollarSign,
  FaPen,
  FaBook,
  FaCalendarAlt,
  FaBell,
  FaSignOutAlt,
  FaUserGraduate,
  FaUserEdit,
} from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../controller/UserContext";

const AdminSidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const activeItem = menuItems.findIndex(
      (item) => item.link === location.pathname
    );
    setActiveLink(activeItem);
  }, [location.pathname]);

  const menuItems = [
    { icon: <FaTachometerAlt size={20} />, text: "Dashboard", link: "/admin-dashboard" },
    { icon: <FaDollarSign size={20} />, text: "Payment Info", link: "/adminfeesection" },
    { icon: <FaPen size={20} />, text: "Student Detail", link: "/studentdetails" },
    { icon: <FaBook size={20} />, text: "All Courses", link: "/ongoing-courses" },
    { icon: <FaCalendarAlt size={20} />, text: "Batches Info", link: "/all-batches" },
    { icon: <FaBell size={20} />, text: "Notification", link: "/noticepage" },
    { icon: <MdOutlinePostAdd size={20} />, text: "Posts Info", link: "/posts" },
    { icon: <FaUserEdit size={20} />, text: "Edit Profile", link: "/editprofile" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("../");
  };

  const handleIconClick = () => {
    // Close the sidebar when the icon is clicked
    toggleSidebar();
  };

  return (
    <aside
      style={{
        background:
          "linear-gradient(0deg, #285192 80.26%, rgba(40, 81, 146, 0) 143.39%, #285192 143.39%)",
      }}
      className={`fixed top-0 left-0 h-full z-50 flex flex-col rounded-r-3xl p-4 text-sm text-white w-60 transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="flex flex-col items-center mb-8 cursor-pointer">
        <div
          onClick={handleIconClick}
          style={{
            background: "linear-gradient(180deg, #88C343 0%, rgba(136, 195, 67, 0.23) 100%)",
          }}
          className="p-3 rounded-xl mb-2 mt-4 cursor-pointer"
        >
          <FaUserGraduate size={60} />
        </div>
      </div>
      <nav className="flex flex-col space-y-7 mx-8 mt-3">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={`relative flex items-center group hover:text-white ${
              activeLink === index ? "text-white" : "text-gray-400"
            }`}
            onClick={() => {
              setActiveLink(index);
              // Close the sidebar if it is open on small screens
              if (isSidebarOpen) toggleSidebar();
            }}
          >
            <span
              className={`group-hover:text-white mr-2 ${
                activeLink === index ? "text-white" : "text-gray-400"
              }`}
            >
              {item.icon}
            </span>
            <span className="group-hover:text-white">{item.text}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-4 mx-8 pt-10">
        <button
          onClick={handleLogout}
          className="relative flex group text-gray-300 hover:text-white pt-4"
        >
          <FaSignOutAlt size={20} />
          <span className="ml-2">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
