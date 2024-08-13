const mongoose = require('mongoose');

const supplierPaymentSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Supplier'
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
    ref: 'SupplierPaymentCategory'
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SupplierPaymentSubCategory'
  },
  paymentMethod: {
    type: String,
    enum: ['Cash', 'Bank', 'Other']
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

const SupplierPayment = mongoose.model('SupplierPayment', supplierPaymentSchema);

module.exports = SupplierPayment;
