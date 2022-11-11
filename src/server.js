const express = require('express');
const app = express();
const shops = require('../src/data/shop.json');

//middleware
app.use(express.json());

const setupServer = () => {
    app.get('/shop', (req, res) => {
        console.log(shops);
        res.json(shops);
    });
    return app;
};

module.exports = { setupServer };
