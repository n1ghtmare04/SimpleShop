const express = require('express');
const router = express.Router();
const path = require('path');
const Item = require('../models/Item');

router.get('/', async (req, res) => {
 
    try {
        const items = await Item.find({category: 'shirts'});
        res.render('shirts', {items});
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading shirts");
    }
});
 

module.exports = router;