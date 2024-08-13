const express = require('express');
const router = express.Router();
const supplierPaymentCategoryController = require('../controllers/supplierPaymentCategoryController');

router.post(
  '/',
  supplierPaymentCategoryController.createSupplierPaymentCategory
);
router.get('/', supplierPaymentCategoryController.getSupplierPaymentCategories);
router.get(
  '/:id',
  supplierPaymentCategoryController.getSupplierPaymentCategoryById
);
router.put(
  '/:id',
  supplierPaymentCategoryController.updateSupplierPaymentCategory
);
router.delete(
  '/:id',
  supplierPaymentCategoryController.deleteSupplierPaymentCategory
);

module.exports = router;
