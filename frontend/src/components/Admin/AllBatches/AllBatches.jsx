import React from 'react';
import AdminInfolayout from '../../Layouts/AdminInfoLayout';
const AllBatches = () => {
    const semesters = [
        { id: 1, name: 'Spring Batch 2024', startDate: '01/01/2024', endDate: '05/01/2024', status: 'Pending' },
        { id: 2, name: 'Fall Batch 2024', startDate: '01/01/2024', endDate: '05/01/2024', status: 'Active' },
        { id: 3, name: 'Fall Batch 2023', startDate: '08/01/2023', endDate: '12/15/2023', status: 'Completed' },
        { id: 4, name: 'Summer Batch 2023', startDate: '05/15/2023', endDate: '08/01/2023', status: 'Completed' },
        { id: 5, name: 'Spring Batch 2023', startDate: '01/01/2023', endDate: '05/01/2023', status: 'Completed' },
        { id: 6, name: 'Fall Batch 2022', startDate: '08/01/2022', endDate: '12/15/2022', status: 'Completed' },
    ];

    return (
        <AdminInfolayout>
            <div className="py-4 bg-transparent h-[550px]">
                <h1 className="text-3xl font-bold mb-4 gradient-text">All Batches</h1>
                <hr className="my-4" />
                <button className='ml-2 mt-3 mb-5 text-gray-800 rounded-lg text-sm px-6 py-3 bg-green-100'>Add New Batch</button>
                <div className="relative pl-4 h-[400px] overflow-y-scroll">
                    <div className='border-l border-gray-200'>
                        {semesters.map((semester, index) => (
                            <SemesterTimelineItem key={semester.id} semester={semester} isLast={index === semesters.length - 1} />
                        ))}
                    </div>
                </div>
            </div>
        </AdminInfolayout>
    );
};

const SemesterTimelineItem = ({ semester, isLast }) => {

    const statusColor = {
        Pending: 'text-yellow-500',
        Active: 'text-blue-500',
        Completed: 'text-red-500',
    }[semester.status] || 'text-gray-600'; // Default color if status doesn't match

    return (
        <div className={`ml-8 mb-8 ${isLast ? '' : 'pb-8'}`}>
            <div className="absolute left-[8px] w-4 h-4 bg-blue-500 rounded-full"></div>
            <h2 className="text-xl font-semibold text-gray-800">{semester.name}</h2>
            <p className="text-gray-600 text-[14px] my-1">Start Date: {semester.startDate}</p>
            <p className="text-gray-600 text-[14px]">End Date: {semester.endDate}</p>
            <p className={`${statusColor} text-md font-semibold my-2`}><span className='text-gray-600 font-normal'>Status:</span>  {semester.status}</p>
            <div className="mt-4">
                <button className="relative mt-2 mr-2 inline-flex items-center justify-center p-[2px] rounded bg-gradient-to-r from-green-500 to-blue-500">
                    <span className="bg-white hover:bg-gray-100 text-[#285192] font-medium rounded px-4 py-1 text-[15px]">
                        Edit
                    </span>
                </button>
                <button className="relative mt-2 mr-1 inline-flex items-center justify-center p-[2px] rounded bg-gradient-to-r from-green-500 to-blue-500">
                    <span className="bg-white hover:bg-gray-100 text-[#285192] font-medium rounded px-4 py-1 text-[15px]">
                        Delete
                    </span>
                </button>
            </div>
        </div>
    );
};

export default AllBatches;
