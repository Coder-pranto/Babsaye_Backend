const mongoose = require('mongoose');

const supplierPaymentSubCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SupplierPaymentCategory',
    required: true
  }
}, {
  timestamps: true
});

const SupplierPaymentSubCategory = mongoose.model('SupplierPaymentSubCategory', supplierPaymentSubCategorySchema);

module.exports = SupplierPaymentSubCategory;

