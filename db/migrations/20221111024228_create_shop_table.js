/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('shop', function (table) {
        table.increments('id').primary(); // Set this column as the primary key
        table.string('name', 32).unique().notNullable();
        table.string('tel', 15);
        table.string('email', 32);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema.dropTable('shop');
};
