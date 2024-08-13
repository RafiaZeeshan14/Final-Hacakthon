import React, { useContext } from "react";
import { MdNotificationsActive } from "react-icons/md";
import { UserContext } from "../../controller/UserContext";
import Avatar from "../Avatar/Avatar";

const Navbar = ({ toggleSidebar }) => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <div className="flex justify-between">
                <img
                    src="/Images/logo-stdnt.png"
                    alt="Logo"
                    style={{ width: "120px", height: "70px" }}
                    onClick={toggleSidebar} // Toggle sidebar on logo click
                    className="cursor-pointer"
                />
                <div className="flex pt-4 justify-between">
                    <div className="mr-4 sm:mr-10 flex items-center">
                        <Avatar name={user?.name} />
                        <span className="flex flex-col px-2">
                            <p className="font-bold text-md"> {user?.name} </p>
                            <p className="text-[12px] text-gray-400">{user?.course}</p>
                        </span>
                    </div>
                    <MdNotificationsActive className="sm:h-12 sm:w-6  size-5" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
