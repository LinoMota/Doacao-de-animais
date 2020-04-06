


exports.up = function(knex) {
    return knex.schema.createTable('address', (table) => {
        table.string('userId').notNull()
        table.string('neighborhood').notNull()
        table.string('street').notNull()
        table.string('number').notNull()
        table.string('uf').notNull()

        table.foreign('userId').references('user.id')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('address')
};
