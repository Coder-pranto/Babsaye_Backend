const mongoose = require('mongoose');

const productBrandSchema = new mongoose.Schema({
    brandName: { type: String, required: true }
},{
    timestamps:true
});

module.exports = mongoose.model('ProductBrand', productBrandSchema);
