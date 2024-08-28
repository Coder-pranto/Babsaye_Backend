const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.post('/', accountController.createAccount);
router.get('/', accountController.getAccounts);
router.get('/:accountId', accountController.getAccountById);
router.put('/:accountId', accountController.updateAccount);
router.delete('/:accountId', accountController.deleteAccount);

router.get('/accbalance/:accountId', accountController.getAccountBalance);


router.get('/accStatement/:accountId/statement', accountController.getAccountStatement);


module.exports = router;

