const router = require('express').Router()
const filmsController = require('../controllers/films')
const usersController = require('../controllers/users')
const secureRoute = require('../lib/secureRoute.js')

router.route('/register')
  .post(usersController.register)

router.route('/login')
  .post(usersController.login)

router.route('/confirm/:code')
  .get(usersController.confirm)

router.route('/films')
  .get(filmsController.index)
  .post(secureRoute, filmsController.create)

router.route('/films/:id')
  .get(filmsController.show)
  .put(filmsController.update)
  .delete(filmsController.delete)

module.exports = router
