const mongoose = require('mongoose');

// Bank Account Schema
const BankAccountSchema = new mongoose.Schema({
  bankName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
  description:{
    type: String,
  },
  transactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transactionbank'
  }]
}, { timestamps: true });

// Static method to update balance after a transaction
BankAccountSchema.statics.updateBalance = async function(accountId, amount, type) {
  const account = await this.findById(accountId);
  
  if (type === 'deposit') {
    account.balance += amount;
  } else if (type === 'withdrawal') {
    account.balance -= amount;
    if (account.balance < 0) throw new Error('Insufficient funds');
  }

  await account.save();
  return account;
};

module.exports = mongoose.model('BankAccount', BankAccountSchema);
