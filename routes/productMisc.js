const express = require('express');
const router = express.Router();

// Import models
const ProductUnit = require('../models/products/productUnit');
const ProductColor = require('../models/products/productColor');
const ProductSize = require('../models/products/productSize');
const ProductBrand = require('../models/products/productBrand');
const ProductGroup = require('../models/products/productGroup');

// Product Unit Controller
// Create a new product unit
router.post('/unit', async (req, res) => {
    try {
        const unit = new ProductUnit(req.body);
        await unit.save();
        res.status(201).json(unit);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all product units
router.get('/units', async (req, res) => {
    try {
        const units = await ProductUnit.find();
        res.status(200).json(units);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single product unit by ID
router.get('/unit/:id', async (req, res) => {
    try {
        const unit = await ProductUnit.findById(req.params.id);
        if (!unit) return res.status(404).json({ message: 'Unit not found' });
        res.status(200).json(unit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a product unit by ID
router.put('/unit/:id', async (req, res) => {
    try {
        const unit = await ProductUnit.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!unit) return res.status(404).json({ message: 'Unit not found' });
        res.status(200).json(unit);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a product unit by ID
router.delete('/unit/:id', async (req, res) => {
    try {
        const unit = await ProductUnit.findByIdAndDelete(req.params.id);
        if (!unit) return res.status(404).json({ message: 'Unit not found' });
        res.status(200).json({ message: 'Unit deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Product Color Controller
// Similar CRUD operations as Product Unit
router.post('/color', async (req, res) => {
    try {
        const color = new ProductColor(req.body);
        await color.save();
        res.status(201).json(color);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/colors', async (req, res) => {
    try {
        const colors = await ProductColor.find();
        res.status(200).json(colors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/color/:id', async (req, res) => {
    try {
        const color = await ProductColor.findById(req.params.id);
        if (!color) return res.status(404).json({ message: 'Color not found' });
        res.status(200).json(color);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/color/:id', async (req, res) => {
    try {
        const color = await ProductColor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!color) return res.status(404).json({ message: 'Color not found' });
        res.status(200).json(color);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/color/:id', async (req, res) => {
    try {
        const color = await ProductColor.findByIdAndDelete(req.params.id);
        if (!color) return res.status(404).json({ message: 'Color not found' });
        res.status(200).json({ message: 'Color deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Product Size Controller
// Similar CRUD operations as Product Unit
router.post('/size', async (req, res) => {
    try {
        const size = new ProductSize(req.body);
        await size.save();
        res.status(201).json(size);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/sizes', async (req, res) => {
    try {
        const sizes = await ProductSize.find();
        res.status(200).json(sizes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/size/:id', async (req, res) => {
    try {
        const size = await ProductSize.findById(req.params.id);
        if (!size) return res.status(404).json({ message: 'Size not found' });
        res.status(200).json(size);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/size/:id', async (req, res) => {
    try {
        const size = await ProductSize.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!size) return res.status(404).json({ message: 'Size not found' });
        res.status(200).json(size);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/size/:id', async (req, res) => {
    try {
        const size = await ProductSize.findByIdAndDelete(req.params.id);
        if (!size) return res.status(404).json({ message: 'Size not found' });
        res.status(200).json({ message: 'Size deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Product Brand Controller
// Similar CRUD operations as Product Unit
router.post('/brand', async (req, res) => {
    try {
        const brand = new ProductBrand(req.body);
        await brand.save();
        res.status(201).json(brand);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/brands', async (req, res) => {
    try {
        const brands = await ProductBrand.find();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/brand/:id', async (req, res) => {
    try {
        const brand = await ProductBrand.findById(req.params.id);
        if (!brand) return res.status(404).json({ message: 'Brand not found' });
        res.status(200).json(brand);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/brand/:id', async (req, res) => {
    try {
        const brand = await ProductBrand.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!brand) return res.status(404).json({ message: 'Brand not found' });
        res.status(200).json(brand);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/brand/:id', async (req, res) => {
    try {
        const brand = await ProductBrand.findByIdAndDelete(req.params.id);
        if (!brand) return res.status(404).json({ message: 'Brand not found' });
        res.status(200).json({ message: 'Brand deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Product Group Controller
// Similar CRUD operations as Product Unit
router.post('/group', async (req, res) => {
    try {
        const group = new ProductGroup(req.body);
        await group.save();
        res.status(201).json(group);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/groups', async (req, res) => {
    try {
        const groups = await ProductGroup.find();
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/group/:id', async (req, res) => {
    try {
        const group = await ProductGroup.findById(req.params.id);
        if (!group) return res.status(404).json({ message: 'Group not found' });
        res.status(200).json(group);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/group/:id', async (req, res) => {
  try {
    const group = await ProductGroup.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!group) return res.status(404).json({ message: 'Group not found' });
    res.status(200).json(group);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.delete('/group/', async (req, res) => {
    try {
    const group = await ProductGroup.findByIdAndDelete(req.params.id);
    if (!group)
        return res.status(404).json({ message: 'Group not found' });
    res.status(200).json({ message: 'Group deleted successfully' });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
});


module.exports = router