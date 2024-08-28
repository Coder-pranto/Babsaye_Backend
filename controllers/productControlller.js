
const Product = require('../models/products/product');

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const productData = req.body;
        if (req.file) {
            productData.productImage = req.file.path; 
        }
        const product = new Product(productData);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
    try {
        const productData = req.body;
        if (req.file) {
            productData.productImage = req.file.path; 
        }
        const product = await Product.findByIdAndUpdate(req.params.id, productData, { new: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('unit productColor productBrand productSize productGroup');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('unit productColor productBrand productSize productGroup');
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};