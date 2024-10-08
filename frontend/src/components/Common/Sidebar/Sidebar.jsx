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
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../controller/UserContext";

const Sidebar = () => {
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
    {
      icon: <FaTachometerAlt size={20} />,
      text: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <FaDollarSign size={20} />,
      text: "Fee Payment",
      link: "/fee-payment",
    },
    { icon: <FaPen size={20} />, text: "Registration", link: "/registration" },
    { icon: <FaBook size={20} />, text: "Courses", link: "/courses" },
    {
      icon: <FaCalendarAlt size={20} />,
      text: "Quizes Score",
      link: "/quizes-score",
    },
    {
      icon: <FaBell size={20} />,
      text: "Notifications",
      link: "/notifications",
    },
    {
      icon: <FaUserEdit size={20} />,
      text: "Edit Profile",
      link: "/edituserprofile",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("../");
  };

  return (
    <div className="h-screen flex">
      <aside
        style={{
          background:
            "linear-gradient(0deg, #285192 80.26%, rgba(40, 81, 146, 0) 143.39%, #285192 143.39%)",
        }}
        className="fixed top-0 left-0 h-screen flex flex-col rounded-r-3xl p-4 text-sm text-white w-60"
      >
        <div className="flex flex-col items-center mb-8 cursor-pointer">
          <div
            style={{
              background:
                "linear-gradient(180deg, #88C343 0%, rgba(136, 195, 67, 0.23) 100%)",
            }}
            className="p-3 rounded-xl mb-2 mt-4"
          >
            <FaUserGraduate size={60} />
          </div>
        </div>
        <nav className="flex flex-col space-y-8 mx-8 mt-3">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`relative flex items-center group hover:text-white
                             ${
                               activeLink === index
                                 ? "text-white"
                                 : "text-gray-400"
                             }`}
              onClick={() => setActiveLink(index)}
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
        <div className="mt-auto mx-8 pt-10">
          <button
            onClick={handleLogout}
            className="relative flex group text-gray-300 hover:text-white pt-4"
          >
            <FaSignOutAlt size={20} />
            <span className="ml-2">Logout</span>
          </button>
        </div>
      </aside>
      <main className="ml-60 w-full overflow-y-auto">
        {/* Main content goes here */}
      </main>
    </div>
  );
};

export default Sidebar;
