
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('address').del()
    .then(async () => {

      const users = await knex('user').select('id')
      // Inserts seed entries
      return knex('address').insert([
        {
          userId: users[0].id,
          street: "R 1",
          neighborhood: "Adrianopolis",
          number: 12,
          uf: "AM"
        },
        {
          userId: users[1].id,
          neighborhood: "Aleixo",
          street: "Rua Zas",
          number: 20,
          uf: "AM"
        }
      ]);
    });
};
