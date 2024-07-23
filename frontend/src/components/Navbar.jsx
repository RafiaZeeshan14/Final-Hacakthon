import React from "react";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
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
              <p className="font-bold text-md"> Student </p>
              <p className="text-sm">Course Name</p>
            </span>
          </div>
          <IoNotifications className="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
