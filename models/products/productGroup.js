const mongoose = require('mongoose');

const productGroupSchema = new mongoose.Schema({
    groupName: { type: String, required: true }
},{timestamps:true});

module.exports = mongoose.model('ProductGroup', productGroupSchema);
