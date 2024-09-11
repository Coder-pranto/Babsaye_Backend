const mongoose = require('mongoose');
const BankAccount = require('./bank');

// Transaction Schema
const TransactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['deposit', 'withdrawal', 'transfer'],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  fromAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BankAccount',
    required: function () {
      return this.type === 'transfer';
    }
  },
  toAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BankAccount',
    required: function () {
      return this.type === 'transfer';
    }
  },
}, { timestamps: true });

// Pre-save hook to update balances based on transaction type
TransactionSchema.pre('save', async function(next) {
  const transaction = this;

  if (transaction.type === 'deposit') {
    await BankAccount.updateBalance(transaction.toAccount, transaction.amount, 'deposit');
  } else if (transaction.type === 'withdrawal') {
    await BankAccount.updateBalance(transaction.fromAccount, transaction.amount, 'withdrawal');
  } else if (transaction.type === 'transfer') {
    await BankAccount.updateBalance(transaction.fromAccount, transaction.amount, 'withdrawal');
    await BankAccount.updateBalance(transaction.toAccount, transaction.amount, 'deposit');
  }
  next();
});

module.exports = mongoose.model('Transactionbank', TransactionSchema);
