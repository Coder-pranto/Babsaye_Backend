const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },
  amount: {
    type: Number
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ExpenseCategory'
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ExpenseSubCategory'
  },
  paymentMethod: {
    type: String,
    enum: ['Cash', 'Bank', 'Other'] // Adjust as necessary
  },
  bank: {
    type: String
  },
  chequeNo: {
    type: String
  },
  description: {
    type: String
  },
  file: {
    type: String
  }
}, {
  timestamps: true
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
