import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { getPublicKey, makePayment } from '../../controller/handleApi';
import Spinner from '../Spinner/Spinner';

const PayOnline = ({ voucher }) => {
  const [publicKey, setPublicKey] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPublicKey(setPublicKey);
  }, []);

  const handleClick = async () => {
    setLoading(true); // Show spinner
    try {
      await makePayment(publicKey, loadStripe, voucher);
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setLoading(false); // Hide spinner once payment is done
    }
  };

 // Button classes when loading or disabled
 const buttonClasses = `px-4 py-2 border rounded ${
    voucher?.status === 'paid'
      ? 'bg-gray-200 text-gray-700 border-gray-300 cursor-not-allowed'
      : loading
      ? 'border-none '
      : 'bg-blue-100 text-blue-700 border-blue-300'
  }`;

  return (
    <button
      disabled={voucher?.status === 'paid'}
      className={buttonClasses}
      onClick={handleClick}
    >
      {loading ?  <Spinner /> : 'Pay Online'}
    </button>
  );
};

export default PayOnline;