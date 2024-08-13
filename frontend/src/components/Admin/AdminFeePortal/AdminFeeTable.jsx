import React, { useEffect, useState } from 'react';
import { getAllVouchers, getVoubyCourseAndMonth, updateVoucherStatus, } from '../../controller/handleAdminApi';
import { formatDate } from '../../helperFunction/helperFunction';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import AdminDropdowns from './AdminDropdowns';
import AdminInfolayout from '../../Layouts/AdminInfoLayout';

const AdminFeeTable = () => {
  const [alldata, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [course, setCourse] = useState('');
  const [month, setMonth] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  // const [editData, setEditData] = useState({});
  const [paymentMode, setPaymentMode] = useState();
  const [status, setStatus] = useState();


  useEffect(() => {
    getAllVouchers(setAllData);
  }, []);

  useEffect(() => {
    // Fetch filtered vouchers based on course and month
    if (course || month) {
      getVoubyCourseAndMonth(course, month, setFilteredData)
    } else {
      // If no filter is applied, clear filteredData
      setFilteredData();
    }
  }, [course, month]);


  const getCourse = (e) => {
    setCourse(e.target.value);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
  };

  const handlePaymentModeChange = (e) => {
    console.log(e.target.value);
    setPaymentMode(e.target.value)
  };

  const handleStatusChange = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value)
  };


  const handleSave = async (item) => {
    console.log(item);
    if (paymentMode || status) {
      await updateVoucherStatus(item, paymentMode, status)
      setEditIndex(null)
      await getAllVouchers(setAllData);
      await getVoubyCourseAndMonth(course, month, setFilteredData)
    }
  };

  const handleCancel = () => {
    setEditIndex(null)
  };

  const getMonth = (e) => {
    setMonth(e.target.value);
  };

  const vouchersToDisplay = filteredData ? filteredData : alldata;

  const renderFallbackRow = () => (
    <tr className="bg-gray-50 even:bg-gray-100">
      <td className="py-2 text-center">--</td>
      <td className="py-2 text-center">--</td>
      <td className="py-2 text-center">--</td>
      <td className="py-2 text-center">--</td>
      <td className="py-2 text-center">--</td>
      <td className="py-2 text-center">--</td>
      <td className="py-2 text-center">--</td>
    </tr>
  );

  return (
    <AdminInfolayout>
      <div className='flex flex-col p-2  '>
        <AdminDropdowns filterByCourse={getCourse} filterByMonth={getMonth} displayMonth={true} />
        <div className="container sm:pl-2 mx-auto mt-8">
          <h2 className="text-2xl font-semibold gradient-text">Summary</h2>
          <table className="min-w-full bg-white mt-4">
            <thead>
              <tr className='text-xs sm:text-base'>
                <th className="py-2 w-2/12 ">Student Name</th>
                <th className="py-2 w-1/12">Due Date</th>
                <th className="py-2 w-2/12">Amount</th>
                <th className="py-2 w-2/12">Payment Mode</th>
                <th className="py-2 w-2/12">Status</th>
                <th className="py-2 w-2/12">Batch</th>
                <th className="py-2 w-2/12">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vouchersToDisplay.length === 0 ? (
                renderFallbackRow()
              )
                :
                vouchersToDisplay.map((item, index) => (
                  <tr key={index} className="bg-gray-50 even:bg-gray-100 sm:text-sm text-xs ">
                    <td className="py-3 text-center">{item?.name}</td>
                    <td className="py-2 text-center">{formatDate(item?.dueDate)}</td>
                    <td className="py-2 text-center">
                      {
                        item.feeAmount
                          ? (item.dueDate && new Date(item.createdAt) > new Date(item.dueDate)
                            ? `Rs.${item.feeAmount + 100}/=`
                            : `Rs.${item.feeAmount}/=`)
                          : "--"
                      }
                    </td>
                    <td className="py-2 text-center">
                      {item?.paymentMode === "Cash" || item?.paymentMode === "Online" ?
                        (
                          item?.paymentMode
                        )
                        :
                        editIndex === index ? (
                          <select
                            name="paymentMode"
                            value={paymentMode}
                            onChange={handlePaymentModeChange}
                            className="border border-gray-300 rounded px-2 py-1"

                          >
                            <option value="">Select Mode</option>
                            <option value="Online">Online</option>
                            <option value="Cash">Cash</option>
                            <option value="Pending">Pending</option>
                          </select>
                        ) : (
                          item?.paymentMode
                        )
                      }
                    </td>
                    <td className="py-2 text-center ">
                      {item?.status === "paid" ?
                        (
                          <span
                            className={`px-2 py-1 rounded-full text-xs sm:text-sm ${item.status === "paid"
                              ? "bg-green-100 text-green-700"
                              : item.status === "Pending"
                                ? "bg-gray-100 text-gray-700"
                                : "bg-yellow-100 text-yellow-700 "
                              }`}
                          >
                            {item?.status}
                          </span>
                        )
                        :
                        (

                          editIndex === index ? (
                            <select
                              name="status"
                              value={status}
                              onChange={handleStatusChange}
                              className="border border-gray-300 rounded px-2 py-1"
                            >
                              <option value="">Select Status</option>
                              <option value="paid">Paid</option>
                              <option value="Pending">Pending</option>
                            </select>
                          ) : (
                            <span
                              className={`px-2 py-1 rounded-full text-sm ${item.status === "paid"
                                ? "bg-green-100 text-green-700"
                                : item.status === "Pending"
                                  ? "bg-gray-100 text-gray-700"
                                  : "bg-yellow-100 text-yellow-700"
                                }`}
                            >
                              {item?.status}
                            </span>
                          )

                        )
                      }
                    </td>
                    <td className="py-2 text-center">
                      {item?.batch}
                      {/* {{editIndex === index ? (
                        <select
                          name="batch"
                          value={editData.batch}
                          // onChange={handleInputChange}
                          className="border border-gray-300 rounded px-4 py-1 bg-transparent text-xs"
                        >
                          <option value="Batch 1">1</option>
                          <option value="Batch 2">2</option>
                          <option value="Batch 7">7</option>
                          <option value="Batch 8">8</option>
                        </select>
                      ) : (
                        <select
                          className="border border-gray-300 rounded px-4 py-1 bg-transparent text-xs"
                          disabled
                        >
                          <option value={item?.batch}>{item?.batch}</option>
                        </select>
                      )}} */}
                    </td>
                    <td className="py-2 text-center">
                      {editIndex === index ? (
                        <>
                          <button
                            className="text-green-500 hover:text-green-700 mx-1"
                            onClick={() => handleSave(item)}
                          >
                            Save
                          </button>
                          <button
                            className="text-gray-500 hover:text-gray-700 mx-1"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="text-blue-500 hover:text-blue-700 mx-1"
                            onClick={() => handleEditClick(index, item)}
                            disabled={item?.paymentMode !== "Pending"}
                          >
                            <FaEdit />
                          </button>

                        </>
                      )}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </AdminInfolayout>
  );
};

export default AdminFeeTable;

