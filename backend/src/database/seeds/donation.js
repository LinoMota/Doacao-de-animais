const uuidv4 = require('uuid').v4

exports.seed = function(knex) {
  return knex('donation').del()
    .then( async () => {
      const userList = await knex('user').select('id')
      const randUser = () => userList[Math.floor(userList.length * Math.random())].id;

      return knex('donation').insert([
        {
          id: uuidv4(),
          createdAt : new Date(),
          updatedAt : new Date(),
          title: "Cachorro azul",
          description: "doando o zulao.",
          photo: "",
          status : "P",
          angel : null,
          userId : randUser()
        },
        {
          id: uuidv4(),
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Doando um gato preto :)",
          description: "Ainda filhote e quero doar pois já possuo varios.",
          photo: "",
          status: "P",
          angel: null,
          userId: randUser()
        },
        {
          id: uuidv4(),
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Cachorro Pug",
          description: "Preciso que esse carinha ganhe um novo lar.",
          photo: "",
          status: "P",
          angel: null,
          userId: randUser()
        },
        {
          id: uuidv4(),
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Pastor Alemão",
          description: "Filhote que precisa de novos donos.",
          photo: "",
          status: "P",
          angel: null,
          userId: randUser()
        },
        {
          id: uuidv4(),
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Briba",
          description: "Briba eh uma largatixa mt foda, precisa de um dono urgente.",
          photo: "",
          status: "P",
          angel: null,
          userId: randUser()
        },
        {
          id: uuidv4(),
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Bubasauro",
          description: "Muito fraco, precisa de um treinador competente para torna-lo mais poderoso.",
          photo: "",
          status: "P",
          angel: null,
          userId: randUser()
        },
        {
          id: uuidv4(),
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Charmander",
          description: "Estou doando pois não quero minha casa pegando fogo.",
          photo: "",
          status: "P",
          angel: null,
          userId: randUser()
        },
        {
          id: uuidv4(),
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Hamster",
          description: "Marronzin e lindin pra sua compania.",
          photo: "",
          status: "P",
          angel: null,
          userId: randUser()
        },
        {
          id: uuidv4(),
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Macaco",
          description: "Macaco ta no grau pra doação.",
          photo: "",
          status: "P",
          angel: null,
          userId: randUser()
        },
        {
          id: uuidv4(),
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Papagaio",
          description: "Fala pra krlh aguento mais n mano mds.",
          photo: "",
          status: "P",
          angel: null,
          userId: randUser()
        },
        {
          id: uuidv4(),
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Cobra",
          description: "Treinada e pronta para doação :D.",
          photo: "",
          status: "P",
          angel: null,
          userId: randUser()
        }
      ]);
    });
};
