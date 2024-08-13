const mongoose = require('mongoose');

const moneyReturnCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  timestamps: true
});

const MoneyReturnCategory = mongoose.model('MoneyReturnCategory', moneyReturnCategorySchema);

module.exports = MoneyReturnCategory;
