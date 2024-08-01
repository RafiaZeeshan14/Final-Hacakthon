import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { updateVoucherStatus } from '../controller/handleApi';

const Success = () => {
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
        <>
            <div>Success</div>
            <Link to='/fee-payment'>Fee Portal</Link>
        </>
    )
}

export default Success