import React, { useContext } from "react";
import { IoNotifications } from "react-icons/io5";
import { UserContext } from "../../controller/UserContext";

const Navbar = () => {
const {user} = useContext(UserContext)

  return (
    <div>
      <div className="flex justify-between">
        <img
          src="/Images/logo-stdnt.png"
          alt="Logo"
          style={{ width: "120px", height: "70px" }}
        />
        <div className=" flex pt-4 justify-between">
          <div className="mr-10 flex">
            <img
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              class="inline-block relative object-cover object-center !rounded-full w-12 h-12 border-[3px] border-[#88C343] shadow-md p-[1px]"
            />
            <span className="flex flex-col px-2">
              <p className="font-bold text-md"> {user?.name} </p>
              <p className="text-[12px] text-gray-400">{user?.course}</p>
            </span>
          </div>
          <IoNotifications className="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
