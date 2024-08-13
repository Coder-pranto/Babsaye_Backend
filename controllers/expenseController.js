const Expense = require('../models/expense');

// Create a new expense
exports.createExpense = async (req, res) => {
  try {
    const expenseData = req.body;
    if (req.file) {
      expenseData.file = req.file.path;
    }
    const expense = new Expense(expenseData);
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find()
      .populate('account')
      .populate('category')
      .populate('subcategory');
    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single expense by ID
exports.getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id)
      .populate('account')
      .populate('category')
      .populate('subcategory');
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.status(200).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an expense by ID
exports.updateExpense = async (req, res) => {
  try {
    const expenseData = req.body;
    if (req.file) {
      expenseData.file = req.file.path;
    }
    const expense = await Expense.findByIdAndUpdate(req.params.id, expenseData, { new: true });
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.status(200).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an expense by ID
exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
