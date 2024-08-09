import React, { useContext } from 'react'
import { UserContext } from '../../controller/UserContext';

const Avatar = ({name}) => {
    const { user } = useContext(UserContext);

  const getInitial = (name) => {
    return name.charAt(0).toUpperCase();
  };
  return (
    <div>
     
     {user?.name ? (
              <div className=" relative bg-gray-200 text-black font-medium !rounded-full w-12 h-12 flex items-center justify-center border-[3px] border-[#88C343] shadow-md">
                {getInitial(name)}
              </div>
            ) : (
              <img
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                className="inline-block relative object-cover object-center !rounded-full w-12 h-12 border-[3px] border-[#88C343] shadow-md p-[1px]"
              />
            )}      
    </div>
  )
}

export default Avatar
