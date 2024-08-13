const StaffPayment = require('../models/staffPayment');

// Create a new staff payment
exports.createStaffPayment = async (req, res) => {
  try {
    const staffPayment = new StaffPayment(req.body);
    await staffPayment.save();
    res.status(201).json(staffPayment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all staff payments
exports.getStaffPayments = async (req, res) => {
  try {
    const staffPayments = await StaffPayment.find().populate('staff account category');
    res.status(200).json(staffPayments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single staff payment by ID
exports.getStaffPaymentById = async (req, res) => {
  try {
    const staffPayment = await StaffPayment.findById(req.params.id).populate('staff account category');
    if (!staffPayment) return res.status(404).json({ message: 'Staff Payment not found' });
    res.status(200).json(staffPayment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a staff payment by ID
exports.updateStaffPayment = async (req, res) => {
  try {
    const staffPayment = await StaffPayment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!staffPayment) return res.status(404).json({ message: 'Staff Payment not found' });
    res.status(200).json(staffPayment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a staff payment by ID
exports.deleteStaffPayment = async (req, res) => {
  try {
    const staffPayment = await StaffPayment.findByIdAndDelete(req.params.id);
    if (!staffPayment) return res.status(404).json({ message: 'Staff Payment not found' });
    res.status(200).json({ message: 'Staff Payment deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
