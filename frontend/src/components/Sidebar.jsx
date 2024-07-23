import React from 'react';
import { FaTachometerAlt, FaDollarSign, FaPen, FaBook, FaRegCalendarAlt, FaBell, FaSignOutAlt, FaUserGraduate, FaCalendarAlt, FaClipboard } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] h-full p-1">
      <aside
        style={{
          background: 'linear-gradient(0deg, #285192 80.26%, rgba(40, 81, 146, 0) 143.39%, #285192 143.39%)',
        }}
        className="flex flex-col rounded-3xl p-4 text-sm text-white transition-all duration-300 w-60"
      >
        <div className="flex flex-col items-center mb-8 cursor-pointer">
          <div
            style={{
              background: 'linear-gradient(180deg, #88C343 0%, rgba(136, 195, 67, 0.23) 100%)',
            }}
            className="p-3 rounded-xl mb-2 mt-4"
          >
            <FaUserGraduate size={60} />
          </div>
        </div>
        <nav className="flex flex-col space-y-8 mx-8">
          <a href="#" className="relative flex items-center group text-white hover:text-gray-300">
            <FaTachometerAlt size={20} />
            <span className="ml-2 text-white hover:text-gray-400">Dashboard</span>
          </a>
          <a href="#" className="relative flex items-center group text-gray-300 hover:text-white">
            <FaDollarSign size={20} />
            <span className="ml-2">Payment Info</span>
          </a>
          <a href="#" className="relative flex items-center group text-gray-300 hover:text-white">
            <FaPen size={20} />
            <span className="ml-2">Registration</span>
          </a>
          <a href="#" className="relative flex items-center group text-gray-300 hover:text-white">
            <FaBook size={20} />
            <span className="ml-2">Courses</span>
          </a>
          <a href="#" className="relative flex items-center group text-gray-300 hover:text-white">
            <FaCalendarAlt size={20} />
            <span className="ml-2">Drop Semester</span>
          </a>
          <a href="#" className="relative flex items-center group text-gray-300 hover:text-white">
            <FaClipboard size={20} />
            <span className="ml-2">Result</span>
          </a>
          <a href="#" className="relative flex items-center group text-gray-300 hover:text-white">
            <FaBell size={20} />
            <span className="ml-2">Notice</span>
          </a>
          <a href="#" className="relative flex items-center group text-gray-300 hover:text-white">
            <FaRegCalendarAlt size={20} />
            <span className="ml-2">Schedule</span>
          </a>
          
          
          <a href="#" className="relative flex  group text-gray-300 hover:text-white pt-10">
            <FaSignOutAlt size={20} />
            <span className="ml-2">Logout</span>
          </a>
          
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
