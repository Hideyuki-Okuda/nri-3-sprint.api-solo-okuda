//require
const express = require('express');
const app = express();
const knex = require('../src/knex.js');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const setupServer = () => {
    //GET /shop
    app.get('/shop', (req, res) => {
        knex('shop')
            .select('*')
            .then((results) => res.json(results))
            .catch((err) => res.json(err));
    });

    //POST /shop
    app.post('/shop', (req, res) => {
        const shop = req.body;
        knex('shop')
            .insert(shop)
            .then((result) => res.json(result))
            // .then(() => res.redirect('/shop'))
            .catch((err) => res.json(err));
    });

    //PATCH /shop/:id
    app.patch('/shop/:id', (req, res) => {
        const shopId = req.params.id;
        knex('shop')
            .where({ id: shopId })
            .update(req.body)
            .then((result) => res.json(result))
            .catch((err) => {
                console.log(err);
                res.json(err);
            });
    });

    //DELETE /shop/:id
    app.delete('/shop/:id', (req, res) => {
        const shopId = req.params.id;
        knex('shop')
            .where({ id: shopId })
            .delete()
            .then((result) => res.json(result))
            .catch((err) => {
                res.json(err);
            });
    });

    return app;
};

module.exports = { setupServer };
