import React from 'react'
//import ProgressCards from './ProgressCards';
//import OverviewCards from './OverviewCards';

const TITLE = "Performance";
const TIME_PERIOD = "Month";
const CURRENT_PERIOD_LABEL = "Current Period";
const LABELS = ["GD", "AI", "JAVA", "JS", "WEB DEV", "C++", "PYT", "C#", "DM", "SE", "OS", "CB"];
const PerformanceCard = () => {
  return (
    <>
    <div className='flex flex-col'>
    <div className="max-w-xl py-4 px-2">
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-xl font-bold text-[#15134bbb]">{TITLE}</h2>
      <span className="text-sm text-[#5A5881]">{TIME_PERIOD}</span>
    </div>
    <div className="bg-white shadow-md rounded-lg p-6 relative">
      <div className="absolute top-2 right-2 flex items-center">
        <div className="w-2.5 h-2.5 bg-[#285192] rounded-full inline-block"></div>
        <span className="text-sm text-[#5A5881] ml-2">{CURRENT_PERIOD_LABEL}</span>
      </div>
      <div className="relative">
        <img src='Images/graph.png' alt="Performance Graph" className="w-full h-auto mb-4 pt-4 mt-2" />
        <img src='Images/graph1.png' alt="Shadow Graph" className="absolute inset-0 w-full h-full mt-4" />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="relative flex items-center flex-col">
          <img src="Images/line.svg" alt="Line" className="absolute top-14   left-1/2 transform -translate-x-1/2" />
            <div className="bg-white px-2 py-1 rounded shadow-lg mb-1">
              <span className="text-[10px] text-gray-800">WEB <br/> DEV</span>
            </div>
            <div className="w-2.5 h-2.5 bg-blue-600 rounded-full border-2 border-white absolute top-24" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-1 text-xs text-[#A3ABBD] mb-2">
        {LABELS.map((label, index) => (
          <div key={index} className={`text-center ${label === "WEB DEV" ? "text-[#4E4E4E]" : ""}`}>{label}</div>
        ))}
      </div>
    </div>
  </div>
  {/***<ProgressCards />
  <div>
  <OverviewCards  />
  </div>
   */}
  </div>
  </>
  )
}

export default PerformanceCard