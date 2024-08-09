import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { updateVoucherStatus } from '../../controller/handleApi';
import '../../../App.css'
const SuccessPage = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const voucherId = queryParams.get('voucherId');
    const fee = queryParams.get('fee');
    console.log("🚀 ~ Success ~ fee:", fee)
    // console.log("🚀 ~ Succes ~ voucherId:", voucherId);

    useEffect(() => {
        if (voucherId) {
            updateVoucherStatus(voucherId);
        }
    }, [voucherId]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-green-600">
          <div className="bg-white p-8 rounded-lg shadow-2xl text-center w-80">
            <div className="mb-8 relative flex justify-center items-center">
              <div className="w-0 h-0 rounded-full bg-green-500 circle shadow-lg"></div>
              <svg
                className="w-12 h-12  mt-2 absolute text-white check"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 12.585l-3.293-3.292-1.414 1.414L9 15.414l10-10-1.414-1.414L9 12.585z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold gradient-text mb-2">Payment Successful !</h1>
            <p className="text-md text-gray-500 mb-8">ThankYou! You have completed your payment.</p>
            <p className="text-2xl text-gray-800 font-semibold mb-4">Rs {fee}.00</p>
            <Link
              to="/fee-payment"
              className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300 mb-4"
            >
              Go to Fee Portal
            </Link>
            <p className="text-sm text-gray-400 mb-4 mt-3">How was your payment experience?</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-300">
                <span role="img" aria-label="happy">😊</span>
              </button>
              <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-300">
                <span role="img" aria-label="neutral">😐</span>
              </button>
              <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-300">
                <span role="img" aria-label="sad">😟</span>
              </button>
            </div>
          </div>
        </div>
      );
}

export default SuccessPage;