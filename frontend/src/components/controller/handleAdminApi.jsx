import axios from "axios";
import { toast } from "react-toastify";
const baseURL = "http://localhost:5000/"

const getAllUsers = async (setAllUsers) => {
  // console.log(" i am in get user function in admin api")
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error("token not available")
      // navigate('/');
    }
    else {
      const res = await axios.get(`${baseURL}user/allUsers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      // console.log("🚀 ~ getAllUsers ~ res:", res.data.data)
      const allUsers = res.data.data
      setAllUsers(allUsers)
    }
  } catch (error) {
    console.log("🚀 ~ getAllUsers ~ error:", error)
  }

}

const getAllVouchers = async (setAllData) => {
  // console.log("i am getAll Voucher")
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error("token not available")
      // navigate('/');
    }
    else {
      const res = await axios.get(`${baseURL}voucher/allVouchers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      // console.log("🚀 ~ getAllVouchers ~ res:", res.data)
      const allVouchers = res.data
      setAllData(allVouchers)
    }
  } catch (error) {
    console.log("🚀 ~ getAllUsers ~ error:", error)
  }

}

// const getVoubyCourse = async (course, setDataByCourse) => {
//   try {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert("Token not available");
//     } else {
//       const res = await axios.get(`${baseURL}voucher/voucherByCourse`,
//         {
//           params: {
//             course: course
//           },
//           headers: {
//             Authorization: `Bearer ${token}`,
//           }
//         }
//       );
//       if (res) setDataByCourse(res.data)
//     }

//   } catch (error) {
//     console.error('Error fetching voucher:', error.response.data.message);
//   }
// }

// const getVoubyMonth = async (month, setDataByMonth) => {
//   try {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert("Token not available");
//     } else {
//       const res = await axios.get(`${baseURL}voucher/voucherByMonth`,
//         {
//           params: {
//             course: month
//           },
//           headers: {
//             Authorization: `Bearer ${token}`,
//           }
//         }
//       );
//       if (res) setDataByMonth(res.data)
//     }

//   } catch (error) {
//     console.error('Error fetching voucher:', error.response.data.message);
//   }
// }

const getUserbyCourse = async (course, setDataByCourse) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("Token not available");
    } else {
      const res = await axios.get(`${baseURL}user/userByCourse`,
        {
          params: {
            course: course
          },
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      if (res) setDataByCourse(res.data)
    }

  } catch (error) {
    console.error('Error fetching voucher:', error.response.data.message);
  }
}

const getVoubyCourseAndMonth = async (course, month, setFilteredData) => {
  console.log("🚀 ~ getVoubyCourseAndMonth ~ course, month, setFilteredData:", course, month)
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("Token not available");
    } else {
      const response = await axios.get(`${baseURL}voucher/voucherbyCourseMonth`, {
        params: {
          course,
          month,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      console.log(response.data)
      setFilteredData(response.data.length > 0 ? response.data : []);
    }
  } catch (error) {
    console.error('Error fetching vouchers by course and month:', error);
  }
};

const updateVoucherStatus = async (item, paymentMode, status) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert("Token not available");
      } else {
        const response = await axios.put(
          `http://localhost:5000/voucher/admin/${item._id}`, // URL with the voucher ID
          { paymentMode , status }, // Body of the PUT request containing the payment mode to be updated
          {
            headers: {
              Authorization: `Bearer ${token}`, // Authorization header with the Bearer token
            },
          }
        );
        console.log(response.data)
      }

    } catch (error) {
      console.error('Error updating voucher status:', error);
    }
  };


export {
  getAllUsers,
  getAllVouchers,
  // getVoubyCourse,
  getUserbyCourse,
  // getVoubyMonth,
  getVoubyCourseAndMonth,
  updateVoucherStatus
}