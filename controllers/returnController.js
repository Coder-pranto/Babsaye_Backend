
const Return = require('../models/return');

// Create a new return
exports.addReturn = async (req, res) => {
    try {
        const newReturn = new Return(req.body);
        await newReturn.save();
        res.status(201).json(newReturn);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add return' });
    }
};

// Get all returns
exports.getReturns = async (req, res) => {
    try {
        const returns = await Return.find().populate('client account products.product category');
        res.status(200).json(returns);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch returns' });
    }
};

// Get a specific return by ID
exports.getReturnById = async (req, res) => {
    try {
        const returnData = await Return.findById(req.params.id).populate('client account products.product category');
        if (!returnData) {
            return res.status(404).json({ error: 'Return not found' });
        }
        res.status(200).json(returnData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch return' });
    }
};

// Update a return
exports.updateReturn = async (req, res) => {
    try {
        const updatedReturn = await Return.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedReturn) {
            return res.status(404).json({ error: 'Return not found' });
        }
        res.status(200).json(updatedReturn);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update return' });
    }
};

// Delete a return
exports.deleteReturn = async (req, res) => {
    try {
        const deletedReturn = await Return.findByIdAndDelete(req.params.id);
        if (!deletedReturn) {
            return res.status(404).json({ error: 'Return not found' });
        }
        res.status(200).json({ message: 'Return deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete return' });
    }
};
