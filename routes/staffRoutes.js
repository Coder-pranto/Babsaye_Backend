const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
const upload = require('../middlewares/upload'); // Path to your upload middleware

router.post('/', upload.single('image'), staffController.createStaff);
router.get('/', staffController.getStaff);
router.get('/:id', staffController.getStaffById);
router.put('/:id', upload.single('image'), staffController.updateStaff);
// router.put('/update-salaries', staffController.updateStaffSalaries);
router.delete('/:id', staffController.deleteStaff);

module.exports = router;
