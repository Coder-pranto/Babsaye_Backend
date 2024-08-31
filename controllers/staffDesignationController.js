const StaffDesignation = require('../models/staffDesignation');

// Create a new designation
exports.createDesignation = async (req, res) => {
  try {
    const designation = new StaffDesignation(req.body);
    await designation.save();
    res.status(201).json(designation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all designations
exports.getDesignations = async (req, res) => {
  try {
    const designations = await StaffDesignation.find().populate('department');
    res.status(200).json(designations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a designation by ID
exports.getDesignationById = async (req, res) => {
  try {
    const designation = await StaffDesignation.findById(req.params.id).populate('department');
    if (!designation) return res.status(404).json({ message: 'Designation not found' });
    res.status(200).json(designation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a designation by ID
exports.updateDesignation = async (req, res) => {
  try {
    const designation = await StaffDesignation.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('department');
    if (!designation) return res.status(404).json({ message: 'Designation not found' });
    res.status(200).json(designation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a designation by ID
exports.deleteDesignation = async (req, res) => {
  try {
    const designation = await StaffDesignation.findByIdAndDelete(req.params.id);
    if (!designation) return res.status(404).json({ message: 'Designation not found' });
    res.status(200).json({ message: 'Designation deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
