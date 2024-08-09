const User = require("../models/user");
const Voucher = require('../models/voucher');
const admin = process.env.adminID


const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const getAllUsers = async (req, res) => {
    try {
        if (req.user.id === admin) {
            const users = await User.find({ preference: { $ne: 'admin' } });
            // Capitalize names for all users
            const updatedUsers = users.map(user => ({
                ...user.toObject(),
                name: capitalizeFirstLetter(user.name)
            }));
            res.status(200).json({ data: updatedUsers });
        } else {
            // throw new Error({status: 400, message: " You are not authorized"})
        }
    } catch (error) {
        // console.error("Error in getAllUsers:", error);
        res.json(error.message);
    }
};
const getUsersByCourse = async (req, res) => {
    try {
        if (req.user.id === admin) {
            const userByCourse = await User.find({ course: req.query.course });
            res.status(200).json(userByCourse);
        } else {
            res.status(200).send({ message: "You are not authorized" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// const deleteUser = async (req, res) => {
//   try {
//     console.log('I am in delete user', req.user.id);
//     if (req.user.id === admin) {
//       console.log("yes")
//       const result = await User.deleteMany({ _id: { $ne: req.user.id } });
//       res.send({ status: 200, data: result, message: 'All non-admin users deleted' });
//     }
//   }
//   catch (error) {
//     console.error("Error in deleteAllUser:", error);
//     res.send({ status: 500, message: "Internal Server Error" });
//   }
// }

const getAllVouchers = async (req, res) => {
    console.log("i am in getvoucher")

    try {
        if (req.user.id === admin) {
            const vouchers = await Voucher.find();
            res.status(200).json(vouchers);
        } else {
            res.status(200).send({ message: "You are not authorized" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// const getVoucherByCourse = async (req, res) => {
//     try {
//         if (req.user.id === admin) {
//             const vouchersbyCourse = await Voucher.find({ course: req.query.course });
//             res.status(200).json(vouchersbyCourse);
//         } else {
//             res.status(200).send({ message: "You are not authorized" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

// const getVoubyMonth = async (req, res) => {
//     try {
//         if (req.user.id === admin) {
//             const vouchersbyMonth = await Voucher.find({ month: req.query.month });
//             res.status(200).json(vouchersbyMonth);
//         } else {
//             res.status(200).send({ message: "You are not authorized" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }
const getVoubyCourseMonth = async (req, res) => {
    // console.log("alkdjf", req.query)
    // console.log("🚀 ~ constgetVoubyCourse_Month= ~ course, month:", course, month)
    try {
        if (req.user.id === admin) {
            const { course, month } = req.query;
            let query = {};

            if (course) {
                query.course = course;
            }

            if (month) {
                query.month = month;  // Assuming 'month' is a field in your voucher schema
            }

            const vouchers = await Voucher.find(query);
            res.json(vouchers);
        } else {
            res.status(200).send({ message: "You are not authorized" });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching vouchers' });
    }
}

const feesUpdateByAdmin = async (req, res) => {
    console.log("🚀 ~ feesUpdateByAdmin ~ req.body:", req.body); // Should log the body content
    console.log("🚀 ~ feesUpdateByAdmin ~ req.params:", req.params); // Should log the route params

    try {
        // Ensure that 'admin' is defined and 'req.user.id' is available
        if (req.user.id === admin) {
            const { paymentMode, status } = req.body; // Destructure paymentMode from req.body
            const find = await Voucher.findByIdAndUpdate(
                req.params.id, // ID from the request parameters
                { paymentMode , status }, // The new paymentMode to update
                { new: true } // Return the updated document
            );

            if (find) {
                res.status(200).send({ status: 200, data: find, message: "PaymentMode updated successfully" });
            } else {
                res.status(404).send({ status: 404, message: "Voucher not found" });
            }
        } else {
            res.status(403).send({ status: 403, message: "Unauthorized" });
        }
    } catch (error) {
        console.error('Error updating voucher status:', error);
        res.status(500).send({ status: 500, message: "Internal server error", error });
    }
};



module.exports = {
    getAllUsers,
    getAllVouchers,
    // getVoucherByCourse,
    // deleteUser,
    getUsersByCourse,
    // getVoubyMonth,
    getVoubyCourseMonth,
    feesUpdateByAdmin
}