const knex = require('../../src/knex.js');

const SHOP_TABLE = 'shop';

module.exports = {
    SHOP_TABLE,

    selectAll() {
        return knex(SHOP_TABLE).select('*').orderBy('id');
    },

    selectById(id) {
        return knex(SHOP_TABLE).select('*').where({ id: id });
    },

    selectByName(name) {
        return knex(SHOP_TABLE).select('*').where('name', 'like', `%${name}%`);
    },

    create(shop) {
        return knex('shop').insert(shop);
    },

    update(id, shop) {
        return knex(SHOP_TABLE).where({ id: id }).update(shop);
    },

    delete(id) {
        return knex(SHOP_TABLE).where({ id: id }).delete();
    },
};
