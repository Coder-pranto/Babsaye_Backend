const Attendance = require('../models/attendance');
const Staff = require('../models/staff');

// Create a new attendance record
exports.createAttendance = async (req, res) => {
  try {
    const { staffId, date, inTime, outTime, status } = req.body;
    console.log(staffId);

    // Validate staff existence
    const staff = await Staff.findById(staffId);
    if (!staff) {
      return res.status(404).json({ message: 'Staff member not found' });
    }

    // Check for existing attendance record for the same date and staff
    const existingRecord = await Attendance.findOne({ staff: staffId, date });
    if (existingRecord) {
      return res.status(400).json({ message: 'Attendance record already exists for this date and staff member' });
    }

    const attendance = new Attendance({
      staff: staffId,
      date,
      inTime,
      outTime,
      status,
    });

    await attendance.save();

    res.status(201).json({ message: 'Attendance record created successfully', attendance });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Get attendance records by specific date
exports.getAttendanceByDate = async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ message: 'Date is required' });
    }

    const attendanceRecords = await Attendance.find({ date: new Date(date) }).populate('staff', 'name phone');

    res.status(200).json({ attendanceRecords });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


// Get attendance records by specific month and year
exports.getStaffsByMonthAndYear = async (req, res) => {
    try {
      const { month, year } = req.query;
  
      if (!month || !year) {
        return res.status(400).json({ message: 'Month and Year are required' });
      }
  
      // Convert month and year into a date range
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(year, month, 0); // Last day of the month
  
      const attendanceRecords = await Attendance.find({
        date: { $gte: startDate, $lte: endDate },
      }).populate('staff', 'name phone').sort({ date: 1 });
  
      res.status(200).json({ attendanceRecords });
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };
  

// Get monthly attendance for a staff member
exports.getMonthlyAttendance = async (req, res) => {
    try {
      const { staffId } = req.params;
      const { month, year } = req.query;
  
      if (!month || !year) {
        return res.status(400).json({ message: 'Month and Year are required' });
      }
  
      // Validate staff existence
      const staff = await Staff.findById(staffId);
      if (!staff) {
        return res.status(404).json({ message: 'Staff member not found' });
      }
  
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(year, month, 0); // Last day of the month
  
      const attendanceRecords = await Attendance.find({
        staff: staffId,
        date: { $gte: startDate, $lte: endDate },
      }).sort({ date: 1 });
  
      // Calculate totals
      const totals = {
        Present: 0,
        Absent: 0,
        Late: 0,
        Leave: 0,
      };
  
      attendanceRecords.forEach(record => {
        totals[record.status] += 1;
      });
  
      res.status(200).json({ attendanceRecords, totals });
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };

  
// Get attendance records by staff ID
exports.getAttendanceByStaff = async (req, res) => {
  try {
    const { staffId } = req.params;
    const { startDate, endDate } = req.query;

    // Validate staff existence
    const staff = await Staff.findById(staffId);
    if (!staff) {
      return res.status(404).json({ message: 'Staff member not found' });
    }

    const query = { staff: staffId };
    if (startDate && endDate) {
      query.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    const attendanceRecords = await Attendance.find(query).sort({ date: 1 });

    res.status(200).json({ attendanceRecords });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Update an attendance record
exports.updateAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const { inTime, outTime, status } = req.body;

    const attendance = await Attendance.findById(id);
    if (!attendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    if (inTime) attendance.inTime = inTime;
    if (outTime) attendance.outTime = outTime;
    if (status) attendance.status = status;

    await attendance.save();

    res.status(200).json({ message: 'Attendance record updated successfully', attendance });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Delete an attendance record
exports.deleteAttendance = async (req, res) => {
  try {
    const { id } = req.params;

    const attendance = await Attendance.findByIdAndDelete(id);
    if (!attendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    res.status(200).json({ message: 'Attendance record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
