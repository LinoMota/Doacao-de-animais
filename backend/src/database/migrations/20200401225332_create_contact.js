
// CREATE TABLE contact(
//     socialmedia VARCHAR(40) NOT NULL,
//     link VARCHAR(100) NOT NULL
// );

// ALTER TABLE contact
// ADD CONSTRAINT FK_contact_donor
// FOREIGN KEY() REFERENCES user();



exports.up = function(knex) {
    return knex.schema.createTable('contact', (table) => {
        table.string('userId')
        table.string('socialmedia')
        table.string('link')

        table.foreign('userId').references('user.id')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('contact')
};
