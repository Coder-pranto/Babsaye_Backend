const mongoose = require('mongoose');

const UserDocumentSchema = new mongoose.Schema({
  userId: {
    type: String, 
    // type: mongoose.Schema.Types.ObjectId, 
    required: true,
  },
  nidFront: {
    type: String,
    required: true,
  },
  nidBack: {
    type: String,
    required: true,
  },
  tradeLicence: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('UserDocument', UserDocumentSchema);
