const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  inTime: {
    type: String, // Format: "HH:MM AM/PM"
    required: true,
  },
  outTime: {
    type: String, // Format: "HH:MM AM/PM"
    required: true,
  },
  status: {
    type: String,
    enum: ['Present', 'Absent', 'Late', 'Leave'],
    required: true,
  },
}, {
  timestamps: true,
});

// Creating indexes for faster queries
attendanceSchema.index({ staff: 1, date: 1 }, { unique: true });

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
 