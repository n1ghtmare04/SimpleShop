const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/search', async (req, res) => {
    try {
        const searchTerm = req.query.query;
        const regex = RegExp(searchTerm, 'i');
        const results = await Item.find({
            $or: [
                { name: { $regex: regex} },
                { description: { $regex: regex } },
            ]
        });

        if (results.length === 1) {
            res.render('products', {product: results[0]});
        } else {
            res.render('index', {
                items: results,
                searchTerm,
                message: results.length === 0 ? 'no items found' : null
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error searching for items");
    }
})

module.exports = router;