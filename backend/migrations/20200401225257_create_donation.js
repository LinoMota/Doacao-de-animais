
// CREATE TABLE donation(
//     id VARCHAR(40) NOT NULL,
//     photo VARCHAR(400),
//     id_user VARCHAR(40) NOT NULL,
//     title VARCHAR(40) NOT NULL,
//     description VARCHAR(500) NOT NULL,
//     status CHAR(1),
//     angel VARCHAR(40),
//     CONSTRAINT PK_donation PRIMARY KEY(id)
// );

exports.up = function(knex) {
    return knex.schema.createTable('donation', (table) => {
        table.string('id').primary()
        table.dateTime('createdAt').notNull()
        table.dateTime('updatedAt').nullable()
        table.dateTime('deletedAt').nullable()

        table.string('title',40).notNull()
        table.string('photo',400)
        table.string('status',1)

        table.string('id_user').notNull()
        table.string('angel').nullable()

        table.foreign('id_user').references('user.id')
        table.foreign('angel').references('user.id')
        
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('donation')
};
