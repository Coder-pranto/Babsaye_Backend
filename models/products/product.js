const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productImage: { type: String, required: true },
    description: { type: String },
    buyingPrice: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit', required: true },
    productColor: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductColor', required: true },
    productBrand: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductBrand', required: true },
    productSize: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductSize', required: true },
    openingStock: { type: Number, required: true },
    carton: { type: Number, required: true },
    stockWarningQuantity: { type: Number, required: true },
    productGroup: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductGroup', required: true }
},

  {
    timestamps: true,
  }

);

module.exports = mongoose.model('Product', productSchema);
