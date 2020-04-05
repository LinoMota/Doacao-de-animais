const express = require('express')

const UserController = require('./controllers/UserController')
const DonationController = require('./controllers/DonationController')
const router = express.Router()

// Donation
router.get('/donation/all', DonationController.viewAll)
router.put('/donation/update', DonationController.update)
router.post('/donation/insert',DonationController.insert)

// User
router.get('/user/all', UserController.viewAll)
router.get('/user/',UserController.viewFullUserData)
router.post('/user/insert', UserController.insert)
router.put('/user/update', UserController.update)
router.delete('/user/delete', UserController.delete)

router.get('/', function (request, response) {
    return response.json({
        "status": "meu deus"
    })
})

module.exports = router;