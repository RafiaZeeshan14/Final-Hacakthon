import React, { useContext, useEffect, useState } from "react";
import UserFeeLayout from "../../Layouts/UserFeeLayout";
import CustomInput from "../../Common/Inputs/CustomInput";
import { MdEmail } from "react-icons/md";
import { UserContext } from "../../controller/UserContext";
import Avatar from "../../Common/Avatar/Avatar";
import { editUser } from "../../controller/handleApi";

function EditUserProfile() {
  const [isDisabled, setIsDisbaled] = useState(true)
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // console.log(formData)
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        password: user.password || "",
      });
    }
  }, [user]);

  // Handle input change for each field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(`${name}: ${value}`);
  };
  // console.log("🚀 ~ ProfileEdit ~ formData:", formData)

  const handlePasswordFocus = () => {
    setFormData((prevData) => ({
      ...prevData,
      password: "",
    }));
  };

  const handleEditUser = () => {
    setIsDisbaled(false)
  }
  const handleSaveUser = async () => {
    const updatedData = { ...formData };
  
    // Remove the password field if it's the same as the previous password
    if (updatedData.password === user.password) {
      delete updatedData.password;
    }
  
    console.log(updatedData); // Check what is being sent
  
    try {
      await editUser(updatedData, user._id);
      window.location.href = window.location.href; // Reload to reflect changes
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const getInitial = (name) => {
    return name.charAt(0).toUpperCase();
  };
  return (
    <UserFeeLayout>
      <h1 className="text-3xl font-bold pt-3 pl-3 gradient-text ">
        Edit Your Profile
      </h1>
      <hr className="my-4" />
      <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="flex pt-4 justify-between">
              <div className="mr-10 flex items-center">
                <Avatar name={user?.name} />
                <span className="flex flex-col px-2">
                  <p className="font-bold text-md">{user?.name}</p>
                  <p className="text-sm text-gray-400">{user?.email}</p>
                </span>
              </div>
            </div>
          </div>
          <div className='flex gap-2'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleEditUser}>
              Edit
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSaveUser}>
              Save
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <CustomInput id="id-b07" name="name" label="Name" required value={formData?.name} onChange={handleInputChange} disabled={isDisabled} />
          <CustomInput id="id-b07" name="email" label="Email" type="email" required value={formData?.email} onChange={handleInputChange} disabled={isDisabled} />
          <CustomInput id="id-b07" name="password" label="Password" type="password" required onChange={handleInputChange} disabled={isDisabled} onFocus={handlePasswordFocus} placeholder={"Password"} />
          <CustomInput id="id-b07" name="course" label="Course" required value={user?.course} disabled={true} />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <CustomInput id="id-b07" name="batch" label="Batch" required value={user?.batch} disabled={true} />
          <CustomInput id="id-b07" name="id-b07" label="Roll No" required value={user?.rollNo} disabled={true} />
        </div>
        <span className="font-semibold ">My Email Address</span>
        <div>
          <span className="flex gap-3 mt-4">
            <span className="bg-gray-200 p-2 rounded-full">
              <MdEmail size={20} />
            </span>
            <p className="text-gray-600 text-sm font-medium mt-1">{user?.email}</p>
          </span>
          
        </div>
      </div>
    </UserFeeLayout>
  );
}

export default EditUserProfile;
