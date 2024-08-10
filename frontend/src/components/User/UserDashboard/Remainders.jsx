import React from "react";
import { notice } from "../Notification/Notification";
import { Link } from "react-router-dom";

const Remainders = () => {
  const feePaymentDue = notice.find(n => n.title === "Fee Payment Due");
  const message = feePaymentDue ? feePaymentDue.message : "No payment due information available.";

  return (
    <div className="mx-2">
      <span className="flex justify-between px-12 mb-2">
        <h3 className="text-lg font-bold top-0">Remainders</h3>
        <Link to="/notifications" className="text-[#88C343] cursor-pointer transition-all duration-200">See all</Link>
      </span>
      <div className="shadow-xl h-80 bg-[#eeeded] w-80 rounded-3xl mx-10">
        <div className="relative flex pl-6 gap-2 pt-8">
          <div className="relative">
            <img src="/Images/borderBx.png" alt="" className="w-14" />
            <span className="absolute bottom-4 right-0 font-bold text-[#F83D00] text-sm px-3">4pm</span>
          </div>
          <span className="flex flex-col">
            <p>Python Quiz</p>
            <p className="text-sm text-[#285192] font-bold">Wednesday</p>
          </span>
        </div>
        <div className="relative flex pl-6 gap-2 pt-6">
          <div className="relative">
            <img src="/Images/borderBx.png" alt="" className="w-14" />
            <span className="absolute bottom-4 right-0 font-bold text-[#F83D00] text-sm px-3">4pm</span>
          </div>
          <span className="flex flex-col">
            <p>Javascript Quiz</p>
            <p className="text-sm text-[#285192] font-bold">Thursday</p>
          </span>
        </div>
        <h3 className="pl-6 pt-6 mb-3 font-bold">Payment Due</h3>
        <Link to="/notifications" state={{ highlight: feePaymentDue.id }}>
          <p className="pl-6 text-md mb-4 text-gray-500 cursor-pointer transition-all duration-200">
            {message.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Remainders;
