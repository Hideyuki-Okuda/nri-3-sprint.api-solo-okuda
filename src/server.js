//require
const express = require('express');
const app = express();
const shopController = require('./controller/shop.controller');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const setupServer = () => {
    //shops
    app.get('/shops', shopController.index);
    app.get('/shops/:idOrName', shopController.view);
    app.post('/shops', shopController.add);
    app.patch('/shops/:id', shopController.edit);
    app.delete('/shops/:id', shopController.delete);

    return app;
};

module.exports = { setupServer };
