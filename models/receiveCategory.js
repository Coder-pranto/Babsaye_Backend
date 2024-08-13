const mongoose = require('mongoose');

const receiveCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

const ReceiveCategory = mongoose.model('ReceiveCategory', receiveCategorySchema);

module.exports = ReceiveCategory;
