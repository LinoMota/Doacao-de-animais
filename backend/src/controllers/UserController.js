const connection = require('../connection')
const uuidv4 = require('uuid').v4


async function validUser(userId){
    const query = await connection('user')
        .where('id', userId)
        .select('id')
        .first();

    console.log('query result' , query)

    if (query === undefined || query.id != userId)
        return false;

    return true;
}

// Gathering info

async function viewAdoptions(userId){

    if (!userId)
        return response.status(401).json({ error: "Operation Not permitted." })

    const adoptions = await connection('user')
        .where('user.id', userId).join('donation', 'user.id', '=', 'donation.angel')

    return adoptions
}

async function viewContacts(userId){

    if (!userId)
        return response.status(401).json({ error: "Operation Not permitted." })

    const contacts = await connection('contact')
        .select('socialmedia','link')
        .where('userId', userId)

    return contacts
}

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
        
        return response.json(users)
    },

    // Profile

    async viewFullUserData(request, response){

        console.log("viewing :", request.headers.authorization)

        const userId = request.headers.authorization
        const isValid = await validUser(userId)

        if (!userId || !isValid)
            return response.status(401).json({ error: "Operation Not permitted." });
        

        const user = await connection('user')
            .select('user.*', 'address.street', 'address.number', 'address.uf')
            .where('id', userId).join('address','user.id','=','address.userId').first()

        const contacts = await viewContacts(userId)

        const adoptions = await viewAdoptions(userId)

        Object.assign(user,{contacts,adoptions})

        return response.json(user);
    },

    // CRUD

    async insert(request,response){

        let state = "ok";

        console.log("inserting : ", request.body)
        const { name, address, username, contacts, password } = request.body
        const id = uuidv4()

        await connection('user').insert({
            id : id,
            name: name,
            password : password,
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

        if (!userId && validUser(userId))
            return response.status(401).json({ error: "Operation Not permitted." });

        const { name, username  } = request.body

        const update = await connection('user')
            .where('id', userId)
            .update({
                name : name,
                username : username,
                updatedAt: new Date()
            })

        return response.status(204).send();
    },

    async delete(request, response) {
        console.log("removing :", request.headers.authorization)

        const userId = request.headers.authorization;

        if (!userId || validUser(userId) ) 
            return response.status(401).json({ error: "Operation Not permitted." });
        

        const exec = await connection('user').where('id', userId).delete();

        return response.status(204).send();
    },

    
}