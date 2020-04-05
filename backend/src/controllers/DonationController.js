const connection = require('../connection')
const uuidv4 = require('uuid').v4

module.exports = {

    /*
        {
            name : "Lino Mota",
            usename : "linomota0",
            email : "linomota0@gmail.com",
            address : {
                street : "Rua Zas",
                number : 20,
                uf : "AM"
            },
            contacts : [
                { 
                    socialnetwork : "email",
                    link : this.email
                }
            ]
        }
    */

    async viewAll(request, response) {
        console.log("view all")
        let users = await connection('donation')
            .select('*')

        return response.json({
            users: users
        })
    },

    async insert(request, response) {

        let state = "ok";

        console.log("inserting : ", request.body)
        const { title, description, photo } = request.body

        const userId = request.headers.authorization
        
        const user = await connection('user')
            .where('id', userId)
            .select('id')
            .first();

        if (user && user.id != userId)
            return response.status(401).json({ error: "Operation Not permitted." });

        const donation = {
            id: uuidv4(),
            title: title,
            description: description,
            status: 'P',
            photo: photo,
            createdAt: new Date(),
            updatedAt: new Date(),
            id_user: userId
        };

        await connection('donation').insert(donation).then( () => {
            console.log("ok")
        })

        return response.json({ "state": state })
    },

    async update(request, response) {

        console.log("updating :", request.headers.authorization)

        const donationId = request.headers.authorization

        const donation = await connection('donation')
            .where('id', donationId)
            .select('id')
            .first()

        console.log(1)
        console.log(donation)

        if (donation && donation.id != donationId)
            return response.status(401).json({ error: "Operation Not permitted." });

        const { title, description, photo } = request.body

        const donationUpdate = { title, description, photo }

        const update = await connection('donation')
            .where('id', donationId)
            .update(donationUpdate)

        return response.status(204).send();
    },

    async delete(request, response) {
        console.log("removing :", request.headers.authorization)

        const donationId = request.headers.authorization;

        const query = await connection('donation')
            .where('id', donationId)
            .select('id')
            .first();

        if (query.id != donationId)
            return response.status(401).json({ error: "Operation Not permitted." });


        const exec = await connection('donation').where('id', donationId).delete();

        return response.status(204).send();
    }
}