const mongoose = require('mongoose');

const staffPaymentSchema = new mongoose.Schema({
  month: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  transactionType: {
    type: String,
    enum: ['credit', 'debit'], 
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
    unique: true, 
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ExpenseCategory',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('StaffPayment', staffPaymentSchema);
