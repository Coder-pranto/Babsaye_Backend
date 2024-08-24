const Supplier = require('../models/supplier');
const fs = require('fs');

// Create a new supplier
const createSupplier = async (req, res) => {
  try {
    const { supplierName, companyName, phone, phoneNumberOptional, email, address, city, previousDue, zipCode, country, domain, bankAccount, group, status } = req.body;
    const file = req.file ? req.file.path : null;

    const newSupplier = new Supplier({
      supplierName,
      companyName,
      phone,
      phoneNumberOptional,
      email,
      address,
      city,
      previousDue,
      zipCode,
      country,
      domain,
      bankAccount,
      group,
      file,
      status
    });

    await newSupplier.save();
    res.status(201).json(newSupplier);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all suppliers
const getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find().populate('group');
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a supplier by ID
const getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id).populate('group');
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }
    res.status(200).json(supplier);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a supplier
const updateSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }

    const { supplierName, companyName, phone, phoneNumberOptional, email, address, city, previousDue, zipCode, country, domain, bankAccount, group, status } = req.body;
    const file = req.file ? req.file.path : supplier.file;

    if (req.file && supplier.file) {
      fs.unlinkSync(supplier.file); // Remove the old file if a new one is uploaded
    }

    supplier.supplierName = supplierName || supplier.supplierName;
    supplier.companyName = companyName || supplier.companyName;
    supplier.phone = phone || supplier.phone;
    supplier.phoneNumberOptional = phoneNumberOptional || supplier.phoneNumberOptional;
    supplier.email = email || supplier.email;
    supplier.address = address || supplier.address;
    supplier.city = city || supplier.city;
    supplier.previousDue = previousDue || supplier.previousDue;
    supplier.zipCode = zipCode || supplier.zipCode;
    supplier.country = country || supplier.country;
    supplier.domain = domain || supplier.domain;
    supplier.bankAccount = bankAccount || supplier.bankAccount;
    supplier.group = group || supplier.group;
    supplier.file = file;
    supplier.status = status || supplier.status;

    await supplier.save();
    res.status(200).json(supplier);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a supplier
const deleteSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }

    if (supplier.file) {
      fs.unlinkSync(supplier.file); 
    }

    await supplier.deleteOne(); 
    res.status(200).json({ message: 'Supplier deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createSupplier,
  getSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier
};
