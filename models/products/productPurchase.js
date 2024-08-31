const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
    invoiceId: { type: String, required: true, unique: true },
    date: { type: Date, required: true },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        }
    ],
    discountRate: { type: Number},
    discountType: { type: String, enum: ['flat', 'percentage'] },
    paymentAmount: { type: Number, required: true },
    transportFare: { type: Number, default:0 },
    vat: { type: Number, default: 0 },
    grandTotal: { type: Number, default:0 },
    dueAmount: { type: Number, default:0 },
}, { timestamps: true });

module.exports = mongoose.model('Purchase', PurchaseSchema);
