const User = require('../models/user')
const jwt = require('jsonwebtoken')
const mailer = require('../lib/mailer')

function registerRoute(req, res) {
  User.create(req.body)
    .then(user => mailer.sendRegistrationEmail(user))
    .then(() => res.status(201).json({ message: 'Registration email sent' }))
    .catch(err => res.status(422).json(err.errors))
}

function loginRoute(req, res) {
  User.findOne({ email: req.body.email, verified: true })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      const payload = { sub: user._id }
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '6h' })

      res.json({
        token,
        message: `Welcome back ${user.username}!`
      })
    })
}
function confirmRoute(req, res) {
  User.findOne({ confirmCode: req.params.code })
    .then(user => {
      if(!user) return res.status(401).json({ message: 'Unauthorized' })

      user.verified = true
      return user.save()
    })
    .then(() => res.json({ message: 'Account verified' }))
}

module.exports = {
  register: registerRoute,
  login: loginRoute,
  confirm: confirmRoute
}
