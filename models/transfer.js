const mongoose = require('mongoose');

const transferSchema = new mongoose.Schema({
  fromAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true
  },
  toAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  paymentMethod: {
    type: String,
    enum: ['Cash', 'Bank', 'Other'] // Adjust as necessary
  },
  reference: {
    type: String
  },
  tags: {
    type: [String]
  }
}, {
  timestamps: true
});

const Transfer = mongoose.model('Transfer', transferSchema);

module.exports = Transfer;
