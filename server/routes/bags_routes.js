const express = require('express');
const router = express.Router();
const path = require('path');
const Item = require('../models/Item');

router.get('/', async (req, res) => {

    try {
        const items = await Item.find({category: 'bags'});
        res.render('bags', {items});
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading bags");
    }
});


module.exports = router;