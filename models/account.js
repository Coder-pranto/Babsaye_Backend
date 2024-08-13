const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  accountTitle: {
    type: String,
    // required: true
  },
  initialBalance: {
    type: Number,
    default: 0
  },
  accountNumber: {
    type: String,
    unique: true
  },
  contactPerson: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  description: {
    type: String
  }
}, {
  timestamps: true
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
