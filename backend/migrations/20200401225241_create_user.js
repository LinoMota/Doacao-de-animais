
// CREATE TABLE user(
//     id VARCHAR(40),
//     profile_image VARCHAR(300),
//     username VARCHAR(250) NOT NULL,
//     email VARCHAR(250) NOT NULL,
//     address VARCHAR(40) NOT NULL,
//     contact VARCHAR(40) NOT NULL
// );

exports.up = function(knex) {
    return knex.schema.createTable('user', (table) => {
            table.increments('id').primary()
            table.dateTime('createdAt').notNull()
            table.dateTime('updatedAt').nullable()
            table.dateTime('deletedAt').nullable()

            table.string('profile_img_path').nullable()
            table.string('username').notNull()

            table.string('id_address').notNull()
            table.string('id_contact').notNull()

            table.foreign('id_address').references('address.id')
            table.foreign('id_contact').references('contact.id')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
