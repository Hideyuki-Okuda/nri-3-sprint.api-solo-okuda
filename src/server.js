const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();

// Swagger設定
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Gourmet API',
            version: '1.0.0',
            description: 'GourmetAPIのドキュメント',
            contact: {
                name: 'Okuda',
                email: 'okd.inudog@gmail.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./docs/shops.yaml', './src/server.js'],
};

const specs = swaggerJsdoc(options);
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const shopController = require('./controller/shop.controller');

const setupServer = () => {
    app.get('/shops', shopController.index);
    app.get('/shops/:idOrName', shopController.view);
    app.post('/shops', shopController.add);
    app.patch('/shops/:id', shopController.edit);
    app.delete('/shops/:id', shopController.delete);

    return app;
};

module.exports = { setupServer };
