import React from 'react'
import CoursesCard from './CoursesCard'

const ProgressCard = () => {
  return (
    <>
    <div className=' flex flex-col'>
    <p className='font-bold pl-10 text-lg'>Latest progress</p>

    <div className="flex space-x-4 py-4 pl-10 " >
        
      <div className="p-4 bg-white shadow-xl  rounded-xl  w-48 flex flex-col items-center">
        <div className="flex-grow flex items-center justify-center">
          <img src="/Images/Group1.svg" alt="HTML Icon" className=""  />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold">HTML</h3>
          <p className="text-gray-600">Basic</p>
        </div>
      </div>

      <div className="p-4 bg-white shadow-xl rounded-xl border border-green-400 w-48 flex flex-col items-center">
        <div className="flex-grow flex items-center justify-center">
          <img src="/Images/Group2.svg" alt="JavaScript Icon" className="" />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold">JavaScript</h3>
          <p className="text-gray-600">Basic</p>
        </div>
      </div>

      <div className="p-4 bg-white   shadow-xl rounded-lg w-48 flex flex-col items-center" >
        <div className="flex-grow flex items-center justify-center">
          <img src="/Images/Group3.svg" alt="React Icon" className="" />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold">React</h3>
          <p className="text-gray-600">Basic</p>
        </div>
      </div>
    </div>
    <CoursesCard />
    </div>
    </>
  )
}

export default ProgressCard