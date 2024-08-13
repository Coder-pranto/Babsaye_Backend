const mongoose = require('mongoose');

const moneyReturnSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MoneyReturnCategory',
    required: true,
  },
  description: {
    type: String,
  },
}, {
  timestamps: true
});

const MoneyReturn = mongoose.model('MoneyReturn', moneyReturnSchema);

module.exports = MoneyReturn;
