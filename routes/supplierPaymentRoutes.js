const express = require('express');
const router = express.Router();
const supplierPaymentController = require('../controllers/supplierPaymentController');
const upload = require('../middlewares/upload');

router.post(
  '/',
  upload.single('file'),
  supplierPaymentController.createSupplierPayment
);
router.get('/', supplierPaymentController.getSupplierPayments);
router.get('/:id', supplierPaymentController.getSupplierPaymentById);
router.put(
  '/:id',
  upload.single('file'),
  supplierPaymentController.updateSupplierPayment
);
router.delete('/:id', supplierPaymentController.deleteSupplierPayment);

module.exports = router;
