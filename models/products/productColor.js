const mongoose = require('mongoose');

const productColorSchema = new mongoose.Schema({
    colorName: { type: String, required: true }
},{
    timestamps:true
});

module.exports = mongoose.model('ProductColor', productColorSchema);
