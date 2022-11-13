const knex = require('../../src/knex.js');

const SHOP_TABLE = 'shop';

module.exports = {
    SHOP_TABLE,

    /**
     * @param {}
     * @return {Promise<Array>}
     */
    //GET /shops
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
        return knex('shop')
            .insert(shop)
            .then((res) => res[0].id);
    },

    /**
     * @param {integer} id - The unique id of the existing customer.
     * @param {Object} shop - The customer data to change.
     * @return {Promise<integer>} A promise that resolves to the id of the updated customer.
     */
    update(id, shop) {
        return knex(SHOP_TABLE)
            .where({ id: id })
            .update(shop)
            .then((res) => res[0].id);
    },

    /**
     * @param {integer} id
     * @return {Promise<integer>}
     */
    delete(id) {
        return knex(SHOP_TABLE)
            .where({ id: id })
            .delete()
            .then((res) => res[0].id);
    },
};
