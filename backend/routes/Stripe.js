const { Router } = require("express");
const { stripePayment, getPublicKey } = require("../controllers/StripeController");

const router = Router();
router.post('/create-checkout-session' , stripePayment)
router.get('/', getPublicKey) 

module.exports = router