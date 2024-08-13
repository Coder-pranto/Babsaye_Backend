const express = require('express');
const router = express.Router();
const supplierGroupController = require('../controllers/supplierGroupController');

// Create a new supplier group
router.post('/', supplierGroupController.createSupplierGroup);

// Get all supplier groups
router.get('/', supplierGroupController.getSupplierGroups);

// Get a supplier group by ID
router.get('/:id', supplierGroupController.getSupplierGroupById);

// Update a supplier group
router.put('/:id', supplierGroupController.updateSupplierGroup);

// Delete a supplier group
router.delete('/:id', supplierGroupController.deleteSupplierGroup);

module.exports = router;
