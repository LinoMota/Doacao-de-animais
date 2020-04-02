


exports.up = function(knex) {
    return knex.schema.createTable('address', (table) => {
        table.string('id').primary()
        table.string('street')
        table.string('number')
        table.string('uf')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('address')
};
