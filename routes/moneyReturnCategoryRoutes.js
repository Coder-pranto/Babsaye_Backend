const express = require('express');
const router = express.Router();
const moneyReturnCategoryController = require('../controllers/moneyReturnCategoryController');

router.post('/', moneyReturnCategoryController.createMoneyReturnCategory);
router.get('/', moneyReturnCategoryController.getMoneyReturnCategories);
router.get('/:id', moneyReturnCategoryController.getMoneyReturnCategoryById);
router.put('/:id', moneyReturnCategoryController.updateMoneyReturnCategory);
router.delete('/:id', moneyReturnCategoryController.deleteMoneyReturnCategory);

module.exports = router;
