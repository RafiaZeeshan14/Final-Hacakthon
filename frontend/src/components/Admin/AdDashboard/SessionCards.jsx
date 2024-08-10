import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SessionCards = () => {
    const sessions = [
        { channel: 'Direct', traffic: 65.23, color: '#285192' },
        { channel: 'Social', traffic: 80.28, color: '#88C343' },
        { channel: 'Referral', traffic: 50.28, color: '#00B2A9' },
    ];

    const data = {
        labels: sessions.map(session => session.channel),
        datasets: [
            {
                label: 'Traffic (%)',
                data: sessions.map(session => session.traffic),
                backgroundColor: sessions.map(session => session.color),
                borderWidth: 0,
                barThickness: 10,
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                grid: {
                    display: false, // Remove grid lines for x-axis
                },
            },
            y: {
                grid: {
                    display: false, // Remove grid lines for y-axis
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.raw}%`,
                },
            },
        },
        animation: {
            duration: 1000,
            easing: 'easeOutQuad',
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="max-w-lg mx-4 mt-4 bg-[#e9edf4] rounded-xl shadow-md overflow-hidden h-72">
            <div className="px-6 pt-3">
                <h2 className="text-lg font-semibold mb-2">Sessions By Channel</h2>
                <div className="flex items-center justify-between pb-1 mb-2 border-b-2 border-white">
                    <span className="font-semibold text-gray-700">Channel</span>
                    <span className="font-semibold text-gray-700">Traffic</span>
                    <span className="font-semibold text-gray-700">Percentage (%)</span>
                </div>
                <div className="h-40">
                    <Bar data={data} options={options} />
                </div>
                <div className="flex justify-center mt-4 space-x-4">
                    <div className="flex items-center">
                        <div className="w-4 h-4 mr-2" style={{ backgroundColor: '#285192' }}></div>
                        <span className='text-xs'>Direct</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 mr-2" style={{ backgroundColor: '#88C343' }}></div>
                        <span className='text-xs'>Social</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 mr-2" style={{ backgroundColor: '#00B2A9' }}></div>
                        <span className='text-xs'>Referral</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SessionCards;
