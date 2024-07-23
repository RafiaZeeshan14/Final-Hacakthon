import React from "react";

const CourseInst = () => {
  const images = [
    "https://docs.material-tailwind.com/img/face-2.jpg",
    "https://docs.material-tailwind.com/img/face-2.jpg",
    "https://docs.material-tailwind.com/img/face-2.jpg",
    
  ];

  return (
    <div>
      <div className="pl-10">
        <h3 className="text-lg font-bold top-0 pl-3">Course Instructor</h3>
        <div className="py-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="avatar"
              className="inline-block relative ml-4 object-cover object-center !rounded-full w-16 h-16 border-[3px] border-[#88C343] shadow-md p-[1px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseInst;