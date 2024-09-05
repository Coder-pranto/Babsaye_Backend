const router = require('express').Router();
const returnController = require('../controllers/returnController');


router.post('/', returnController.addReturn);

router.get('/', returnController.getReturns);


router.get('/:id', returnController.getReturnById);

router.put('/:id', returnController.updateReturn);

router.delete('/:id', returnController.deleteReturn);

module.exports = router;
