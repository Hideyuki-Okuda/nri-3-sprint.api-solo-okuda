const express = require('express');
const app = express();

//middleware
app.use(express.json());

const setupServer = () => {
    app.get('/api', (req, res) => {
        res.json({ message: 'hello' });
    });
    return app;
};

module.exports = { setupServer };
