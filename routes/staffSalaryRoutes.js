const router = require('express').Router();
const {
  getAllSalaries,
  updateSalaries,
} = require('../controllers/staffSalaryController');

router.get('/salaries', getAllSalaries);

router.post('/salaries', updateSalaries);

module.exports = router;
