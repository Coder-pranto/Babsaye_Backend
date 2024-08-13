const mongoose = require('mongoose');

const receiveSubCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ReceiveCategory',
    required: true
  }
}, {
  timestamps: true
});

const ReceiveSubCategory = mongoose.model('ReceiveSubCategory', receiveSubCategorySchema);

module.exports = ReceiveSubCategory;
