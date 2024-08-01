const express = require('express');
const router = express.Router();
const { generateVoucher, getVouchers, updateVoucher } = require('../controllers/VoucherController');
const { auth } = require('../middleware/auth.js')

router.post('/generate', auth, generateVoucher);
router.get('/', auth, getVouchers);
router.put('/:id',  updateVoucher)

module.exports = router;