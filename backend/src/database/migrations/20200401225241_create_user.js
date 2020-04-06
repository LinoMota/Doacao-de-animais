
// CREATE TABLE user(
//     id VARCHAR,
//     profile_image VARCHAR(300),
//     username VARCHAR(250) NOT NULL,
//     email VARCHAR(250) NOT NULL,
//     address VARCHAR(40) NOT NULL,
//     contact VARCHAR(40) NOT NULL
// );

exports.up = function(knex) {
    return knex.schema.createTable('user', (table) => {
            table.string('id').primary()
            table.dateTime('createdAt').notNull()
            table.dateTime('updatedAt').notNull()

            table.string('profileImgPath').nullable()
            table.string('username').notNull()
            table.string('password').notNull()
            table.string('name').notNull()

            // table.string('id_address').notNull()

            // table.foreign('id_address').references('address.id')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
