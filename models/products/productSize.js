
const mongoose = require('mongoose');

const productSizeSchema = new mongoose.Schema({
    sizeName: { type: String, required: true }
},{timestamps:true});

module.exports = mongoose.model('ProductSize', productSizeSchema);
