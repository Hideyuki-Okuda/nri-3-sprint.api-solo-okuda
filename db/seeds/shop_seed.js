/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('shop').del();
    await knex('shop').insert([
        {
            id: 1,
            name: '鳥貴族渋谷店',
            tel: '07021821928',
            email: 'toriki@gmail.com',
        },
        {
            id: 2,
            name: 'おさかなバル新宿店',
            tel: '08022221111',
            email: 'osakana@gmail.com',
        },
        {
            id: 3,
            name: '楽市楽座泉岳寺店',
            tel: '0582981781',
            email: 'raku@gmail.com',
        },
    ]);
};
