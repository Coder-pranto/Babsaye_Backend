const Receive = require('../models/receive');

// Create a new receive entry
exports.createReceive = async (req, res) => {
  try {
    const receive = new Receive(req.body);
    await receive.save();
    res.status(201).json(receive);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all receive entries
exports.getReceives = async (req, res) => {
  try {
    const receives = await Receive.find().populate('client account category subcategory');
    res.status(200).json(receives);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single receive entry by ID
exports.getReceiveById = async (req, res) => {
  try {
    const receive = await Receive.findById(req.params.id).populate('client account category subcategory');
    if (!receive) return res.status(404).json({ message: 'Receive not found' });
    res.status(200).json(receive);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a receive entry by ID
exports.updateReceive = async (req, res) => {
  try {
    const receive = await Receive.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!receive) return res.status(404).json({ message: 'Receive not found' });
    res.status(200).json(receive);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a receive entry by ID
exports.deleteReceive = async (req, res) => {
  try {
    const receive = await Receive.findByIdAndDelete(req.params.id);
    if (!receive) return res.status(404).json({ message: 'Receive not found' });
    res.status(200).json({ message: 'Receive deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
