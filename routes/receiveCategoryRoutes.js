const express = require('express');
const router = express.Router();
const receiveCategoryController = require('../controllers/receiveCategoryController');

router.post('/', receiveCategoryController.createCategory);
router.get('/', receiveCategoryController.getCategories);
router.get('/:id', receiveCategoryController.getCategoryById);
router.put('/:id', receiveCategoryController.updateCategory);
router.delete('/:id', receiveCategoryController.deleteCategory);

module.exports = router;
