import React, { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AdminInfolayout from "../../Layouts/AdminInfoLayout";
import AdminDropdowns from "../AdminFeePortal/AdminDropdowns";
import Avatar from "../../Common/Avatar/Avatar";
import { getAllUsers, getUserbyCourse, getVoubyCourse } from "../../controller/handleAdminApi";


const StudentDetails = () => {
    const [allUser, setAllUser] = useState([])
    const [dataByCourse, setDataByCourse] = useState();
    const [course, setCourse] = useState();

    console.log("🚀 ~ StudentDetails ~ allUser:", allUser)
    const [clickedStudent, setClickedStudent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers(setAllUser)
    }, [])

    useEffect(() => {
        if (course) {
            getUserbyCourse(course, setDataByCourse);
        } else {
            setDataByCourse();
        }
    }, [course]);

    const getCourse = (e) => {
        console.log(e.target.value);
        setCourse(e.target.value);
    };

    const dataToDisplay = dataByCourse ? dataByCourse : allUser;
    console.log("🚀 ~ StudentDetails ~ dataToDisplay:", dataToDisplay)

    // const getInitial = (name) => {
    //   return name.charAt(0).toUpperCase();
    // };

    const handleIconClick = (student) => {
        setClickedStudent(student);

        navigate("/alldetails", { state: { student } });
    };

    return (
        <AdminInfolayout>
            <div className="mt-6 px-2">
                <h2 className="gradient-text text-3xl font-bold mb-4 ">
                    Students Details
                </h2>

                <hr className="my-4" />
                {/** <span className='flex justify-center mt-4 text-md font-semibold'> Students</span>  */}

                <div className="flex justify-center mb-4 mt-8">
                    <AdminDropdowns filterByCourse={getCourse} displayMonth={false} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dataToDisplay?.map((student) => (
                        <div
                            key={student.name}
                            className="bg-white border-x-2 border-y-2 border-y-[#88C343] border-x-[#3a7ea5]  border-[#3a7ea5] hover:border-x-[#88C343] hover:border-y-[#3a7ea5] rounded-lg shadow-md p-4 mb-4 flex justify-between items-center"
                        >
                            <div className="flex items-center">
                                <div className="mr-10 flex items-center">
                                    <Avatar name={student?.name} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{student.name}</h3>
                                    <p className="text-gray-600">
                                        {student.course} - SMIT
                                    </p>
                                    <p className="text-gray-600 text-xs">{student.email}</p>
                                </div>
                            </div>
                            <FaEye
                                className={`cursor-pointer h-8 w-4 ${clickedStudent === student ? "text-blue-800" : "text-gray-600"
                                    } hover:text-blue-700`}
                                onClick={() => handleIconClick(student)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </AdminInfolayout>
    );
};

export default StudentDetails;