const mongoose = require('mongoose');

const transferSchema = new mongoose.Schema({
  fromAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',

  },
  toAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',

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
    enum: ['cash', 'bank','credit', 'other']
  },
  reference: {
    type: String
  },
  tags: {
    type: [String]
  },
  transactionType: {  
    type: String,
    enum: ['transfer', 'deposit', 'withdraw'],
    required: true
  }
}, {
  timestamps: true
});

const Transfer = mongoose.model('Transfer', transferSchema);

module.exports = Transfer;
