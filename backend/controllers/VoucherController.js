const Voucher = require('../models/voucher');

const generateVoucher = async (req, res) => {
    const { name, rollNo, course, batch } = req.body;
    // console.log(req.body)
    console.log(req.user.id)

    // Voucher Code
    const voucherCode = `VOUCHER-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // month
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    // due date
    const dueDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 12);
    try {
        const newVoucher = new Voucher({
            user: req.user.id,
            name,
            rollNo,
            course,
            feeAmount: "1000",
            voucherCode,
            month,
            dueDate,
            batch,
        });

        await newVoucher.save();

        res.send({ status: 200, data: newVoucher, message: ' voucher generated successfuly' })

    } catch (error) {
        res.status(500).json({ message: 'Error generating voucher' });
    }
};

const getVouchers = async (req, res) => {
    console.log("i am in getvoucher")
    // console.log(req.user.id)
    // const vouchers = await TodoModel.find({ user: req.user.id });
    // res.send(todos)
    // const { userId } = req.params;
    try {
        const vouchers = await Voucher.find({ user: req.user.id });
        res.status(200).json(vouchers);
        // console.log(vouchers)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching vouchers' });
    }
};

// const updateVoucher = async (req, res) => {
//     const voucherId = req.params
//     console.log("🚀 ~ updateVoucher ~ voucherId:", voucherId.id)
//     try {
//         const find = await Voucher.findByIdAndUpdate(
//             voucherId.id,
//             { status: 'paid' },
//             { new: true }
//         );
//         res.status(200).send({status: 200 , data: find.status , message: "status updated successfully"})
//     } catch (error) {
//         console.error('Error updating voucher status:', error);
//     }
// };

module.exports = {
    generateVoucher,
    getVouchers,
    // updateVoucher
};
