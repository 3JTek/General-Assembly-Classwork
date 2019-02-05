const router = require('express').Router()

const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const artistsController = require('../controllers/artists')
const albumsController = require('../controllers/albums')
const tracksController = require('../controllers/tracks')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/artists', artistsController.index)
router.get('/artists/:id', artistsController.show)

router.get('/albums', albumsController.index)
router.get('/albums/:id', albumsController.show)

router.get('/tracks', tracksController.index)
router.get('/tracks/:id', tracksController.show)

router.post('/tracks/:id/comments', secureRoute, tracksController.commentCreate)

module.exports = router
