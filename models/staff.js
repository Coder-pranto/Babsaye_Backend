const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
    },
    image: {
      type: String,
    },
    present_address: {
      type: String,
    },
    permanent_address: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
    },
    educational_qualification: {
      type: String,
    },
    role: {
      type: String,
      enum: ['Admin', 'User', 'Manager'],
      default:"User"
    },
    permissions: {
      type: [String],
      default: [], // Default to an empty array if no permissions are assigned
    },
  },
  {
    timestamps: true,
  }
);

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
