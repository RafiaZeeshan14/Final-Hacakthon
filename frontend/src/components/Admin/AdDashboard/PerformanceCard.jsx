import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import ProgressCards from './ProgressCards';
import OverviewCards from './OverviewCards';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TITLE = "Performance";
const CURRENT_PERIOD_LABEL = "Current Period";
const LABELS = ["GD", "AI", "JAVA", "JS", "WEB DEV", "C++", "PYT", "C#", "DM", "SE", "OS", "CB"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const monthlyData = {
  January: [65, 59, 80, 81, 56, 55, 40, 70, 90, 85, 72, 88],
  February: [60, 55, 75, 78, 50, 53, 35, 65, 85, 80, 68, 84],
  March: [75, 62, 85, 86, 60, 58, 45, 75, 95, 90, 78, 92],
  April: [70, 57, 82, 84, 58, 56, 42, 72, 92, 87, 75, 89],
  May: [68, 55, 78, 80, 55, 54, 40, 68, 88, 83, 72, 86],
  June: [72, 58, 81, 83, 59, 57, 43, 71, 91, 86, 74, 88],
  July: [74, 60, 83, 85, 61, 59, 45, 73, 93, 88, 76, 90],
  August: [77, 63, 86, 88, 64, 62, 48, 76, 96, 91, 79, 93],
  September: [73, 59, 82, 84, 60, 58, 44, 72, 92, 87, 75, 89],
  October: [69, 55, 78, 80, 56, 54, 40, 68, 88, 83, 72, 86],
  November: [66, 53, 76, 78, 54, 52, 38, 66, 86, 81, 70, 84],
  December: [71, 58, 81, 83, 59, 57, 43, 71, 91, 86, 74, 88],
};

const Performance = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");

  const data = {
    labels: LABELS,
    datasets: [
      {
        label: CURRENT_PERIOD_LABEL,
        data: monthlyData[selectedMonth],
        borderColor: '#285192',
        backgroundColor: 'rgba(40, 81, 146, 0.2)',
        fill: true,
        pointBackgroundColor: '#0A5C36',
        pointBorderColor: '#00FF00',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
      },
    },
  };

  return (
    <>
      <div className='flex flex-col'>
        <div className="max-w-xl py-4 pr-3 pl-3  ">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-[#15134bbb]">{TITLE}</h2>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="text-sm text-[#5A5881] border rounded px-2 py-1"
            >
              {MONTHS.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 relative">
            <div className="absolute top-2 right-2 flex items-center">
              <div className="w-2.5 h-2.5 bg-[#285192] rounded-full inline-block"></div>
              <span className="text-sm text-[#5A5881] ml-2">{CURRENT_PERIOD_LABEL}</span>
            </div>
            <div className="relative">
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
        <ProgressCards />
        <div>
          <OverviewCards />
        </div>
      </div>
    </>
  );
}

export default Performance;
