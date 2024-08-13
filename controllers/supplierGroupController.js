const SupplierGroup = require('../models/supplierGroup');

// Create a new supplier group
const createSupplierGroup = async (req, res) => {
  try {
    const { groupName, description } = req.body;

    const newGroup = new SupplierGroup({
      groupName,
      description,
    });

    await newGroup.save();
    res.status(201).json(newGroup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all supplier groups
const getSupplierGroups = async ( req, res) => {
  try {
    const groups = await SupplierGroup.find();
    res.status(200).json(groups);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a supplier group by ID
const getSupplierGroupById = async (req, res) => {
  try {
    const group = await SupplierGroup.findById(req.params.id);
    if (!group) {
      return res.status(404).json({ message: 'Supplier group not found' });
    }
    res.status(200).json(group);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a supplier group
const updateSupplierGroup = async (req, res) => {
  try {
    const { groupName, description } = req.body;

    const group = await SupplierGroup.findById(req.params.id);
    if (!group) {
      return res.status(404).json({ message: 'Supplier group not found' });
    }

    group.groupName = groupName || group.groupName;
    group.description = description || group.description;

    await group.save();
    res.status(200).json(group);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a supplier group
const deleteSupplierGroup = async (req, res) => {
  try {
    const group = await SupplierGroup.findById(req.params.id);
    if (!group) {
      return res.status(404).json({ message: 'Supplier group not found' });
    }

    await group.remove();
    res.status(200).json({ message: 'Supplier group deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createSupplierGroup,
  getSupplierGroups,
  getSupplierGroupById,
  updateSupplierGroup,
  deleteSupplierGroup
};
