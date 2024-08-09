import React from "react";
import { Link } from "react-router-dom";
import { team } from "./Instructor";

const CourseInst = () => {
  const topInstructors = team.slice(0, 3); 

  return (
    <div>
      <div className="mx-auto">
        <span className="flex justify-between px-12 mb-2">
          <h3 className="text-lg font-bold top-0 ">Course Instructor</h3>
          <Link to={'/instructor'} className="text-[#88C343]">See all</Link>
        </span>
        <div className="py-4 p-10">
          {topInstructors.map((instructor, index) => (
            <img
              key={index}
              src={instructor.avatar}
              alt={instructor.name}
              className="inline-block relative ml-4 object-cover object-center !rounded-full w-16 h-16 border-[3px] border-[#88C343] shadow-md p-[1px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseInst;
