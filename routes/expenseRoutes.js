const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const upload = require('../middlewares/upload');

router.post('/', upload.single('file'), expenseController.createExpense);
router.get('/', expenseController.getExpenses);
router.get('/:id', expenseController.getExpenseById);
router.put('/:id', upload.single('file'), expenseController.updateExpense);
router.delete('/:id', expenseController.deleteExpense);

module.exports = router;
