const express = require('express');
const router = express.Router();
const { generateVoucher, getVouchers, updateVoucher } = require('../controllers/VoucherController');
const { getAllVouchers, getVoucherByCourse , getVoubyMonth, getVoubyCourseMonth, feesUpdateByAdmin } = require('../controllers/AdminController');
const { auth } = require('../middleware/auth.js')

router.post('/generate', auth, generateVoucher);
router.get('/', auth, getVouchers);
router.put('/:id',  updateVoucher)
router.get('/allVouchers', auth, getAllVouchers);
// router.get('/voucherByCourse', auth, getVoucherByCourse)
// router.get('/voucherByMonth', auth, getVoubyMonth)
router.get('/voucherbyCourseMonth', auth, getVoubyCourseMonth)
router.put('/admin/:id', auth ,  feesUpdateByAdmin)



module.exports = router;