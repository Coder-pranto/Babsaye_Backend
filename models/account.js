const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    initialBalance: { type: Number, required: true },
    accountNumber: { type: String, required: true, unique: true },
    contactPerson: { type: String },
    phoneNumber: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Account', accountSchema);
