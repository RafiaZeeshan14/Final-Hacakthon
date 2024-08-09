const { Router } = require("express");
const { stripePayment } = require("../controllers/StripeController");

const router = Router();
router.post('/create-checkout-session' , stripePayment)

module.exports = router