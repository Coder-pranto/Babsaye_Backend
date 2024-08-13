const express = require('express');
const router = express.Router();
const receiveSubCategoryController = require('../controllers/receiveSubCategoryController');

router.post('/', receiveSubCategoryController.createSubCategory);
router.get('/', receiveSubCategoryController.getSubCategories);
router.get('/:id', receiveSubCategoryController.getSubCategoryById);
router.put('/:id', receiveSubCategoryController.updateSubCategory);
router.delete('/:id', receiveSubCategoryController.deleteSubCategory);

module.exports = router;
