const SupplierPaymentSubCategory = require('../models/supplierPaymentSubCategory');

// Create a new supplier payment subcategory
exports.createSupplierPaymentSubCategory = async (req, res) => {
  try {
    const subCategory = new SupplierPaymentSubCategory(req.body);
    await subCategory.save();
    res.status(201).json(subCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all supplier payment subcategories
exports.getSupplierPaymentSubCategories = async (req, res) => {
  try {
    const subCategories = await SupplierPaymentSubCategory.find().populate('category');
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single supplier payment subcategory by ID
exports.getSupplierPaymentSubCategoryById = async (req, res) => {
  try {
    const subCategory = await SupplierPaymentSubCategory.findById(req.params.id).populate('category');
    if (!subCategory) return res.status(404).json({ message: 'SubCategory not found' });
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a supplier payment subcategory by ID
exports.updateSupplierPaymentSubCategory = async (req, res) => {
  try {
    const subCategory = await SupplierPaymentSubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subCategory) return res.status(404).json({ message: 'SubCategory not found' });
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a supplier payment subcategory by ID
exports.deleteSupplierPaymentSubCategory = async (req, res) => {
  try {
    const subCategory = await SupplierPaymentSubCategory.findByIdAndDelete(req.params.id);
    if (!subCategory) return res.status(404).json({ message: 'SubCategory not found' });
    res.status(200).json({ message: 'SubCategory deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
