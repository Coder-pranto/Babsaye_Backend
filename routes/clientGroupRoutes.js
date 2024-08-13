const express = require('express');
const router = express.Router();
const clientGroupController = require('../controllers/clientGroupController');
// Route to create a new client group
router.post('/', clientGroupController.createClientGroup);

// Route to get all client groups
router.get('/', clientGroupController.getClientGroups);

// Route to get a specific client group by ID
router.get('/:id', clientGroupController.getClientGroupById);

// Route to update a client group by ID
router.put('/:id', clientGroupController.updateClientGroup);

// Route to delete a client group by ID
router.delete('/:id', clientGroupController.deleteClientGroup);

module.exports = router;
