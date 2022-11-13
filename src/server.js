//require
const express = require('express');
const app = express();
const knex = require('../src/knex.js');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const setupServer = () => {
    //GET /shops
    app.get('/shops', (req, res) => {
        knex('shop')
            .select('*')
            .then((results) => res.json(results))
            .catch((err) => res.json(err));
    });

    //POST /shops
    app.post('/shops', (req, res) => {
        const shop = req.body;
        knex('shop')
            .insert(shop)
            .then((result) => res.json(result))
            // .then(() => res.redirect('/shop'))
            .catch((err) => res.json(err));
    });

    //PATCH /shops/:id
    app.patch('/shops/:id', (req, res) => {
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

    //DELETE /shops/:id
    app.delete('/shops/:id', (req, res) => {
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
