const express = require('express');
const router = express.Router();
const staffPaymentController = require('../controllers/staffPaymentController');

router.post('/', staffPaymentController.createStaffPayment);
router.get('/', staffPaymentController.getStaffPayments);
router.get('/:id', staffPaymentController.getStaffPaymentById);
router.put('/:id', staffPaymentController.updateStaffPayment);
router.delete('/:id', staffPaymentController.deleteStaffPayment);

module.exports = router;
