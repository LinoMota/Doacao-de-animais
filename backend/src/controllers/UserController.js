const connection = require('../connection')

module.exports = {
    insert(request,response){
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({ id });
    },

    update(request, response) {
        return console.log(1)
    },

    delete(request, response) {
        return console.log(2)
    }
}