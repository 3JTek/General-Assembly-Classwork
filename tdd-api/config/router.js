const router = require('express').Router()
const secureRoute = require('../lib/secureRoute')
const bangers = require('../controllers/bangers')
const auth = require('../controllers/auth')

router.route('/bangers')
  .get(bangers.index)
  .post(secureRoute, bangers.create)

router.route('/bangers/:id')
  .get(bangers.show)
  .put(secureRoute, bangers.update)
  .delete(secureRoute, bangers.delete)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Not found' }))

module.exports = router
