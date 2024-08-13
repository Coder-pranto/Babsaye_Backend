const mongoose = require('mongoose');

const supplierPaymentCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

const SupplierPaymentCategory = mongoose.model('SupplierPaymentCategory', supplierPaymentCategorySchema);

module.exports = SupplierPaymentCategory;
