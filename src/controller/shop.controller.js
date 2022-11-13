const shopModel = require('../model/shop.model');

module.exports = {
    async index(req, res) {
        const shops = await shopModel.selectAll();
        res.json(shops);
        // res.render('/shops', { shops });
    },

    async view(req, res) {
        const id = parseInt(req.params.idOrName);
        let shops;
        if (isNaN(id)) {
            const name = req.params.idOrName;
            shops = await shopModel.selectByName(name);
        } else {
            shops = await shopModel.selectById(id);
        }
        res.json(shops[0]);
        // res.render('/shops/idOrName', { shops });
    },

    async add(req, res) {
        const result = shopModel.create(req.body);
        res.json(result);
        // .then(() => res.redirect('/shop'))
        // .then((result) => res.json(result))
        // .catch((err) => res.json(err));
    },

    async edit(req, res) {
        const result = shopModel.update(req.body.id, req.body);
        res.json(result);
        // res.render('shop/customers/edit', {
        //     editShop,
        //     buttonText: 'Update Customer',
        // });
    },

    async delete(req, res) {
        const result = shopModel.delete(req.params.id);
        res.json(result);
        // res.render('pages/customers/edit', {
        //     customer,
        //     buttonText: 'Update Customer',
        // });
    },
};
