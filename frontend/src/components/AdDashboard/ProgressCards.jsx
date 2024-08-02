import React from 'react';

const CARDS = [
  {
    icon: 'Images/User.svg',
    title: "Users",
    value: "11.2k",
    change: "+25%",
    changeColor: "text-green-500",
    bgColor: "bg-[#d7e1f5]"
  },
  {
    icon: "Images/courses.svg",
    title: "Courses",
    value: "100+",
    change: "+67%",
    changeColor: "text-green-500",
    bgColor: "bg-[#f5e3d7]"
  },
  {
    icon: "Images/graph.svg",
    title: "Enrolled Users",
    value: "26.3%",
    change: "-3%",
    changeColor: "text-red-500",
    bgColor: "bg-[#e7d7f5]"
  },
  {
    icon: "Images/duration.svg",
    title: "Session Duration",
    value: "2h 30m",
    change: "+13%",
    changeColor: "text-green-500",
    bgColor: "bg-[#d7f5e3]"
  }
];

const ProgressCards = () => {
  return (
    <div className='max-w-xl max-h-full mx-auto pl-3 mt-4'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CARDS.map((card, index) => (
          <div key={index} className="bg-[#e9edf4] shadow-xl rounded-lg p-4 relative">
            <div className={`absolute top-4 left-4 p-2 rounded-md ${card.bgColor}`}>
              <img src={card.icon} alt={`${card.title} Icon`} className="w-6 h-6" />
            </div>
            <div className="text-gray-500 text-sm mt-12">{card.title}</div>
            <div className="text-xl font-semibold mt-2">{card.value}</div>
            <div className={`text-sm ${card.changeColor} mt-1`}>{card.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressCards;
