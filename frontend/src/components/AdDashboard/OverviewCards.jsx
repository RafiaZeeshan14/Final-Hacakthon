import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const OverviewCards = () => {
  const cardsData = [
    {
      title: "Users",
      today: "5,461",
      expected: "8,085",
      showChart: true,
      chartColors: ['#285192', '#e0e0e0'],
      labels: ['USERS'],
      textColor: '#285192',
      data: [70, 30]
    },
    {
      title: "Goals",
      today: "140",
      expected: "120",
      showChart: true,
      chartColors: ['#88C343', '#e0e0e0'],
      labels: ['GOALS'],
      textColor: '#88C343',
      data: [85, 15]
    }
  ];

  const drawInnerText = (chart) => {
    const { width, height, ctx, data } = chart;
    ctx.restore();
    const fontSize = (height / 180).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = "middle";
    const label = data.labels[0];
    ctx.fillStyle = "#000";
    const labelWidth = ctx.measureText(label).width;
    const labelX = Math.round((width - labelWidth) / 2);
    const labelY = height / 2 - 20;
    ctx.fillText(label, labelX, labelY);
    ctx.save();
  };

  return (
    <div className="p-4 mt-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Daily Overview</h1>
        <button className="bg-blue-200 hover:bg-[#77adebd5] text-[#15134B] hover:text-white font-medium py-2 px-12 rounded-full mr-1">View</button>
      </div>
      <div className="flex space-x-4">
        {cardsData.map((card, index) => {
          const chartData = {
            labels: card.labels,
            datasets: [
              {
                data: card.data,
                backgroundColor: card.chartColors,
                borderColor: '#ffffff',
                borderWidth: 1
              }
            ]
          };
          const chartOptions = {
            plugins: {
              legend: {
                position: 'bottom',
                align: 'center',
                labels: {
                  boxWidth: 12,
                  padding: 20,
                  color: card.textColor,
                  font: {
                    size: 12,
                    weight: '200'
                  },
                  generateLabels: (chart) => {
                    return [
                      {
                        text: 'Completed',
                        color: card.textColor,
                        fillStyle: chart.data.datasets[0].backgroundColor[0],
                        strokeStyle: chart.data.datasets[0].borderColor,
                        lineWidth: chart.data.datasets[0].borderWidth
                      }
                    ];
                  }
                }
              }
            },

            cutout: '75%',
            events: ['mousemove', 'mouseout', 'click', 'mouseenter', 'mouseleave'],
            animation: {
              onComplete: function () {
                drawInnerText(this);
              }
            }
          };

          return (
            <div
              key={index}
              className="bg-green-100 p-4 rounded-md flex items-center justify-between w-64 max-w-md h-32"
            >
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-semibold">{card.today}</h2>
                <p className="text-sm">Today</p>
              </div>
              <div className="flex flex-col items-center pt-4">
                {card.showChart ? (
                  <div className="h-28 w-28">
                    <Doughnut data={chartData} options={chartOptions} />
                  </div>
                ) : (
                  <img src={`/${card.svgName}`} alt={card.title} className="w-full h-full" />
                )}
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold">{card.expected}</h3>
                <p className="text-sm">Expected</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OverviewCards;
