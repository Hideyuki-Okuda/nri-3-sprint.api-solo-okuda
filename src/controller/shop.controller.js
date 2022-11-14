const shopModel = require('../model/shop.model');

module.exports = {
    async index(req, res) {
        const shops = await shopModel.selectAll();
        res.json(shops);
    },

    async view(req, res) {
        try {
            const id = parseInt(req.params.idOrName);
            let shops;
            if (isNaN(id)) {
                const name = req.params.idOrName;
                shops = await shopModel.selectByName(name);
            } else {
                shops = await shopModel.selectById(id);
            }
            res.status(200).json(shops);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    },

    async add(req, res) {
        try {
            await shopModel.create(req.body);
            res.status(201).json({
                url: 'http://localhost:3000/shops/' + req.body.id,
            });
        } catch (err) {
            res.status(400).json({ message: err });
        }
    },

    async edit(req, res) {
        const id = parseInt(req.params.id);
        const result = await shopModel.update(id, req.body);
        res.json(result);
    },

    async delete(req, res) {
        const result = await shopModel.delete(req.params.id);
        res.json(result);
    },
};
