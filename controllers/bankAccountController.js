
const BankAccount = require('../models/bank');
const Transactionbank = require('../models/transactionbank');

// Get All Bank Accounts
exports.getBankAccounts = async (req, res) => {
  try {
    const accounts = await BankAccount.find().populate('transactions');
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Create New Bank Account
exports.createBankAccount = async (req, res) => {
  const { bankName, accountNumber, balance, description} = req.body;

  try {
    const newAccount = new BankAccount({ bankName, accountNumber, balance, description });
    await newAccount.save();
    res.json(newAccount);
  } catch (error) {
    res.status(500).json({ error: 'Server Error', msg: error.message });
  }
};

// Make a Deposit
exports.depositFunds = async (req, res) => {
  const { accountId, amount } = req.body;

  try {
    const newTransaction = new Transactionbank({ type: 'deposit', amount, toAccount: accountId });
    await newTransaction.save();
    res.json({ message: 'Deposit successful', transaction: newTransaction });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Withdraw Funds
exports.withdrawFunds = async (req, res) => {
  const { accountId, amount } = req.body;

  try {
    const newTransaction = new Transactionbank({ type: 'withdrawal', amount, fromAccount: accountId });
    await newTransaction.save();
    res.json({ message: 'Withdrawal successful', transaction: newTransaction });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Transfer Funds
exports.transferFunds = async (req, res) => {
  const { fromAccountId, toAccountId, amount } = req.body;

  try {
    const newTransaction = new Transactionbank({
      type: 'transfer',
      amount,
      fromAccount: fromAccountId,
      toAccount: toAccountId
    });
    await newTransaction.save();
    res.json({ message: 'Transfer successful', transaction: newTransaction });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
