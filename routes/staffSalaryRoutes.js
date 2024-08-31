const express = require('express');
const router = express.Router();
const {
  createOrUpdateSalary,
  getSalariesByStaff,
  getSalaryById,
  deleteSalary,
} = require('../controllers/staffSalaryController');

// Create or update salary
router.post('/', createOrUpdateSalary);

// Get salaries by staff ID
router.get('/staff/:staffId', getSalariesByStaff);

// Get salary by ID
router.get('/:id', getSalaryById);

// Delete salary by ID
router.delete('/:id', deleteSalary);

module.exports = router;
