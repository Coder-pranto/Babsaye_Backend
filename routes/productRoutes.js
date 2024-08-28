const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControlller');
const upload = require('../middlewares/upload');

// Create a new product with file upload
router.post('/products', upload.single('productImage'), productController.createProduct);

// Get all products
router.get('/products', productController.getProducts);

// Get a single product by ID
router.get('/products/:id', productController.getProductById);

// Update a product by ID with file upload
router.put('/products/:id', upload.single('productImage'), productController.updateProduct);

// Delete a product by ID
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
