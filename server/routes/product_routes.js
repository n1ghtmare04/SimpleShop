const express = require('express');
const router = express.Router();
const path = require('path');
const Item = require('../models/Item');

router.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Item.findById(productId);

        if (!product) {
            return res.status(404).send("Product not found");
        }

        res.render('products', {product});
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading product details");
    }
})

module.exports = router;