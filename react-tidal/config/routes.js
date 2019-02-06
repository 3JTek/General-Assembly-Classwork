const router = require('express').Router()

const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const artistsController = require('../controllers/artists')
const albumsController = require('../controllers/albums')
const tracksController = require('../controllers/tracks')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.route('/artists')
  .get(artistsController.index)
  .post(secureRoute, artistsController.create)

router.route('/artists/:id')
  .get(artistsController.show)
  .put(secureRoute, artistsController.update)
  .delete(secureRoute, artistsController.delete)

router.route('/albums')
  .get(albumsController.index)
  .post(secureRoute, albumsController.create)

router.route('/albums/:id')
  .get(albumsController.show)
  .put(secureRoute, albumsController.update)
  .delete(secureRoute, albumsController.delete)

router.route('/tracks')
  .get(tracksController.index)
  .post(secureRoute, tracksController.create)

router.route('/tracks/:id')
  .get(tracksController.show)
  .put(secureRoute, tracksController.update)
  .delete(secureRoute, tracksController.delete)

router.post('/tracks/:id/comments', secureRoute, tracksController.commentCreate)
router.delete('/tracks/:id/comments/:commentId', secureRoute, tracksController.commentDelete)

module.exports = router
