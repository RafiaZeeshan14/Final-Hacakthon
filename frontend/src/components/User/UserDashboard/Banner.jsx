import React, { useContext } from 'react';
import { UserContext } from '../controller/UserContext';

const Banner = () => {
const { user } = useContext(UserContext)
  return (
    <div className="relative w-full h-[20rem] rounded-lg overflow-hidden">
      <img src="/Images/banner.png" alt="Banner" className="absolute w-full h-full object-cover" />
      <div className="relative grid grid-cols-2 h-full">
        <div className="flex flex-col  justify-center items-center p-3 z-10 ">
          <p className="text-white text-sm mb-2">{new Date().toString().slice(0,15)}</p>
          <h1 className="text-gray-300 text-3xl font-semibold">Welcome back, <span className='text-white font-bold'>{user?.name} !</span></h1>
          <p className="text-slate-200 mt-4 text-sm">Always stay updated in your student portal</p>
        </div>
        <div className="flex items-center justify-center z-10 mt-2 ">
          <img src="/Images/Group.png" alt="Animated" className="w-full max-w-[28rem] " />
        </div>
      </div>
    </div>
  );
};

export default Banner;