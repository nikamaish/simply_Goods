const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    // fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
