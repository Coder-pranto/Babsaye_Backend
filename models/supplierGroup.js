const mongoose = require('mongoose');

const supplierGroupSchema = new mongoose.Schema({
  groupName: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const SupplierGroup = mongoose.model('SupplierGroup', supplierGroupSchema);

module.exports = SupplierGroup;
