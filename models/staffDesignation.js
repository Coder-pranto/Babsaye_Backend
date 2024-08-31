const mongoose = require('mongoose');

const staffDesignationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StaffDepartment',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const StaffDesignation = mongoose.model('StaffDesignation', staffDesignationSchema);

module.exports = StaffDesignation;
