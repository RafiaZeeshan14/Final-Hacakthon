import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import CoursesCard from './CoursesCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProgressCard = () => {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#ffffff', 
        titleColor: 'black', 
        bodyColor: 'red', 
        borderColor: 'green', 
        borderWidth: 1, 
        borderRadius: 4, 
        padding: 6, 
        callbacks: {
          label: (context) => {
            return `Progress: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: { 
        display: false,
        barPercentage: 0.3,
        categoryPercentage: 0.6
      },
      y: { display: false },
    },
  };

  const generateData = (color, data, labels) => ({
    labels: labels,
    datasets: [
      {
        label: 'Progress',
        data: data,
        backgroundColor: (ctx) => {
          const chart = ctx.chart;
          const gradient = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
          gradient.addColorStop(0, color[0]);
          gradient.addColorStop(1, color[1]);
          return gradient;
        },
        borderRadius: 0,
        barThickness: 10,
      },
    ],
  });

  const gradientColors = {
    html: ['rgba(40, 81, 146, 1)', 'rgba(136, 195, 67, 1)'], 
    javascript: ['rgba(40, 81, 146, 1)', 'rgba(136, 195, 67, 1)'], 
    react: ['rgba(40, 81, 146, 1)', 'rgba(136, 195, 67, 1)'], 
  };

  const datasets = {
    html: { data: [200, 150, 75, 100, 50], labels: ['HTML1', 'HTML2', 'HTML3', 'HTML4', 'HTML5'] },
    javascript: { data: [75, 200, 50, 80, 150], labels: ['JS1', 'JS2', 'JS3', 'JS4', 'JS5'] },
    react: { data: [90, 150, 60, 100, 110], labels: ['React1', 'React2', 'React3', 'React4', 'React5'] },
  };

  const renderCard = (title, level, color1, color2, data, labels, hasBorder = false) => {
    const gradient = [color1, color2];
    return (
      <div className={`p-4 bg-white shadow-xl rounded-xl w-48 h-48 flex flex-col items-center ${hasBorder ? 'border border-green-400' : ''}`}>
        <div className="flex-grow flex items-center w-[70%] justify-center">
          <Bar data={generateData(gradient, data, labels)} options={chartOptions} />
        </div>
        <div className="text-center ">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600">{level}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='flex flex-col'>
      <p className='font-bold pl-10 text-lg'>Latest Progress</p>
      <div className="flex space-x-4 py-4 pl-10">
        {renderCard('HTML', 'Basic', gradientColors.html[0], gradientColors.html[1], datasets.html.data, datasets.html.labels)}
        {renderCard('JavaScript', 'Basic', gradientColors.javascript[0], gradientColors.javascript[1], datasets.javascript.data, datasets.javascript.labels, true)}
        {renderCard('React', 'Basic', gradientColors.react[0], gradientColors.react[1], datasets.react.data, datasets.react.labels)}
      </div>
      <CoursesCard />
    </div>
  );
};

export default ProgressCard;
