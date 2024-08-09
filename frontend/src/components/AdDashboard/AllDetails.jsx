import React, { useContext } from 'react';
import { UserContext } from '../controller/UserContext';
import { Link, useLocation } from 'react-router-dom';
import AdminInfolayout from '../Layouts/AdminInfoLayout';


const AllDetails = () => {
    const location = useLocation();
    const { student } = location.state
    // console.log("🚀 ~ AllDetails ~ student:", student)
    // const student1 = {
    //     avatar: 'path-to-avatar.jpg', 
    //     name: 'Maham Ilyas',
    //     number: '579872',
    //     coursename: 'Web Development',
    //     batch: '10',
    //     email: 'mahamgmail.com',
    //     institute: 'SMIT',
    //     courselevel:'Medium'

    // }

    // const { user } = useContext(UserContext);

    const getInitial = (name) => {
        return name.charAt(0).toUpperCase();
    };



    return (
        <AdminInfolayout>

            <div className=''>
                <h2 className="gradient-text text-4xl font-bold mb-4 mt-6 px-2">All Details</h2>
            </div>
            <div className='flex justify-between items-center my-4 mx-4'>
                <Link to={'/studentdetails'}>
                    <button className='text-blue-600 text-md'>&larr; Back</button>
                </Link>
                <button className='text-blue-600 text-md'>Edit</button>
            </div>
            <div className='p-6 mt-6 mx-4  '>
                <div className="flex justify-center mb-6">
                    {student ? (
                        <div className=" relative bg-gray-200 text-black text-4xl font-medium !rounded-full w-24 h-24 flex items-center justify-center border-[3px] border-[#88C343] shadow-md">
                            {getInitial(student.name)}
                        </div>
                    ) : (
                        <img
                            src="https://docs.material-tailwind.com/img/face-2.jpg"
                            alt="avatar"
                            className="inline-block relative object-cover object-center !rounded-full w-12 h-12 border-[3px] border-[#88C343] shadow-md p-[1px]"
                        />
                    )} </div>
                <h2 className='text-3xl font-bold text-center mb-6 text-gray-600'>{student.name}</h2>
                <div className='space-y-6'>
                    <div className='flex justify-between'>
                        <span className='font-semibold'>Roll Number</span>
                        <span>{student.rollNo}</span>
                    </div>
                    <div className="border-t-2 border-gray-100"></div>

                    <div className='flex justify-between'>
                        <span className='font-semibold'>Course Name</span>
                        <span>{student.course}</span>
                    </div>
                    <div className="border-t-2 border-gray-100"></div>

                    <div className='flex justify-between'>
                        <span className='font-semibold'>Batch</span>
                        <span>{student.batch}</span>
                    </div>
                    <div className="border-t-2 border-gray-100"></div>


                    <div className='flex justify-between'>
                        <span className='font-semibold'>Email</span>
                        <span>{student.email}</span>
                    </div>
                    <div className="border-t-2 border-gray-100"></div>

                    <div className='flex justify-between'>
                        <span className='font-semibold'> Institute Name</span>
                        <span>SMIT</span>
                    </div>
                    <div className="border-t-2 border-gray-100"></div>

                    <div className='flex justify-between'>
                        <span className='font-semibold'>Course Level</span>
                        <span>Basic</span>
                    </div>

                </div>
            </div>

        </AdminInfolayout>
    );
};

export default AllDetails;
