const SupplierPaymentCategory = require('../models/supplierPaymentCategory');

// Create a new supplier payment category
exports.createSupplierPaymentCategory = async (req, res) => {
  try {
    const category = new SupplierPaymentCategory(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all supplier payment categories
exports.getSupplierPaymentCategories = async (req, res) => {
  try {
    const categories = await SupplierPaymentCategory.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single supplier payment category by ID
exports.getSupplierPaymentCategoryById = async (req, res) => {
  try {
    const category = await SupplierPaymentCategory.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a supplier payment category by ID
exports.updateSupplierPaymentCategory = async (req, res) => {
  try {
    const category = await SupplierPaymentCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a supplier payment category by ID
exports.deleteSupplierPaymentCategory = async (req, res) => {
  try {
    const category = await SupplierPaymentCategory.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
