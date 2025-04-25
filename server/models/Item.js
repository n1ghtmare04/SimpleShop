const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
        name: String,
        category: String,
        price: Number,
        item_image: String,
    });

module.exports = mongoose.model('item', itemSchema);