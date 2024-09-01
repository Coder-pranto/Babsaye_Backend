const express = require('express');
const router = express.Router();
const {
  createOrUpdateSalary,
  updateSalaryStatus,
  getSalariesByStaff,
  getSalaryById,
  deleteSalary,
  getSalariesByMonthAndYear, // Import the new controller method
} = require('../controllers/staffSalaryController');

// Create or update salary
router.post('/', createOrUpdateSalary);

// Update salary status
router.put('/:id/status', updateSalaryStatus);

// Get salaries by staff ID
router.get('/staff/:staffId', getSalariesByStaff);

// Get salary by ID
router.get('/:id', getSalaryById);

// Get salaries by month and year
router.get('/:month/:year', getSalariesByMonthAndYear);  // Define the new route

// Delete salary by ID
router.delete('/:id', deleteSalary);

module.exports = router;
