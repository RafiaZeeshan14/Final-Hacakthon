import React, { useContext } from 'react';
import { FaTachometerAlt, FaDollarSign, FaPen, FaBook, FaRegCalendarAlt, FaBell, FaSignOutAlt, FaUserGraduate, FaCalendarAlt, FaClipboard } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../controller/UserContext';
import { FaUserEdit } from "react-icons/fa";
const AdminSidebar = () => {
    const { user } = useContext(UserContext)
    // console.log("🚀 ~ Sidebar ~ user:", user)

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('../')
    }
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
                    <Link to={'/admin-dashboard'} className="relative flex items-center group text-gray-300 hover:text-white">
                        <FaTachometerAlt size={20} />
                        <span className="ml-2 text-gray-300 hover:text-white">Dashboard</span>
                    </Link>
                    <Link to={'/adminfeesection'} className="relative flex items-center group text-gray-300 hover:text-white">
                        <FaDollarSign size={20} />
                        <span className="ml-2">Payment Info</span>
                    </Link>
                    <Link to={'/studentdetails'} className="relative flex items-center group text-gray-300 hover:text-white">
                        <FaPen size={20} />
                        <span className="ml-2">Student Detail</span>
                    </Link>
                    <Link to={'#'} className="relative flex items-center group text-gray-300 hover:text-white">
                        <FaBook size={20} />
                        <span className="ml-2">Top Courses</span>
                    </Link>
                    <a href="#" className="relative flex items-center group text-gray-300 hover:text-white">
                        <FaCalendarAlt size={20} />
                        <span className="ml-2">All Semester</span>
                    </a>
                    <a href="#" className="relative flex items-center group text-gray-300 hover:text-white">
                        <FaClipboard size={20} />
                        <span className="ml-2">Result</span>
                    </a>
                    <a href="#" className="relative flex items-center group text-gray-300 hover:text-white">
                        <FaBell size={20} />
                        <span className="ml-2">Notice</span>
                    </a>
                    <Link to={'/editprofile'} className="relative flex items-center group text-gray-300 hover:text-white">
                        <FaUserEdit size={20} />
                        <span className="ml-2">Edit Profile</span>
                    </Link>
                    <button onClick={() => handleLogout()} className="relative flex  group text-gray-300 hover:text-white pt-10">
                        <FaSignOutAlt size={20} />
                        <span className="ml-2">Logout</span>
                    </button>

                </nav>
            </aside>
        </div>
    );
};

export default AdminSidebar;
