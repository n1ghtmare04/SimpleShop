const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/SimpleShopDB', {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', () => {
    console.log("connected to mongodb");

    const itemSchema = new mongoose.Schema({
        name: String,
        category: String,
        price: Number,
        item_image: String,
    });

    const item = mongoose.model('item', itemSchema);

    item.insertMany([
        {name: "Regular shirt", category: "shirts", price: 500, item_image: "/SimpleShop/images/shirt_image.jpg"},
        {name: "Oversize shirt", category: "shirts", price: 550, item_image: "/SimpleShop/images/oversized_shirt_image.jpg"},
        {name: "Coil", category: "shirts", price: 600, item_image: "/SimpleShop/images/coil_the_remote_viewer_album_cover_shirt.jpg"},
        {name: "Death in vegas", category: "shirts", price: 600, item_image: "/SimpleShop/images/death_in_vegas.jpg"},
        {name: "Hawaii", category: "shirts", price: 550, item_image: "/SimpleShop/images/Hawaiian_shirt.jpg"},
        {name: "Line casual", category: "shirts", price: 600, item_image: "/SimpleShop/images/line_casual_shirt.jpg"},
        {name: "Oufisun oversize", category: "shirts", price: 650, item_image: "/SimpleShop/images/Oufisun_oversized_shirt.jpg"},
        {name: "Summer multicolor", category: "shirts", price: 600, item_image: "/SimpleShop/images/summer_multi_color_shirt.jpg"},


        {name: "Sneakers", category: "shoes", price: 750, item_image: "/SimpleShop/images/sneakers_image.jpg"},
        {name: "Boots", category: "shoes", price: 850, item_image: "/SimpleShop/images/boots_image.jpg"},
        {name: "Nike 'Air Zoom", category: "shoes", price: 900, item_image: "/SimpleShop/images/nike_'air_zoom_shoes.jpg"},
        {name: "Nike Athletic shoes", category: "shoes", price: 900, item_image: "/SimpleShop/images/nike_athletic_shoes.jpg"},
        {name: "Nike running shoes", category: "shoes", price: 850, item_image: "/SimpleShop/images/nike_running_shoes.jpg"},
        {name: "Ski boots", category: "shoes", price: 950, item_image: "/SimpleShop/images/ski_boots.jpg"},
        {name: "Waterproof leather", category: "shoes", price: 850, item_image: "/SimpleShop/images/waterproof_leather_boots_shoes.jpg"},
        {name: "Carolina", category: "shoes", price: 850, item_image: "/SimpleShop/images/carolina_boots_shoes.jpg"},


        {name: "Backpack", category: "bags", price: 1000, item_image: "/SimpleShop/images/backpack_image.jpg"},
        {name: "Handbag", category: "bags", price: 900, item_image: "/SimpleShop/images/handbags_image.jpg"},
        {name: "Fashion", category: "bags", price: 1200, item_image: "/SimpleShop/images/fashion_bag.jpg"},
        {name: "Jose hess", category: "bags", price: 900, item_image: "/SimpleShop/images/jose_hess_bag.jpg"},
        {name: "Heshe leather", category: "bags", price: 1000, item_image: "/SimpleShop/images/heshe_leather_bag.jpg"},
        {name: "Camping backpack", category: "bags", price: 1050, item_image: "/SimpleShop/images/camping_backpack.jpg"},
        {name: "Hunter's bag", category: "bags", price: 1150, item_image: "/SimpleShop/images/hunters_bag.jpg"},
        {name: "Laptop bag", category: "bags", price: 850, item_image: "/SimpleShop/images/laptop_bag.jpg"},
    ])

        .then(() => {
            console.log("items were added");
            mongoose.connection.close();
        })
        .catch(err => console.error(err));
})