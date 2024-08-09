const { Router } = require("express");
const { generateVoucher } = require("../controllers/pdfController");

const router = Router();
router.post('/' , generateVoucher)

module.exports = router