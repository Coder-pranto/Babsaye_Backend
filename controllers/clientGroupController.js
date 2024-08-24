const ClientGroup = require('../models/clientGroup'); 

// Create a new client group
exports.createClientGroup = async (req, res) => {
  try {
    const { name } = req.body;
    const newClientGroup = new ClientGroup({ name });
    await newClientGroup.save();
    res.status(201).json({ message: 'Client group created successfully', data: newClientGroup });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all client groups
exports.getClientGroups = async (req, res) => {
  try {
    const clientGroups = await ClientGroup.find();
    res.status(200).json({ data: clientGroups });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific client group by ID
exports.getClientGroupById = async (req, res) => {
  try {
    const { id } = req.params;
    const clientGroup = await ClientGroup.findById(id);
    if (!clientGroup) {
      return res.status(404).json({ message: 'Client group not found' });
    }
    res.status(200).json({ data: clientGroup });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a client group by ID
exports.updateClientGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedClientGroup = await ClientGroup.findByIdAndUpdate(id, { name }, { new: true });
    if (!updatedClientGroup) {
      return res.status(404).json({ message: 'Client group not found' });
    }
    res.status(200).json({ message: 'Client group updated successfully', data: updatedClientGroup });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a client group by ID
exports.deleteClientGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClientGroup = await ClientGroup.findByIdAndDelete(id);
    if (!deletedClientGroup) {
      return res.status(404).json({ message: 'Client group not found' });
    }
    res.status(200).json({ message: 'Client group deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
