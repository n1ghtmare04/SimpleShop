const express = require('express');
const app = express();
const path = require('path');


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/SimpleShopDB', { })
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


const shirts_routes = require('./routes/shirts_routes');
const shoes_routes = require('./routes/shoes_routes');
const bags_routes = require('./routes/bags_routes');
const help_routes = require('./routes/help_routes');
const aboutus_routes = require('./routes/aboutus_routes');
const product_routes = require('./routes/product_routes');
const search_routes = require('./routes/search_routes');

//C:\Users\eradi\First BE Project
app.use('/SimpleShop', express.static(path.join(__dirname, '../client/public')));

app.get('/SimpleShop', (req, res) => {
    res.render('index', {items: [], message: null, searchTem: ''});
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client/views'));

app.use('/SimpleShop', search_routes);
app.use('/SimpleShop/Shirts', shirts_routes);
app.use('/SimpleShop/Shoes', shoes_routes);
app.use('/SimpleShop/Bags', bags_routes);
app.use('/SimpleShop/Help', help_routes);
app.use('/SimpleShop/AboutUs', aboutus_routes);
app.use('/SimpleShop/Product', product_routes);

app.use((req, res) => {
    res.status(404).send('Page not found');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});