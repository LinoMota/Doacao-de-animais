


exports.up = function(knex) {
    return knex.schema.createTable('address', (table) => {
        table.string('userId').notNull()
        table.string('street')
        table.string('number')
        table.string('uf')

        table.foreign('userId').references('user.id')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('address')
};
