const mongoose = require('mongoose');

const returnSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    barcode: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        }
    ],
    transportFare: { type: Number, default: 0 },
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
    returnAmount: { type: Number, required: true },
    dueAmount: { type: Number, required: true },
    description: { type: String },
    status: { type: String, enum: ['draft', 'completed'], default: 'draft' },
}, { timestamps: true });

module.exports = mongoose.model('Return', returnSchema);
