const express = require('express')

const UserController = require('./controllers/UserController')

const router = express.Router()

router.put('/user/cadastrar', UserController.insert)

router.get('/', function (request, response) {
    return response.json({
        "status": "meu deus"
    })
})

module.exports = router;