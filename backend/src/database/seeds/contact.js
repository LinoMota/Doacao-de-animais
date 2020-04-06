
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('contact').del()
    .then(async () => {

      const users = await knex('user').select('id')
      // Inserts seed entries
      return knex('contact').insert([
        {
          userId: users[0].id,
          socialmedia: "email",
          link: "linomota0@gmail.com"
        },
        {
          userId: users[1].id,
          socialmedia: "email",
          link: "gbmeneses@gmail.com"
        },
        {
          userId: users[1].id,
          socialmedia: "instagram",
          link: "@gbmeneses"
        }
      ]);
    });
};
