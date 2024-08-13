const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  idNo: {
    type: String,
    unique: true
  },
  name: {
    type: String,
  },
  companyName: {
    type: String
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  phoneNumber2: {
    type: String
  },
  previousDue: {
    type: Number,
    default: 0
  },
  email: {
    type: String,
    unique: true
  },
  dateOfBirth: {
    type: Date
  },
  upzilla: {
    type: String
  },
  streetOrRoad: {
    type: String
  },
  reference: {
    type: String
  },
  zipCode: {
    type: String
  },
  clientGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ClientGroup'
  },
  image: {
    type: String
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
    lowercase: true
  }
}, {
  timestamps: true
});


const Client = mongoose.model('Client', clientSchema);

module.exports = Client;