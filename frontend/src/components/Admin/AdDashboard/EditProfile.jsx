import React, { useContext } from "react";
import CustomInput from "../../Common/Inputs/CustomInput";
import CustomDropdown from "../../Common/Inputs/CustomDropdowns";
import { UserContext } from "../../controller/UserContext";
import Avatar from "../../Common/Avatar/Avatar";
import AdminInfolayout from "../../Layouts/AdminInfoLayout";

function EditProfile() {
  const { user } = useContext(UserContext);

  return (
    <AdminInfolayout>
      <h1 className="text-3xl font-bold pt-3 pl-3 gradient-text">
        Edit Profile
      </h1>
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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
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
      </div>
    </AdminInfolayout>
  );
}

export default EditProfile;
