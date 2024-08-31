const Purchase = require('../models/products/productPurchase');
const Supplier = require('../models/supplier');
const Product = require('../models/products/product');

// Create a new purchase
exports.createPurchase = async (req, res) => {


    try {
        const {
            invoiceId, date, supplier, products, discountRate, discountType,
            paymentAmount, transportFare, vat, grandTotal, dueAmount
        } = req.body;

        // Check if supplier exists
        const supplierExists = await Supplier.findById(supplier);
        if (!supplierExists) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        // Check if products exist and have sufficient stock
        for (let i = 0; i < products.length; i++) {
            const product = await Product.findById(products[i].product);
            if (!product) {
                return res.status(404).json({ message: `Product with ID ${products[i].product} not found` });
            }
            if (product.stock < products[i].quantity) {
                return res.status(400).json({ message: `Insufficient stock for product ${product.name}` });
            }
        }

        // Create new purchase
        const newPurchase = new Purchase({
            invoiceId, date, supplier, products, discountRate, discountType,
            paymentAmount, transportFare, vat, grandTotal, dueAmount
        });

        // Save purchase to database
        await newPurchase.save();

        // Update product stock
        for (let i = 0; i < products.length; i++) {
            await Product.findByIdAndUpdate(products[i].product, {
                $inc: { stock: -products[i].quantity }
            });
        }

        res.status(201).json({ message: 'Purchase created successfully', purchase: newPurchase });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get all purchases
exports.getAllPurchases = async (req, res) => {
    try {
        const purchases = await Purchase.find().populate('supplier').populate('products.product');
        res.status(200).json({ purchases });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get a single purchase by ID
exports.getPurchaseById = async (req, res) => {
    try {
        const purchase = await Purchase.findById(req.params.id).populate('supplier').populate('products.product');
        if (!purchase) {
            return res.status(404).json({ message: 'Purchase not found' });
        }
        res.status(200).json({ purchase });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update a purchase
exports.updatePurchase = async (req, res) => {
    try {
        const {
            invoiceId, date, supplier, products, discountRate, discountType,
            paymentAmount, transportFare, vat, grandTotal, dueAmount
        } = req.body;

        const purchase = await Purchase.findById(req.params.id);
        if (!purchase) {
            return res.status(404).json({ message: 'Purchase not found' });
        }

        // Update fields
        purchase.invoiceId = invoiceId || purchase.invoiceId;
        purchase.date = date || purchase.date;
        purchase.supplier = supplier || purchase.supplier;
        purchase.products = products || purchase.products;
        purchase.discountRate = discountRate || purchase.discountRate;
        purchase.discountType = discountType || purchase.discountType;
        purchase.paymentAmount = paymentAmount || purchase.paymentAmount;
        purchase.transportFare = transportFare || purchase.transportFare;
        purchase.vat = vat || purchase.vat;
        purchase.grandTotal = grandTotal || purchase.grandTotal;
        purchase.dueAmount = dueAmount || purchase.dueAmount;

        // Save updated purchase to database
        await purchase.save();

        res.status(200).json({ message: 'Purchase updated successfully', purchase });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete a purchase
exports.deletePurchase = async (req, res) => {
    try {
        const purchase = await Purchase.findById(req.params.id);
        if (!purchase) {
            return res.status(404).json({ message: 'Purchase not found' });
        }

        await purchase.remove();
        res.status(200).json({ message: 'Purchase deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
