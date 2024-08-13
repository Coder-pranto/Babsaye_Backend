const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  phoneNumberOptional: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  previousDue: {
    type: Number,
    default: 0,
  },
  zipCode: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
  },
  bankAccount: {
    type: String,
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SupplierGroup', // Assuming there's a SupplierGroup model
  },
  file: {
    type: String, // Assuming this will store the file path
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active',
  }
}, {
  timestamps: true
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
