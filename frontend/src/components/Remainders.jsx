import React from "react";

const Remainders = () => {
  return (
    <div className="mx-2">
      <span className="flex justify-between px-12 mb-2">
        <h3 className="text-lg font-bold top-0 ">Remainders</h3>
        <p className="text-[#88C343]">See all</p>
      </span>
      <div className="shadow-xl h-80 bg-[#eeeded] w-80 rounded-3xl mx-10">
        <div className="relative flex pl-6 gap-2 pt-6">
          <div className="relative">
            <img src="/borderBx.png" alt="" className="w-14" />
            <span className="absolute bottom-4 right-0 font-bold text-[#F83D00]  text-sm  px-3">4pm</span>
          </div>
          <span className="flex flex-col">
            <p>Python Quiz</p>
            <p className="text-sm text-[#285192] font-bold">Wednesday</p>
          </span>
        </div>
        <div className=" relative flex pl-6 gap-2 pt-6">
          <div className="relative">
            <img src="/borderBx.png" alt="" className="w-14 " />
            <span className="absolute bottom-4 right-0 font-bold text-[#F83D00]  text-sm  px-3">4pm</span>

          </div>
          <span className="flex flex-col">
            <p>Javascript Quiz</p>
            <p className="text-sm text-[#285192] font-bold">Thursday</p>
          </span>
        </div>
        <h3 className="pl-6 pt-6 font-bold">Payment Due</h3>
        <p className="pl-6">Norem ipsum dolor sit amet, consectetur adipiscing elit.<br />Nunc.</p>
        <p className="text-[#88C343] pl-6 mt-2">See all</p>

      </div>

    </div>
  );
};

export default Remainders;