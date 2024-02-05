const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    login: String,
    password: String,
});

adminModel = mongoose.model('admin', adminSchema);

module.exports = adminModel;
