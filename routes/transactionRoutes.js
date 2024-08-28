const express = require('express');
const transactionController = require('../controllers/transactionController');

const router = express.Router();

router.post('/create', transactionController.createTransaction);

router.get('/', transactionController.getTransactions);

router.get('/:transactionId', transactionController.getTransactionById);

router.put('/:transactionId', transactionController.updateTransaction);

router.delete('/:transactionId', transactionController.deleteTransaction);

module.exports = router;
