import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { getPublicKey, makePayment } from '../../controller/handleApi';

const PayOnline = ({ voucher }) => {
  const [publicKey, setPublicKey] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPublicKey(setPublicKey);
  }, []);

  const handleClick = async () => {
    makePayment(publicKey, loadStripe, voucher);
  };


  return (
    <button
      onClick={handleClick}
    >
      Pay Online
    </button>
  );
};

export default PayOnline;
