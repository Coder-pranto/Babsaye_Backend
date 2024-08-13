const express = require('express');
const router = express.Router();
const moneyReturnController = require('../controllers/moneyReturnController');

router.post('/', moneyReturnController.createMoneyReturn);
router.get('/', moneyReturnController.getMoneyReturns);
router.get('/:id', moneyReturnController.getMoneyReturnById);
router.put('/:id', moneyReturnController.updateMoneyReturn);
router.delete('/:id', moneyReturnController.deleteMoneyReturn);

module.exports = router;
