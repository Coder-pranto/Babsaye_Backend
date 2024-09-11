const Transfer = require('../models/transfer');
const Account = require('../models/account');

// Create a new transfer
exports.createTransfer = async (req, res) => {
  const { fromAccount, toAccount, amount, description, paymentMethod, reference, tags, transactionType } = req.body;
  try {
      let fromAcc, toAcc;

      // Handle transfer between accounts
      if (transactionType === 'transfer') {
          fromAcc = await Account.findById(fromAccount);
          toAcc = await Account.findById(toAccount);

          if (!fromAcc || !toAcc) {
              return res.status(404).json({ message: 'Account not found' });
          }

          const fromBalance = Number(fromAcc.initialBalance);
          const toBalance = Number(toAcc.initialBalance);

          if (fromBalance < amount) {
              return res.status(400).json({ message: 'Insufficient balance in source account' });
          }

          fromAcc.initialBalance = fromBalance - Number(amount);  
          toAcc.initialBalance = toBalance + Number(amount);    

          await fromAcc.save();
          await toAcc.save();

      } else {
          // Handle deposit or withdrawal
          const selectedAccount = await Account.findById(fromAccount || toAccount);
          if (!selectedAccount) {
              return res.status(404).json({ message: 'Account not found' });
          }

          const currentBalance = Number(selectedAccount.initialBalance);

          if (transactionType === 'withdrawal' && currentBalance < amount) {
              return res.status(400).json({ message: 'Insufficient balance for withdrawal' });
          }

          selectedAccount.initialBalance = currentBalance + (transactionType === 'deposit' ? Number(amount) : -Number(amount));
          await selectedAccount.save();
      }

      // Create and save the transfer
      const transfer = new Transfer({
          fromAccount,
          toAccount,
          amount,
          description,
          paymentMethod,
          reference,
          tags,
          transactionType
      });
      await transfer.save();

      res.status(201).json(transfer);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};


// Get all transfers
exports.getTransfers = async (req, res) => {
  try {
    const transfers = await Transfer.find().populate('fromAccount toAccount');
    res.status(200).json(transfers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single transfer by ID
exports.getTransferById = async (req, res) => {
  try {
    const transfer = await Transfer.findById(req.params.id).populate('fromAccount toAccount');
    if (!transfer) return res.status(404).json({ message: 'Transfer not found' });
    res.status(200).json(transfer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a transfer by ID
exports.updateTransfer = async (req, res) => {
  try {
    const transfer = await Transfer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!transfer) return res.status(404).json({ message: 'Transfer not found' });
    res.status(200).json(transfer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a transfer by ID
exports.deleteTransfer = async (req, res) => {
  try {
    const transfer = await Transfer.findByIdAndDelete(req.params.id);
    if (!transfer) return res.status(404).json({ message: 'Transfer not found' });
    res.status(200).json({ message: 'Transfer deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};





