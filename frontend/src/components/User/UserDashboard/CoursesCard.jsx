import React, { useContext } from 'react';
import { UserContext } from '../../controller/UserContext';  
import { Link } from 'react-router-dom';

function CoursesCard() {
const { user } = useContext(UserContext)
  return (
    <div className="pl-10 mt-4">
      <span className="flex justify-between px-2 mb-2">
        <h3 className="text-lg font-bold top-0 ">Enrolled Courses</h3>
        <Link to={'/enrollcard'} className="text-[#88C343] cursor-pointer transition-all duration-200 hover:underline">See all</Link>
      </span>
      <div className="flex flex-row gap-8">
        <div className=" shadow-md rounded-xl border-2  border-[#88C343] flex py-8 pl-6 w-72"
          style={{ backgroundColor: 'rgba(40, 81, 146, 0.3)' }}>
          <div className='flex justify-between flex-col'>
            <h2 className="text-[18px] font-bold mb-2 text-[#285192]">{user?.course}</h2>
            <Link to={'/enrollcard'} className="bg-[#285192] text-white py-2 px-12 mt-2   rounded-full">View</Link>
          </div>
          <img src="/Images/Laptop.svg" alt="Web Development" className="pr-4 object-cover " />
        </div>
        <div className="bg-white shadow-md rounded-xl  flex py-8 px-6 w-72"
          style={{ backgroundColor: 'rgba(40, 81, 146, 0.3)' }}>
          <div>
            <h2 className="text-[18px] font-bold mb-2 text-[#285192]">Graphic Designing</h2>
            <Link to={'/enrollcard'}>
            <button className="bg-[#285192] text-white py-2 px-12 mt-4 rounded-full">View</button>
            </Link>
          </div>
          <img src="/Images/States.svg" alt="Graphic Designing" className=" object-cover " />
        </div>
      </div>
    </div>
  );
}

export default CoursesCard;