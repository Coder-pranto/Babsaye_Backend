const mongoose = require('mongoose');

const expenseSubCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ExpenseCategory',
    required: true
  }
}, {
  timestamps: true
});

const ExpenseSubCategory = mongoose.model('ExpenseSubCategory', expenseSubCategorySchema);

module.exports = ExpenseSubCategory;
