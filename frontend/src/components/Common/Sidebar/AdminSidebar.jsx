import React, { useContext } from 'react';
import { FaTachometerAlt, FaDollarSign, FaPen, FaBook, FaRegCalendarAlt, FaBell, FaSignOutAlt, FaUserGraduate, FaCalendarAlt, FaUserEdit } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../controller/UserContext';

const AdminSidebar = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const menuItems = [
        { icon: <FaTachometerAlt size={20} />, text: "Dashboard", link: "/admin-dashboard" },
        { icon: <FaDollarSign size={20} />, text: "Payment Info", link: "/adminfeesection" },
        { icon: <FaPen size={20} />, text: "Student Detail", link: "/studentdetails" },
        { icon: <FaBook size={20} />, text: "All Courses", link: "/ongoing-courses" },
        { icon: <FaCalendarAlt size={20} />, text: "Batches Info", link: "/all-batches" },
        { icon: <FaBell size={20} />, text: "Notification", link: "/noticepage" },
        { icon: <FaUserEdit size={20} />, text: "Edit Profile", link: "/editprofile" },
    ];

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('../');
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
                <nav className="flex flex-col space-y-10 mx-8 mt-3">
                    {menuItems.map((item, index) => (
                        <Link key={index} to={item.link} className="relative flex items-center group text-gray-300 hover:text-white">
                            {item.icon}
                            <span className="ml-2">{item.text}</span>
                        </Link>
                    ))}
                </nav>
                <div className="mt-auto mx-8 pt-10">
                    <button onClick={handleLogout} className="relative flex group text-gray-300 hover:text-white pt-10">
                        <FaSignOutAlt size={20} />
                        <span className="ml-2">Logout</span>
                    </button>
                </div>
            </aside>
        </div>
    );
};

export default AdminSidebar;
