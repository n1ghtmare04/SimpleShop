const express = require('express');
const router = express.Router();
const path = require('path');
const Item = require('../models/Item');

router.get('/', async (req, res) => {

    try {
        const items = await Item.find({category: 'shoes'});
        res.render('shoes', {items});
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading shoes");
    }
});


module.exports = router;