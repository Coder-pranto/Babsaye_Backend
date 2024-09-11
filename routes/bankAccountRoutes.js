const express = require('express');
const router = express.Router();
const {
  getBankAccounts,
  createBankAccount,
  depositFunds,
  withdrawFunds,
  transferFunds
} = require('../controllers/bankAccountController');

// Bank Account Routes
router.get('/accounts', getBankAccounts);
router.post('/accounts', createBankAccount);

// Transactionbank Routes
router.post('/deposit', depositFunds);
router.post('/withdraw', withdrawFunds);
router.post('/transfer', transferFunds);

module.exports = router;
