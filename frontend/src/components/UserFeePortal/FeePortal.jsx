import React, { useContext, useState, useEffect } from "react";
import Input from "../Common/Inputs/Input";
import Table from "../Common/Table/Table";
import UserFeeLayout from "../Layouts/UserFeeLayout";
import { UserContext } from "../controller/UserContext";
import { getVouchers, generateVoucher } from '../controller/handleApi'

const FeePortal = () => {
  const { user } = useContext(UserContext)
  const [allVoucher, setAllVoucher] = useState([]);
  const [currentVoucher, setCurrentVoucher] = useState();

  useEffect(() => {
    if (user) {
      getVouchers(setAllVoucher)
    }

  }, [user])


  const handleSubmit = async () => {
    // console.log("in hnadle submit")
    generateVoucher(user, setAllVoucher, allVoucher, setCurrentVoucher);
    // getVouchers(setAllVoucher)

  };

  return (
    <UserFeeLayout>
      <h1 className="text-3xl font-bold pt-4 pl-3 gradient-text">
        SMIT Online Fee Portal
      </h1>
      <div className="mt-8 grid grid-cols-2 gap-y-6 px-4">
        {/* Name */}
        <Input
          label="Name"
          // placeholder={user?.name}
          value={user?.name}
          id="name"
          type="text"
          width="90%"
          height="55px"
          disabled={true}
          backgroundColor="#EBEBE4"
        />
        <Input
          label="Roll No"
          // placeholder={user?.rollNo}
          value={user?.rollNo}
          id="rollNo"
          type="text"
          width="90%"
          height="55px"
          disabled={true}
          backgroundColor="#EBEBE4"
        />
        <Input
          label="Course"
          // placeholder={user?.course}
          value={user?.course}
          id="course"
          type="text"
          width="90%"
          height="55px"
          disabled={true}
          backgroundColor="#EBEBE4"
        />
        <Input
          label="Batch"
          // placeholder={user?.batch}
          value={user?.batch}
          id="batch"
          type="text"
          width="90%"
          height="55px"
          disabled={true}
          backgroundColor="#EBEBE4"
        />
      </div>
      <div className="flex justify-center items-center mt-8">
        <button className="relative inline-flex items-center justify-center p-[2px] rounded bg-gradient-to-r from-green-500 to-blue-500" onClick={() => handleSubmit()}>
          <span className="bg-white hover:bg-gray-50 text-[#285192] font-medium rounded px-6 py-3 text-[15px]">
            Generate voucher
          </span>
        </button>
      </div>
      <Table vouchers={allVoucher}/>
    </UserFeeLayout>
  );
};

export default FeePortal;
