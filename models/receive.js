const mongoose = require('mongoose');

const receiveSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String
  },
  amount: {
    type: Number
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ReceiveCategory'
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ReceiveSubCategory'
  },
  paymentMethod: {
    type: String,
    enum: ['Cash', 'Bank', 'Other'] // Adjust as necessary
  },
  chequeNo: {
    type: String
  },
  bank: {
    type: String
  },
  smsNotification: {
    type: Boolean,
    default: false
  },
  emailNotification: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Receive = mongoose.model('Receive', receiveSchema);

module.exports = Receive;
