import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import { HiUser } from "react-icons/hi2";
import AdminInfolayout from "../Layouts/AdminInfoLayout";

const OngoingCourses = () => {
  const ongoingCourses = [
    {
      title: "Graphic Fundamentals",
      code: "ART101",
      professor: "Prof. Smith",
      days: "Monday & Wednesday",
      time: "9:00 AM - 10:30 AM",
      location: "Design Studio A",
      bgColor: "bg-gray-100",
    },
    {
      title: "Advanced Web Design",
      code: "ITD201",
      professor: "Dr. Johnson",
      days: "Tuesday & Thursday",
      time: "1:30 PM - 3:00 PM",
      location: "Computer Lab 3",
      bgColor: "bg-teal-50",
    },
    {
      title: "User Experience Research",
      code: "UXD301",
      professor: "Prof. Davis",
      days: "Monday & Saturday",
      time: "11:00 AM - 12:30 AM",
      location: "Design Lab 2",
      bgColor: "bg-purple-100",
    },
    {
      title: "3D Animation Techniques",
      code: "ANI301",
      professor: "Dr. Martinez",
      days: "Wednesday",
      time: "2:00 PM - 5:00 PM",
      location: "Animation Studio",
      bgColor: "bg-indigo-50",
    },
    {
      title: "Digital Painting DP",
      code: "ART202",
      professor: "Prof. Lee",
      days: "Friday",
      time: "10:00 AM - 1:00 PM",
      location: "Art Lab 1",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Motion Graphics MG",
      code: "ANI302",
      professor: "Dr. White",
      days: "Thursday",
      time: "1:00 PM - 4:00 PM",
      location: "Animation Studio",
      bgColor: "bg-pink-50",
    },
  ];

  const completedCourses = [
    {
      title: "Basic Typography BT",
      code: "ART102",
      professor: "Prof. Walker",
      days: "Completed",
      time: "N/A",
      location: "N/A",
      bgColor: "bg-red-50",
    },
    {
      title: "Introduction to Programming",
      code: "ITD101",
      professor: "Dr. Miller",
      days: "Completed",
      time: "N/A",
      location: "N/A",
      bgColor: "bg-purple-100",
    },
    {
      title: "Human-Computer Interaction",
      code: "UXD201",
      professor: "Prof. Clark",
      days: "Completed",
      time: "N/A",
      location: "N/A",
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <AdminInfolayout>
      <div className="flex items-center mb-2 border-b-2 py-5">
        <IoBook className="mr-2 text-gray-600 size-7" />
        <h1 className="text-3xl font-bold pl-3 gradient-text">
          Ongoing Courses
        </h1>
      </div>

      <div className="flex flex-wrap justify-start gap-6 gap-x-8 p-4">
        {ongoingCourses.map((course, index) => (
          <div
            key={index}
            className={`${course.bgColor} p-5 rounded-lg shadow-md w-72 font-light text-sm`}
          >
            <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 py-2">
              {course.title} - {course.code}
            </h2>
            <div className="flex items-center mb-2">
              <HiUser className="mr-2 text-gray-700" />
              <p className="text-md">{course.professor}</p>
            </div>

            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2 text-gray-700" />
              <span>{course.days}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2 text-gray-700" />
              <span>{course.time}</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-700" />
              <span>{course.location}</span>
            </div>
            <div className="flex justify-end">
              <button className="relative mt-2 inline-flex items-center justify-center p-[2px] rounded bg-gradient-to-r from-green-500 to-blue-500">
                <span className="bg-white hover:bg-gray-100 text-[#285192] font-medium rounded px-2 py-1 text-[15px]">
                  Ongoing
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center mb-2 border-b-2 py-5 mt-10">
        <IoBook className="mr-2 text-gray-600 size-7" />
        <h1 className="text-3xl font-bold pl-3 gradient-text">
          Completed Courses
        </h1>
      </div>

      <div className="flex flex-wrap justify-start gap-6 gap-x-8 p-4">
        {completedCourses.map((course, index) => (
          <div
            key={index}
            className={`${course.bgColor} p-5 rounded-lg shadow-md w-72 font-light text-sm`}
          >
            <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 py-2">
              {course.title} - {course.code}
            </h2>
            <div className="flex items-center mb-2">
              <HiUser className="mr-2 text-gray-700" />
              <p className="text-md">{course.professor}</p>
            </div>

            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2 text-gray-700" />
              <span>{course.days}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2 text-gray-700" />
              <span>{course.time}</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-700" />
              <span>{course.location}</span>
            </div>
          </div>
        ))}
      </div>
    </AdminInfolayout>
  );
};

export default OngoingCourses;
