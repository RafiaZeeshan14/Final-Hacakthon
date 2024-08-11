import React, { useContext } from "react";
import UserFeeLayout from "../../Layouts/UserFeeLayout";
import { UserContext } from "../../controller/UserContext";

const EnrollCard = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <UserFeeLayout>
        <div className=" ">
          <h1 className="text-3xl font-bold pt-3 pl-3 gradient-text">
            Enrolled Courses
          </h1>
          <hr className="my-4" />
          <div className="flex flex-row gap-8">
            <div
              className=" shadow-md rounded-xl border-2  border-[#88C343] flex py-8 pl-6 w-[21rem]"
              style={{ backgroundColor: "rgba(40, 81, 146, 0.3)" }}
            >
              <div>
                <h2 className="text-[14px]  mb-2 text-[#285192]">
                  <span className="font-medium">Course Name</span> :{" "}
                  {user?.course}
                </h2>
                <h2 className="text-[14px]  mb-2 text-[#285192]">
                  <span className="font-medium">Duration</span> : 1 year
                </h2>
                <h2 className="text-[14px]  mb-2 text-[#285192]">
                  <span className="font-medium">Instructor</span> : Faiza Aziz
                  
                </h2>
                <div className="mt-6">
                <span className="bg-yellow-100 text-yellow-700 rounded-full px-3 w-20 py-1 text-sm">
                  Pending{" "}
                </span>

                </div>
                {/* <button className="bg-[#285192] text-white py-2 px-6 mt-2   rounded-full">View</button> */}
              </div>
              <img
                src="/Images/Laptop.svg"
                alt="Web Development"
                className=" object-cover "
              />
            </div>
            <div
              className="bg-white shadow-md rounded-xl flex justify-between py-8 px-6 w-[21rem]"
              style={{ backgroundColor: "rgba(40, 81, 146, 0.3)" }}
            >
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-[14px] mb-2 text-[#285192]">
                    <span className="font-medium">Course Name</span> : Graphic
                  </h2>
                  <h2 className="text-[14px] mb-3 text-[#285192]">
                    <span className="font-medium">Duration</span> : 8 months
                  </h2>
                  <h2 className="text-[14px] mb-2 text-[#285192]">
                    <span className="font-medium">Instructor</span> : Iqra Khan
                  </h2>
                </div>
                <span className="bg-red-100 text-red-700 rounded-full px-3 w-20 py-1 text-sm mt-4">
                  Dropout
                </span>
              </div>
              <img
                src="/Images/States.svg"
                alt="Graphic Designing"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </UserFeeLayout>
    </div>
  );
};

export default EnrollCard;
