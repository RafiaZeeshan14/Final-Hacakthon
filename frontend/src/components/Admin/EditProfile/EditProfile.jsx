import React, { useContext } from "react";
import {FaUserEdit,} from "react-icons/fa";
import CustomInput from "../../Common/Inputs/CustomInput";
import CustomDropdown from "../../Common/Inputs/CustomDropdowns";
import { UserContext } from "../../controller/UserContext";
import { MdEmail } from "react-icons/md";

import Avatar from "../../Common/Avatar/Avatar";
import AdminInfolayout from "../../Layouts/AdminInfoLayout";

function EditProfile() {
  const { user } = useContext(UserContext);

  return (
    <AdminInfolayout>
      <div className="flex items-center">
              <FaUserEdit className="mr-0 mt-3 text-gray-600 size-8 " />
      <h1 className="text-3xl font-bold pt-3 pl-3 gradient-text">
        Edit Profile
      </h1>
      </div>
      <hr className="my-4" />
      <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Avatar name={user?.name} />
            <div className="flex flex-col px-2">
              <p className="font-bold text-md">{user?.name}</p>
              <p className="text-sm text-gray-400">{user?.email}</p>
            </div>
          </div>
          <div className="flex gap-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
              Save
            </button>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <CustomInput id="name" name="name" label="Name" required />
          <CustomInput id="email" name="email" label="Email" required />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <CustomDropdown
            id="role"
            name="role"
            label="Role"
            options={["Admin", "Super Admin", "Manager"]}
            required
          />
          <CustomInput id="password" name="password" label="Password" required />
        </div>
        <div className="border-b-2 mb-3 border-gray-300"></div>
        <span className="font-semibold text-lg">Email Address</span>
        <div>
          <span className="flex gap-3 mt-4">
            <span className="bg-gray-200 p-2 rounded-full">
              <MdEmail size={20} />
            </span>
            <p className="text-gray-600 text-md font-medium mt-1">{user?.email}</p>
          </span>
          
        </div>
      </div>
      
    </AdminInfolayout>
  );
}

export default EditProfile;
