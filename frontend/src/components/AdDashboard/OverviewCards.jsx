import React from 'react';

const OverviewCards = () => {
  const cardsData = [
    {
      title: "Users",
      today: "5,461",
      expected: "8,085",
      svgName: "Images/round.svg"
    },
    {
      title: "Goals",
      today: "140",
      expected: "120",
      svgName: "Images/goal.svg"
    }
  ];

  return (
    <div className="p-4 mt-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Daily Overview</h1>
        <button className="bg-[#6181B3] text-[#15134B] font-medium  py-2 px-12 rounded-full">View</button>
      </div>
      <div className="flex space-x-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-green-100 p-4 rounded-md flex items-center justify-between w-64 h-32"
          >
            <div className="flex flex-col items-center ">
              <h2 className="text-xl font-semibold">{card.today}</h2>
              <p className="text-sm">Today</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12">
                <img src={`/${card.svgName}`} alt={card.title} className="w-full h-full" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">{card.expected}</h3>
              <p className="text-sm">Expected</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverviewCards;
