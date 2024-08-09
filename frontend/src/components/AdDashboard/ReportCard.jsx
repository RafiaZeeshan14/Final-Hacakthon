import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ReportCard = () => {
    const data = [
        { period: 'JAN - APRIL', amount: '8,085', percentage: '87%' },
        { period: 'MAY - AUGUST', amount: '8,085', percentage: '70%' },
        { period: 'SEP - DECEMBER', amount: '8,085', percentage: '25%' },
    ];

    const chartData = {
        datasets: [
            {
                data: [87, 13],
                backgroundColor: ['#285192', '#E0E0E0'],
                borderWidth: 0,
                cutout: '60%',
                radius: '90%',
            },
            {
                data: [70, 30],
                backgroundColor: ['#3FB821', '#E0E0E0'],
                borderWidth: 0,
                cutout: '50%',
                radius: '80%',
            },
            {
                data: [25, 75],
                backgroundColor: ['#20C997', '#E0E0E0'],
                borderWidth: 0,
                cutout: '40%',
                radius: '70%',
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <>
        <div className="max-w-4xl p-4">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">Reports And Analytics</h2>
                <span className="text-gray-500 pr-2">Year</span>
            </div>
            <div className="bg-white shadow-md rounded-lg">
                <div className="flex">
                    <div className="w-1/2 flex justify-center items-center">
                        <div className="relative -mr-14 ">
                            <Doughnut data={chartData} options={options} width={250} height={250} />
                        </div>
                    </div>
                    <div className="w-1/2">
                        {data.map((item, index) => (
                            <div key={index} className="mb-6 pl-16 pt-8">
                                <div className="text-gray-700">{item.period}</div>
                                <div className="text-sm font-bold">{item.amount} <span className="text-xs text-gray-500">{item.percentage}</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default ReportCard;
