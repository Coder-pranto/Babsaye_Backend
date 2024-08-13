const Transfer = require('../models/transfer');

// Create a new transfer
exports.createTransfer = async (req, res) => {
  try {
    const transfer = new Transfer(req.body);
    await transfer.save();
    res.status(201).json(transfer);
  } catch (error) {
    res.status(400).json({ message: error.message });
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
