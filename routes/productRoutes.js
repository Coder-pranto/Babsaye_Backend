const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControlller');
const upload = require('../middlewares/upload');


router.post('/', upload.single('productImage'), productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', upload.single('productImage'), productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
