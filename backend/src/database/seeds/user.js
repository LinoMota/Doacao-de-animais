const uuidv4 = require('uuid').v4

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          id: uuidv4(),
          name: "Lino Mota",
          username: "linomota0",
          password: "zipzapzu"
        }, 
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          id: uuidv4(),
          name: "Gabriel Meneses",
          username: "gabiclutch",
          password: "f1comTioBola"
        }
      ]);
    });
};
