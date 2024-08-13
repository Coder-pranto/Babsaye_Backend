const mongoose = require('mongoose');

const clientGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

const ClientGroup = mongoose.model('ClientGroup', clientGroupSchema);
module.exports = ClientGroup;
