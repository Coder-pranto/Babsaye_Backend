const Account = require('../models/account');
const Transaction = require('../models/transaction');

// Create Account
exports.createAccount = async (req, res) => {
    try {
        const account = new Account(req.body);
        await account.save();
        res.status(201).json(account);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// List Accounts
exports.getAccounts = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Account by ID
exports.getAccountById = async (req, res) => {
    try {
        const { accountId } = req.params;
        const account = await Account.findById(accountId);
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.status(200).json(account);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Account
exports.updateAccount = async (req, res) => {
    try {
        const { accountId } = req.params;
        const updatedAccount = await Account.findByIdAndUpdate(accountId, req.body, { new: true });
        if (!updatedAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.status(200).json(updatedAccount);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Account
exports.deleteAccount = async (req, res) => {
    try {
        const { accountId } = req.params;
        const deletedAccount = await Account.findByIdAndDelete(accountId);
        if (!deletedAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Account Balance
exports.getAccountBalance = async (req, res) => {
    try {
        const { accountId } = req.params;
        const transactions = await Transaction.find({ account: accountId }).sort({ date: 1 });
        const balance = transactions.reduce((acc, txn) => txn.type === 'Credit' ? acc + txn.credit : acc - txn.debit, 0);
        res.status(200).json({ balance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Account Statement
exports.getAccountStatement = async (req, res) => {
    try {
        const { accountId } = req.params;
        const transactions = await Transaction.find({ account: accountId }).populate('client').sort({ date: 1 });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


