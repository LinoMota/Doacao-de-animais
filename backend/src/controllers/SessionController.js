const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body || "";
        if (!id)
            return response.json({})

        const ong = await connection('user')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return response.status(400).json({ error: 'No user found' });
        }
        return response.json({
            userId
        });
    }
};