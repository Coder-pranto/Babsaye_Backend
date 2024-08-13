const MoneyReturn = require('../models/moneyReturn');

// Create a new money return
exports.createMoneyReturn = async (req, res) => {
  try {
    const moneyReturn = new MoneyReturn(req.body);
    await moneyReturn.save();
    res.status(201).json(moneyReturn);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all money returns
exports.getMoneyReturns = async (req, res) => {
  try {
    const moneyReturns = await MoneyReturn.find().populate('client account category');
    res.status(200).json(moneyReturns);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single money return by ID
exports.getMoneyReturnById = async (req, res) => {
  try {
    const moneyReturn = await MoneyReturn.findById(req.params.id).populate('client account category');
    if (!moneyReturn) return res.status(404).json({ message: 'Money return not found' });
    res.status(200).json(moneyReturn);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a money return by ID
exports.updateMoneyReturn = async (req, res) => {
  try {
    const moneyReturn = await MoneyReturn.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!moneyReturn) return res.status(404).json({ message: 'Money return not found' });
    res.status(200).json(moneyReturn);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a money return by ID
exports.deleteMoneyReturn = async (req, res) => {
  try {
    const moneyReturn = await MoneyReturn.findByIdAndDelete(req.params.id);
    if (!moneyReturn) return res.status(404).json({ message: 'Money return not found' });
    res.status(200).json({ message: 'Money return deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
