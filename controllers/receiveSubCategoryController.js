const ReceiveSubCategory = require('../models/receiveSubCategory');

// Create a new subcategory
exports.createSubCategory = async (req, res) => {
  try {
    const subcategory = new ReceiveSubCategory(req.body);
    await subcategory.save();
    res.status(201).json(subcategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all subcategories
exports.getSubCategories = async (req, res) => {
  try {
    const subcategories = await ReceiveSubCategory.find().populate('category');
    res.status(200).json(subcategories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single subcategory by ID
exports.getSubCategoryById = async (req, res) => {
  try {
    const subcategory = await ReceiveSubCategory.findById(req.params.id).populate('category');
    if (!subcategory) return res.status(404).json({ message: 'Subcategory not found' });
    res.status(200).json(subcategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a subcategory by ID
exports.updateSubCategory = async (req, res) => {
  try {
    const subcategory = await ReceiveSubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subcategory) return res.status(404).json({ message: 'Subcategory not found' });
    res.status(200).json(subcategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a subcategory by ID
exports.deleteSubCategory = async (req, res) => {
  try {
    const subcategory = await ReceiveSubCategory.findByIdAndDelete(req.params.id);
    if (!subcategory) return res.status(404).json({ message: 'Subcategory not found' });
    res.status(200).json({ message: 'Subcategory deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
