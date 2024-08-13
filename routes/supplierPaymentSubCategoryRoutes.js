const express = require('express');
const router = express.Router();
const supplierPaymentSubCategoryController = require('../controllers/supplierPaymentSubCategoryController');

router.post(
  '/',
  supplierPaymentSubCategoryController.createSupplierPaymentSubCategory
);
router.get(
  '/',
  supplierPaymentSubCategoryController.getSupplierPaymentSubCategories
);
router.get(
  '/:id',
  supplierPaymentSubCategoryController.getSupplierPaymentSubCategoryById
);
router.put(
  '/:id',
  supplierPaymentSubCategoryController.updateSupplierPaymentSubCategory
);
router.delete(
  '/:id',
  supplierPaymentSubCategoryController.deleteSupplierPaymentSubCategory
);

module.exports = router;
