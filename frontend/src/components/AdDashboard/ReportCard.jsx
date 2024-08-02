import React from 'react';
import SessionCards from './SessionCards';
import StudentData from './StudentData';

const ReportCard = () => {
    const data = [
        { period: 'JAN - APRIL', amount: '8,085', percentage: '13%' },
        { period: 'MAY - AUGUST', amount: '8,085', percentage: '30%' },
        { period: 'SEP - DECEMBER', amount: '8,085', percentage: '25%' },
    ];

    return (
        <div>
        <div className="max-w-4xl  p-4">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">Reports And Analytics</h2>
                <span className="text-gray-500 pr-2">Year</span>
            </div>
            <div className="bg-white shadow-md rounded-lg pt-6 pb-7 ">
                <div className="flex">
                    <div className="w-1/2 flex justify-center items-center">
                        <img src='Images/report.png' alt="Report Chart" className="w-36 h-36" />
                    </div>
                    <div className="w-1/2">
                        {data.map((item, index) => (
                            <div key={index} className="mb-3 pl-6  ">
                                <div className="text-gray-700">{item.period}</div>
                                <div className="text-sm font-bold">{item.amount} <span className="text-xs text-gray-500">{item.percentage}</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <SessionCards />
        <StudentData />
        </div>
    );
};

export default ReportCard;