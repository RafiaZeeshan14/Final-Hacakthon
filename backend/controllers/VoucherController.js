const Voucher = require('../models/voucher');

const generateVoucher = async (req, res) => {
    const { name, rollNo, course, batch } = req.body;
    console.log(req.user.id)

    // Voucher Code
    const voucherCode = `VOUCHER-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // month
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    // due date
    const dueDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 12);

    const existingVoucher = await Voucher.findOne({ month, user: req.user.id })
    // console.log("🚀 ~ generateVoucher ~ existingVoucher:", existingVoucher)
    try {
        if (existingVoucher) {
             return res.status(400).json({ message: "Voucher already generated" });
        } else {
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
        }

    } catch (error) {
        // console.error("Error generating voucher:", error);
        res.status(500).json({ message: 'An error occurred while generating the voucher' });
    }
};

const getVouchers = async (req, res) => {
    console.log("i am in getvoucher")
    try {
        const vouchers = await Voucher.find({ user: req.user.id });
        res.status(200).json(vouchers);
        // console.log(vouchers)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching vouchers' });
    }
};

const updateVoucher = async (req, res) => {
    const voucherId = req.params
    console.log("🚀 ~ updateVoucher ~ voucherId:", voucherId.id)
    try {
        const find = await Voucher.findByIdAndUpdate(
            voucherId.id,
            {
                status: 'paid',
                paymentMode: 'Online'
            },
            { new: true }
        );
        res.status(200).send({ status: 200, data: find, message: "status updated successfully" })
    } catch (error) {
        console.error('Error updating voucher status:', error);
    }
};


module.exports = { generateVoucher, getVouchers, updateVoucher };
