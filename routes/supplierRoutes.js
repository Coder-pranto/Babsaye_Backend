const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');
const upload = require('../middlewares/upload');

// Create a new supplier
router.post('/', upload.single('file'), supplierController.createSupplier);

// Get all suppliers
router.get('/', supplierController.getSuppliers);

// Get a supplier by ID
router.get('/:id', supplierController.getSupplierById);

// Update a supplier
router.put('/:id', upload.single('file'), supplierController.updateSupplier);

// Delete a supplier
router.delete('/:id', supplierController.deleteSupplier);

module.exports = router;
