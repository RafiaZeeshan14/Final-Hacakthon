import React from 'react';
import { Link } from 'react-router-dom';

const StudentData = () => {
    return (
        <div className="bg-green-100  max-w-[95%] py-8 ml-4 px-6 mt-6 rounded-lg shadow-md ">
            <div className="flex flex-col mt-2">
                <div className="flex justify-between items-center  ">
                    <div className="text-xl font-bold">All Students Data <br /> <span className='text-lg font-semibold text-gray-500 '>Top Region & Session</span> </div>
                    <Link to={'/adminfeeportal'}>
                        <button className="bg-[#77adebd5] hover:bg-blue-200 text-white hover:text-[#15134B] font-semibold py-3 px-12 rounded-xl ">
                            View
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StudentData;