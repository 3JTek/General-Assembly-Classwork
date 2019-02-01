const router = require('express').Router()
const translateController = require('../controllers/translate')

router.route('/message')
  .post(translateController.translate)

module.exports = router
