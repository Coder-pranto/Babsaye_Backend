const express = require('express');
const router = express.Router();
const expenseCategoryController = require('../controllers/expenseCategoryController');

router.post('/', expenseCategoryController.createCategory);
router.get('/', expenseCategoryController.getCategories);
router.get('/:id', expenseCategoryController.getCategoryById);
router.put('/:id', expenseCategoryController.updateCategory);
router.delete('/:id', expenseCategoryController.deleteCategory);

module.exports = router;
