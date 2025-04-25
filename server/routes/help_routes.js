const express = require('express');
const router = express.Router();
const path = require('path');


router.use('/SimpleShop', express.static(path.join(__dirname, 'public')));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/public/help.html'));
});


module.exports = router;