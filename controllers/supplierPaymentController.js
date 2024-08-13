const SupplierPayment = require('../models/supplierPayment');

// Create a new supplier payment
exports.createSupplierPayment = async (req, res) => {
  try {
    const supplierPaymentData = req.body;
    if (req.file) {
      supplierPaymentData.file = req.file.path;
    }
    const supplierPayment = new SupplierPayment(supplierPaymentData);
    await supplierPayment.save();
    res.status(201).json(supplierPayment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all supplier payments
exports.getSupplierPayments = async (req, res) => {
  try {
    const supplierPayments = await SupplierPayment.find()
      .populate('supplier')
      .populate('account')
      .populate('category')
      .populate('subcategory');
    res.status(200).json(supplierPayments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single supplier payment by ID
exports.getSupplierPaymentById = async (req, res) => {
  try {
    const supplierPayment = await SupplierPayment.findById(req.params.id)
      .populate('supplier')
      .populate('account')
      .populate('category')
      .populate('subcategory');
    if (!supplierPayment) return res.status(404).json({ message: 'Supplier Payment not found' });
    res.status(200).json(supplierPayment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a supplier payment by ID
exports.updateSupplierPayment = async (req, res) => {
  try {
    const supplierPaymentData = req.body;
    if (req.file) {
      supplierPaymentData.file = req.file.path;
    }
    const supplierPayment = await SupplierPayment.findByIdAndUpdate(req.params.id, supplierPaymentData, { new: true });
    if (!supplierPayment) return res.status(404).json({ message: 'Supplier Payment not found' });
    res.status(200).json(supplierPayment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a supplier payment by ID
exports.deleteSupplierPayment = async (req, res) => {
  try {
    const supplierPayment = await SupplierPayment.findByIdAndDelete(req.params.id);
    if (!supplierPayment) return res.status(404).json({ message: 'Supplier Payment not found' });
    res.status(200).json({ message: 'Supplier Payment deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
