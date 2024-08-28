const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    type: { type: String, enum: ['Credit', 'Debit'], required: true },
    account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
    description: { type: String },
    credit: { type: Number, default: 0 },
    debit: { type: Number, default: 0 },
    balance: { type: Number, default: 0 },
});

module.exports = mongoose.model('Transaction', transactionSchema);
