const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControlller');
const purchaseController = require('../controllers/productPurchaseController');
const upload = require('../middlewares/upload');


router.post('/', upload.single('productImage'), productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.patch('/:id', upload.single('productImage'), productController.updateProduct);
router.delete('/:id', productController.deleteProduct);



router.post('/purchases', purchaseController.createPurchase); 
router.get('/purchases', purchaseController.getAllPurchases);
router.get('/purchases/:id', purchaseController.getPurchaseById);
router.put('/purchases/:id', purchaseController.updatePurchase);
router.delete('/purchases/:id', purchaseController.deletePurchase);



module.exports = router;
