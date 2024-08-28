const Transaction = require('../models/transaction');
const Account = require('../models/account');

// Create a Transaction
exports.createTransaction = async (req, res) => {
    try {
        const { account, type, credit, debit } = req.body;

        // Find the account to get the current balance
        const foundAccount = await Account.findById(account);
        if (!foundAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }

        // Calculate new balance based on transaction type
        const newBalance = type === 'Credit' 
            ? foundAccount.initialBalance + credit 
            : foundAccount.initialBalance - debit;

        // Create and save the transaction
        const transaction = new Transaction({
            ...req.body,
            balance: newBalance
        });
        await transaction.save();

        // Update the account's initial balance with the new balance
        foundAccount.initialBalance = newBalance;
        await foundAccount.save();

        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Get All Transactions
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find().populate('account client').sort({ date: -1 });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Transaction by ID
exports.getTransactionById = async (req, res) => {
    try {
        const { transactionId } = req.params;
        const transaction = await Transaction.findById(transactionId).populate('account');
        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a Transaction
exports.updateTransaction = async (req, res) => {
    try {
        const { transactionId } = req.params;
        const updatedTransaction = await Transaction.findByIdAndUpdate(transactionId, req.body, { new: true });
        if (!updatedTransaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json(updatedTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a Transaction
exports.deleteTransaction = async (req, res) => {
    try {
        const { transactionId } = req.params;
        const deletedTransaction = await Transaction.findByIdAndDelete(transactionId);
        if (!deletedTransaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

