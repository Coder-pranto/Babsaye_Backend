const express = require('express');
const router = express.Router();
const expenseSubCategoryController = require('../controllers/expenseSubCategoryController');

router.post('/', expenseSubCategoryController.createSubCategory);
router.get('/', expenseSubCategoryController.getSubCategories);
router.get('/:id', expenseSubCategoryController.getSubCategoryById);
router.put('/:id', expenseSubCategoryController.updateSubCategory);
router.delete('/:id', expenseSubCategoryController.deleteSubCategory);

module.exports = router;
