const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Create a new attendance record
router.post('/', attendanceController.createAttendance);

// Get attendance records by date
router.get('/date', attendanceController.getAttendanceByDate);

// Get attendance records by month and year
router.get('/monthly', attendanceController.getStaffsByMonthAndYear);

// Get attendance records by staff ID with optional date range
router.get('/staff/:staffId', attendanceController.getAttendanceByStaff);

// Get monthly attendance for a staff member
router.get('/staff/:staffId/monthly', attendanceController.getMonthlyAttendance);

// Update an attendance record
router.put('/:id', attendanceController.updateAttendance);

// Delete an attendance record
router.delete('/:id', attendanceController.deleteAttendance);

module.exports = router;
