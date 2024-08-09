const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  rollNo: String,
  course: String,
  batch: String,
  feeAmount: Number,
  voucherCode: String,
  month: String,
  dueDate: String,
  paymentMode: { type: String, enum: ['Cash', 'Pending', 'Online'], default: 'Pending' },
  status: { type: String, enum: ['paid', 'pending'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Voucher', voucherSchema);

