const Account = require('../models/account');

const createAccount = async (req, res) => {
  try {
    const { accountTitle, initialBalance, accountNumber, contactPerson, phoneNumber, description } = req.body;
    const newAccount = new Account({
      accountTitle,
      initialBalance,
      accountNumber,
      contactPerson,
      phoneNumber,
      description
    });

    await newAccount.save();
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAccountById = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.status(200).json(account);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }

    const { accountTitle, initialBalance, accountNumber, contactPerson, phoneNumber, description } = req.body;

    account.accountTitle = accountTitle || account.accountTitle;
    account.initialBalance = initialBalance || account.initialBalance;
    account.accountNumber = accountNumber || account.accountNumber;
    account.contactPerson = contactPerson || account.contactPerson;
    account.phoneNumber = phoneNumber || account.phoneNumber;
    account.description = description || account.description;

    await account.save();
    res.status(200).json(account);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }

    await account.remove();
    res.status(200).json({ message: 'Account deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createAccount,
  getAccounts,
  getAccountById,
  updateAccount,
  deleteAccount
};
