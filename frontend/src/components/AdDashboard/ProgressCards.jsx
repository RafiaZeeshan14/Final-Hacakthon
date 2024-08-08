import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CARDS = [
  {
    icon: 'Images/User.svg',
    title: "Users",
    value: "11.2k",
    change: "+25%",
    changeColor: "text-green-500",
    bgColor: "bg-[#d7e1f5]",
    data: [95, 59, 80, 81, 56, 55, 40],
    backgroundColors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384']
  },
  {
    icon: "Images/courses.svg",
    title: "Courses",
    value: "100+",
    change: "+67%",
    changeColor: "text-green-500",
    bgColor: "bg-[#f5e3d7]",
    data: [28, 48, 40, 30, 86, 27, 90],
    backgroundColors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384']
  },
  {
    icon: "Images/graph.svg",
    title: "Enrolled ",
    value: "26.3%",
    change: "-3%",
    changeColor: "text-red-500",
    bgColor: "bg-[#e7d7f5]",
    data: [18, 48, 77, 15, 100, 27, 40],
    backgroundColors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384']
  },
  {
    icon: "Images/duration.svg",
    title: "Session Time",
    value: "2h 30m",
    change: "+13%",
    changeColor: "text-green-500",
    bgColor: "bg-[#d7f5e3]",
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384']
  }
];

const ProgressCards = () => {
  return (
    <div className='max-w-lg pl-2 mt-4'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {CARDS.map((card, index) => {
          const data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                label: card.title,
                data: card.data,
                backgroundColor: (context) => {
                  const chart = context.chart;
                  const { ctx, chartArea } = chart;

                  if (!chartArea) {
                    return;
                  }
                  const gradient = ctx.createLinearGradient(2, chartArea.top, 0, chartArea.bottom);
                  gradient.addColorStop(0, '#285192');
                  gradient.addColorStop(1, '#88C343');

                  return gradient;
                },
                borderRadius: 0,
                borderSkipped: false,
                barThickness: 6,
              },
            ],
          };

          const options = {
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: false,
              },
              tooltip: {
                position: 'nearest',
                backgroundColor: '#ffffff',
                titleColor: 'blue',
                bodyColor: 'red',
                borderColor: '#d1d5db',
                borderWidth: 1,
              },
            },
            scales: {
              x: {
                display: true,
              },
              y: {
                display: false,
              },
            },
          };

          return (
            <div key={index} className="bg-[#e9edf4] shadow-xl rounded-lg p-4 relative w-32 h-62">
              <div className={`absolute top-4 left-4 p-2 rounded-md ${card.bgColor}`}>
                <img src={card.icon} alt={`${card.title} Icon`} className="w-6 h-6" />
              </div>
              <div className="text-gray-500 text-sm mt-14">{card.title}</div>
              <div className="text-xl font-semibold mt-2">{card.value}</div>
              <div className={`text-sm ${card.changeColor} mt-1`}>{card.change}</div>
              <div className="mt-4">
                <Bar data={data} options={options} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressCards;
