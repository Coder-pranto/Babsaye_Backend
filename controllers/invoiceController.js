const Invoice = require('../models/invoice');

exports.createInvoice = async (req, res) => {
    try {
        const invoice = new Invoice(req.body);
        await invoice.save();
        res.status(201).json(invoice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find()
            .populate('client')
            .populate('products.product')
            .populate('account')
            .populate('category');
        res.status(200).json(invoices);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getInvoiceById = async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.params.id)
            .populate('client')
            .populate('products.product')
            .populate('account')
            .populate('category');
        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' });
        }
        res.status(200).json(invoice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .populate('client')
            .populate('products.product')
            .populate('account')
            .populate('category');
        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' });
        }
        res.status(200).json(invoice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



exports.deleteInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.findByIdAndDelete(req.params.id);
        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' });
        }
        res.status(200).json({ message: 'Invoice deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
