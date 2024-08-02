import React from 'react';

const StudentData = () => {
    return (
        <div className="bg-green-100 px-6 py-14 mt-8 rounded-lg shadow-md ">
            <div className="flex flex-col mt-2">
                <div className="flex justify-between items-center  ">
                    <div className="text-2xl font-bold">All Students Data <br /> <span className='text-lg font-semibold text-gray-500 '>Top Region & Session</span> </div>
                    <button className="bg-[#6181B3]  text-[#15134B] font-semibold py-3 px-12 rounded-xl hover:bg-gray-600">
                        View
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentData;