const MoneyReturnCategory = require('../models/moneyReturnCategory');

// Create a new money return category
exports.createMoneyReturnCategory = async (req, res) => {
  try {
    const moneyReturnCategory = new MoneyReturnCategory(req.body);
    await moneyReturnCategory.save();
    res.status(201).json(moneyReturnCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all money return categories
exports.getMoneyReturnCategories = async (req, res) => {
  try {
    const moneyReturnCategories = await MoneyReturnCategory.find();
    res.status(200).json(moneyReturnCategories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single money return category by ID
exports.getMoneyReturnCategoryById = async (req, res) => {
  try {
    const moneyReturnCategory = await MoneyReturnCategory.findById(req.params.id);
    if (!moneyReturnCategory) return res.status(404).json({ message: 'Money return category not found' });
    res.status(200).json(moneyReturnCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a money return category by ID
exports.updateMoneyReturnCategory = async (req, res) => {
  try {
    const moneyReturnCategory = await MoneyReturnCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!moneyReturnCategory) return res.status(404).json({ message: 'Money return category not found' });
    res.status(200).json(moneyReturnCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a money return category by ID
exports.deleteMoneyReturnCategory = async (req, res) => {
  try {
    const moneyReturnCategory = await MoneyReturnCategory.findByIdAndDelete(req.params.id);
    if (!moneyReturnCategory) return res.status(404).json({ message: 'Money return category not found' });
    res.status(200).json({ message: 'Money return category deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
