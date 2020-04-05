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

    async viewAll(request,response){
        console.log("view all")
        let users = await connection('user')
        .select('*')
        
        return response.json({
            users: users
        })
    },

    async insert(request,response){


        let state = "ok";

        console.log("inserting : ", request.body)
        const { name, address, username, contacts } = request.body
        const id = uuidv4()

        console.log(20,id)

        await connection('user').insert({
            id : id,
            name: name,
            username: username,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then( async () => {
            //creating address
            address.userId = id;
            await connection('address').insert(
                address
            )

            //creating contact
            contacts.forEach( async (contact) => 
                await connection('contact').insert({
                    userId : id,
                    socialmedia : contact.socialmedia,
                    link : contact.link
                })
            )
        }).catch( (error) => {
            state = error
            console.log("error could not insert user : ", error)
        })

        return response.json({ "state": state })
    },

    async update(request, response) {

        console.log("updating :", request.headers.authorization)

        const userId = request.headers.authorization

        const user = await connection('user')
            .where('id', userId)
            .select('id')
            .first();

        if (user.id != userId)
            return response.status(401).json({ error: "Operation Not permitted." });

        const { name, username  } = request.body

        const update = await connection('user')
            .where('id', userId)
            .update({
                name : name,
                username : username
            })

        return response.status(204).send();
    },

    async delete(request, response) {
        console.log("removing :", request.headers.authorization)

        const userId = request.headers.authorization;

        const query = await connection('user')
            .where('id', userId)
            .select('id')
            .first();

        if (query.id != userId) 
            return response.status(401).json({ error: "Operation Not permitted." });
        

        const exec = await connection('user').where('id', userId).delete();

        return response.status(204).send();
    }
}