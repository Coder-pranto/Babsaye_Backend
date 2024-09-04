// models/Invoice.js
const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    barcode: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        }
    ],
    transportFare: {
        type: Number,
        required: true
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ReceiveCategory',
        required: true
    },
    receiveAmount: {
        type: Number,
        required: true
    },
    billAmount: {
        type: Number,
        required: true
    },
    dueAmount: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }
},{
    timestamp:true
});

module.exports = mongoose.model('Invoice', invoiceSchema);
