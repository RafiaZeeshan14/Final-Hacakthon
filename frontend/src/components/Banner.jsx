import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-[20rem] rounded-lg overflow-hidden">
      <img src="/Images/banner.png" alt="Banner" className="absolute w-full h-full object-cover" />
      <div className="relative grid grid-cols-2 h-full">
        <div className="flex flex-col  justify-center items-center p-3 z-10 ">
          <p className="text-white text-sm mb-2">July 21, 2024</p>
          <h1 className="text-white text-3xl font-bold">Welcome back, Student!</h1>
          <p className="text-white mt-2">Always stay updated in your student portal</p>
        </div>
        <div className="flex items-center justify-center z-10 mt-2 ">
          <img src="/Images/Group.png" alt="Animated" className="w-full max-w-[29rem] " />
        </div>
      </div>
    </div>
  );
};

export default Banner;