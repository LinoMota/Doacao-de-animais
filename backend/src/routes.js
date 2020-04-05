const express = require('express')

const UserController = require('./controllers/UserController')

const router = express.Router()

router.get('/user/all', UserController.viewAll)
router.post('/user/insert', UserController.insert)
router.put('/user/update', UserController.update)
router.delete('/user/delete', UserController.delete)

router.get('/', function (request, response) {
    return response.json({
        "status": "meu deus"
    })
})

module.exports = router;