const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const baseURL = "http://localhost:3001/"
// const baseURL = "https://finalhacakthon.vercel.app/"

const stripePayment = async (req, res) => {
    const { voucher } = req.body;
    console.log("🚀 ~ stripePayment ~ voucher:", voucher);

    // Calculate the current date and due date
    const currentDate = new Date();
    const dueDate = new Date(voucher.dueDate);

    // Create line items array with detailed voucher information
    const line_items = [
        {
            price_data: {
                currency: "PKR",
                product_data: {
                    name: `Voucher: ${voucher.voucherCode}`,
                    description: `Name: ${voucher.name}, 
                    Course: ${voucher.course}, 
                    Batch: ${voucher.batch}`,
                    images: ["https://student.saylaniwelfare.com/assets/logo-OpazD70S.png"]
                },
                unit_amount: voucher.feeAmount * 100, // Stripe expects the amount in cents
            },
            quantity: 1
        }
    ];

    // Add late fee if the due date has passed
    if (currentDate > dueDate) {
        line_items.push({
            price_data: {
                currency: "PKR",
                product_data: {
                    name: "Late Fee"
                },
                unit_amount: 100 * 100 // Stripe expects the amount in cents
            },
            quantity: 1
        });
    }

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: "payment",
        success_url: `${baseURL}success?voucherId=${voucher._id}&fee=${voucher.feeAmount}`,
        cancel_url: `${baseURL}feeportal`,

    });

    res.json({ id: session.id });
};

module.exports = {
    stripePayment,
};
