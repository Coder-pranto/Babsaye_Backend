const mongoose = require('mongoose');

const staffDepartmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const StaffDepartment = mongoose.model('StaffDepartment', staffDepartmentSchema);

module.exports = StaffDepartment;
